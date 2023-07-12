import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import React, { useContext, useState, useEffect, useMemo } from "react";
import OneInput from "../components/OneInput";
import Button from "../components/Button";
import "./BookingPage.css";
import { AuthContext } from "../context/AuthContext";
import { memo } from "react";
import service from "../service/service";
import VillaCardDetails from "../components/VillaCardDetails";
import { getOneVilla, patchVilla } from "../api/villa";
import { QueryClient, QueryClientProvider, useMutation } from "react-query";
import { submitBooking } from "../api/booking";
import { useQuery } from "react-query";
import { useQueryClient } from "react-query";
import { BookingContext } from "../context/BookingContext";

function BookingPage() {
  //Retrieve data from AuthContext
  const { user } = useContext(AuthContext);

  //Retrieve data from BookingContext
  const { startDate, setStartDate, endDate, setEndDate, dates, setDates } =
    useContext(BookingContext);

  console.log("DATES DANS BOOKING", dates);

  const queryClient = useQueryClient();

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [message, setMessage] = useState("");
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

  //handling the values before submit
  function handleNumberOfPeople(event) {
    event.preventDefault();
    setNumberOfPeople(event.target.value);
  }

  function handleMessage(event) {
    event.preventDefault();
    setMessage(event.target.value);
  }

  //create the booking
  // async function submitBooking(event) {
  //   event.preventDefault();
  //   try {
  //     //creating a new array to store the bookedDates from villa collection and from my booking
  //     const newDatesVillaCollection = [];

  //     villa.Villa.bookedDates.map((element) => {
  //       newDatesVillaCollection.push(element);
  //     });
  //     newDatesVillaCollection.push(dates);

  //     const patchDates = await service.patch(
  //       `/villa/${id}`,
  //       newDatesVillaCollection
  //     );

  //     //creating a post in Booking collection
  //     const booking = await service.post(
  //       `/booking/${id}`,
  //       {
  //         numberOfPeople,
  //         message,
  //         userId: user._id,
  //         villaId: id,
  //         bookedDates: { Start: dates.newStartDate, End: dates.newEndDate },
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );

  //     navigateToConfirmationBookingPage(event);
  //   } catch (error) {
  //     console.log(
  //       "there's an error when creating a booking or patching the bookedDates in the BookingPage",
  //       error
  //     );
  //   }
  // }

  //navigate to the next page once submit is done
  // function navigateToConfirmationBookingPage(event) {
  //   event.preventDefault();
  //   navigate("/booking-confirmed");
  // }

  //handle the booking creation
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataBooking = await mutate(numberOfPeople, message, user._id, id, {
      Start: dates.newStartDate,
      End: dates.newEndDate,
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
      handlePatchVilla(e);
    },
    onError: `error ${error}`,
  });

  //useQuery to create a patch in the villa collection
  // const {
  //   isLoading: isLoadingPatchVilla,
  //   isError: isErrorPatchVilla,
  //   error: errorPatchVilla,
  //   mutate: mutateVilla,
  // } = useMutation({
  //   mutationFn: patchVilla,
  //   onSuccess: (newPatchVilla) => {
  //     queryClient.setQueryData(["villas"], newPatchVilla);
  //   },
  // });

  const patchVilla = async (e) => {
    e.preventDefault();
    const newPatchVilla = await patchVilla("toto");
  }; //can refetchQuery -> pour reloader quand le doc est créé

  //  creating a new array to store the bookedDates from villa collection and from my booking

  //patch villa
  function handlePatchVilla(e) {
    e.preventDefault();
    mutateVilla(id, newDatesVillaCollection);
  }

  // useEffect(() => {
  //   getOneVilla();
  // }, []);

  // let newDatesVillaCollection = [];
  // const datesBooked = useMemo(() => {
  //   if (villa) {
  //     villa?.Villa.bookedDates.map((element) => {
  //       newDatesVillaCollection.push(element);
  //     });
  //     newDatesVillaCollection.push(dates);
  //   }
  //   return newDatesVillaCollection;
  // }, [villa]);

  // console.log("DATES", newDatesVillaCollection);

  //memo the results for the dates
  // const memoDates = useMemo(() => {
  //   if (villa && villa.Villa && villa.Villa.bookedDates) {
  //     return villa.Villa.bookedDates.map((element) => {
  //       return {
  //         start: new Date(element.Start),
  //         end: new Date(element.End),
  //       };
  //     });
  //   }
  //   return [];
  // }, [villa]);

  //if not, display a little message to avoid error message
  if (isLoading || isLoadingBooking) {
    return <div>Please wait, content is loading</div>;
  }

  if (isError || isErrorBooking) {
    return (
      <div>
        Error {error} || {errorBooking}
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

            {/* {villa.petAllowed
              ? true(
                  <div>
                    <p>Are you coming with your pets?</p>
                    <button onClick={choosePet}>Yes</button>
                  </div>
                )
              : false(
                  <div>
                    <p>Remember pets are not allowed in the villa</p>
                  </div>
                )} */}
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
