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
  const { dates } = useContext(BookingContext);

  const queryClient = useQueryClient();

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [message, setMessage] = useState("");
  const [pet, setPet] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("pet global", pet);
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

  //refetchQuery -> pour reloader quand le doc est créé

  //formating the dates for the patch
  let bookedDatesToPatch = [
    {
      Start: dates.newStartDate,
      End: dates.newEndDate,
    },
  ];

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
  if (isLoading || isLoadingBooking || isLoadingPatchVilla) {
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
              <div>
                <p>Remember pets are not allowed in the villa</p>
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
            <Button
              cta={"Reserve now"}
              backgroundColor="black"
              onClick={handleSubmit}
            ></Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
