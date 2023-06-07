import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";

function AccountTripBooked() {
  const { user } = useContext(AuthContext);
  const collectionBooking = "http://localhost:3000/booking";
  const userId = user._id;

  const [userBookings, setUserBookings] = useState();

  //get all the bookings
  const getUserBookings = async () => {
    try {
      const allBookings = await axios.get(`${collectionBooking}/${userId}`);
      setUserBookings(allBookings.data);
    } catch (error) {
      console.log(
        "there is an error when fetching the user's bookings in the AccountTripBooked Page",
        error
      );
    }
  };

  //patch a booking

  //delete a booking fidn by ID and delete
  const deleteOneBooking = async (id) => {
    try {
      const deletedBooking = await axios.delete(
        `${collectionBooking}/${id}`
        console.log("booking is canceled", deletedBooking.data)
      );
    } catch (error) {}
  };

  return (
    <div>
      <h1>Your retreats</h1>
      <div>
        <h1>Villa cacahuète</h1>
        <h2>Region - Country</h2>
        <img></img>
      </div>
      <p>Booked Dates</p>
      <p>Number of People</p>
      <p>Your message</p>
      <p>Number of reservation : id</p>
      <button>Edit</button>
      <button onClick={deleteOneBooking(villa.id)}>Delete</button>
    </div>
  );
}

export default AccountTripBooked;
