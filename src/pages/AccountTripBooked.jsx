import React, { useState, useContext, useMemo, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./AccountTripBooked.css";

function AccountTripBooked() {
  const { user } = useContext(AuthContext);
  const collectionBooking = "http://localhost:3000/booking/created";

  const [userBookings, setUserBookings] = useState();

  //patch a booking

  //delete a booking fidn by ID and delete
  //   const deleteOneBooking = async (id) => {
  //     try {
  //       const deletedBooking = await axios.delete(
  //         `${collectionBooking}/${id}`
  //         console.log("booking is canceled", deletedBooking.data)
  //       );
  //     } catch (error) {}
  //   };

  //   memorizing the data of user

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
      getUserBookings();
    }
  }, [user]);

  const memoUser = useMemo(() => {
    return user ? user : null;
  }, [user]);

  //   const userId = memoUser._id;

  console.log("id of the user", user);
  //get all the bookings made by the user
  const getUserBookings = async () => {
    try {
      console.log("into getUserBookings");
      const allBookings = await axios.get(collectionBooking, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUserBookings(allBookings.data);
      console.log(allBookings.data);
    } catch (error) {
      console.log(
        "there is an error when fetching the user's bookings in the AccountTripBooked Page",
        error
      );
    }
  };

  if (!user || loading === true) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="accountContainer">
      <h1>Your retreats</h1>
      <div className="cardBooking">
        <h1>Villa cacahuète</h1>
        <h2>Region - Country</h2>
        <p>Booked Dates</p>
        <p>Number of People</p>
        <p>Your message</p>
        <p>Number of reservation : id</p>
        <button className="buttonTripBooked">Edit</button>
        {/* <button onClick={deleteOneBooking(villa.id)}>Delete</button> */}
      </div>
    </div>
  );
}

export default AccountTripBooked;
