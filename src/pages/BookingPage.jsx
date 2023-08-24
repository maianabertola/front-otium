import { useNavigate, useParams } from "react-router-dom";
import React, { useContext, useState } from "react";
import Button from "../components/Button";
import "./BookingPage.css";
import { AuthContext } from "../context/AuthContext";
import VillaCardDetails from "../components/Card/VillaCardDetails";
import { getOneVilla, patchVilla } from "../api/villa";
import { useMutation } from "react-query";
import { submitBooking } from "../api/booking";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";
import { BookingContext } from "../context/BookingContext";
import Toggle from "../components/Toggle/Toggle";
import OneInput from "../components/Input/OneInput";
import LoadingSpinner from "../components/LoadingSpinner";

function BookingPage() {
  //Retrieve data from AuthContext
  const { user } = useContext(AuthContext);

  //Retrieve data from BookingContext
  const { dates, startDate, endDate } = useContext(BookingContext);

  const queryClient = useQueryClient();

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [message, setMessage] = useState("");
  const [pet, setPet] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  //fetch Villas Data from db
  const {
    isLoading,
    isError,
    error,
    data: villa,
  } = useQuery({
    queryKey: ["villas", parseInt(id)],
    queryFn: () => getOneVilla(id),
  });

  //CREATING BOOKING
  //handling the nb of people before submit
  function handleNumberOfPeople(event) {
    event.preventDefault();
    setNumberOfPeople(event.target.value);
  }

  //handling the message before submit
  function handleMessage(event) {
    event.preventDefault();
    setMessage(event.target.value);
  }

  function handlePet(event) {
    event.preventDefault();
    setPet(event.target.value);
  }

  //handle the booking creation
  //The mutate function from useMutation hook of react-query accepts a single argument. If you need to pass multiple pieces of data, you should pass them as properties of a single object. This object is then deconstructed in your mutation function
  const handleSubmit = async () => {
    mutate({
      numberOfPeople,
      pet,
      message,
      userId: user._id,
      villaId: id,
      bookedDates: {
        Start: dates.newStartDate,
        End: dates.newEndDate,
      },
    });
  };

  //useQuery to create a post in the booking collection
  const {
    isLoading: isLoadingBooking,
    isError: isErrorBooking,
    error: errorBooking,
    data: newBooking,
    mutate,
  } = useMutation({
    mutationFn: submitBooking,
    onSuccess: (newBooking) => {
      queryClient.setQueryData(["bookings"], newBooking);
      handlePatchVilla();
    },
    onError: `There is an error with mutate Booking ${error}`,
  });

  //formating the dates for the patch
  let bookedDatesToPatch = [
    {
      Start: dates.newStartDate,
      End: dates.newEndDate,
    },
  ];

  //calculate difference between the dates

  const nights = Math.round(
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );
  const pricePerNight = villa.Villa.pricePerWeek / 7;
  const totalPriceNights = Math.round(nights * pricePerNight);
  const petfees = 200;
  const total = petfees + totalPriceNights;

  //useQuery to patch villa
  const handlePatchVilla = async () => {
    mutateVilla({ id, bookedDates: bookedDatesToPatch });
  };

  const {
    isLoading: isLoadingPatchVilla,
    isError: isErrorPatchVilla,
    error: errorPatchVilla,
    mutate: mutateVilla,
  } = useMutation({
    mutationFn: patchVilla,
    onSuccess: (newPatchVilla) => {
      queryClient.setQueryData(["villas"], newPatchVilla);
      navigate("/booking-confirmed");
    },
  });

  //if not, display a little message to avoid error message
  if (isLoading || isLoadingBooking || isLoadingPatchVilla || !villa) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isError || isErrorBooking || isErrorPatchVilla) {
    return (
      <div>
        Error {error} || {errorBooking} || {errorPatchVilla}
      </div>
    );
  }

  return (
    <>
      <div className="bookingVillaContainer">
        <div className="villaBookingDetails">
          <VillaCardDetails villa={villa} booking={"true"}></VillaCardDetails>
        </div>

        <div className="precisionsBooking">
          <h1>Precisions for your trip</h1>
          <form>
            <OneInput
              label={"How many persons?"}
              key={"How many persons?"}
              type={"number"}
              value={numberOfPeople}
              name={"numberOfPeople"}
              onChange={handleNumberOfPeople}
            ></OneInput>
            {villa.Villa.numberOfPeople < numberOfPeople && (
              <>
                <p className="disclaimerWrapper">
                  Apologies, this villa has a capacity limit of{" "}
                  {villa.Villa.numberOfPeople} guests.<br></br> Please adjust
                  your booking request accordingly.
                </p>
              </>
            )}

            {villa.Villa.petFriendly ? (
              <>
                <p>Are you coming with your pets?</p>
                <div className="flexToggle">
                  <Toggle
                    key={"pet-yes"}
                    label={"Yes"}
                    value={true}
                    onChange={handlePet}
                  />
                  <Toggle
                    key={"pet-no"}
                    label={"No"}
                    value={false}
                    onChange={handlePet}
                    defaultChecked={true}
                  />
                </div>
              </>
            ) : (
              <div style={{ width: 100 + "%" }}>
                <p className="disclaimerWrapper">
                  Remember: pets are not allowed in this villa.
                </p>
              </div>
            )}

            <OneInput
              label={"Any more information to share?"}
              key={"Message"}
              type={"textarea"}
              value={message}
              name={"message"}
              onChange={handleMessage}
            ></OneInput>
            <div className="flexPriceInfos">
              <div>
                <p className="infoPrice">Night Price per {nights} nights</p>
              </div>
              <div>
                <p>{totalPriceNights} €</p>
              </div>
            </div>
            <hr></hr>
            {pet && (
              <>
                <div className="flexPriceInfos">
                  <div>
                    <p className="infoPrice">Pet fees</p>
                  </div>
                  <div>
                    <p>{petfees} €</p>
                  </div>
                </div>
                <hr></hr>
              </>
            )}
            <div className="flexPriceInfos">
              <div>
                <p className="infoPrice">Total</p>
              </div>
              <div>
                <p>{total} €</p>
              </div>
            </div>
            <hr style={{ marginBottom: 2 + "vh" }}></hr>
            {villa.Villa.numberOfPeople >= numberOfPeople && (
              <div className="flexCenter">
                <Button
                  cta={"Reserve now"}
                  backgroundColor="black"
                  onClick={handleSubmit}
                ></Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
