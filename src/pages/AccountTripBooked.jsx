import React, { useState, useContext, useMemo, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import "./AccountTripBooked.css";
import { useNavigate } from "react-router-dom";

function AccountTripBooked() {
  const { user } = useContext(AuthContext);
  const collectionBookingofOneUser = "http://localhost:3000/booking/created";
  const collectionBooking = "http://localhost:3000/booking";

  const [userBookings, setUserBookings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleteItem, setDeleteItem] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setLoading(false);
      getUserBookings();
      setUserBookings;
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      getUserBookings();
    }
  }, [deleteItem]);

  //   memorizing the data of user
  const memoUser = useMemo(() => {
    return user ? user : null;
  }, [user]);

  //get all the bookings made by the user
  const getUserBookings = async () => {
    try {
      // console.log("into getUserBookings");
      const allBookings = await axios.get(collectionBookingofOneUser, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUserBookings(allBookings.data);
      // console.log("All bookings", allBookings.data);
    } catch (error) {
      console.log(
        "there is an error when fetching the user's bookings in the AccountTripBooked Page",
        error
      );
    }
  };

  //delete a booking
  const deleteOneBooking = async (event, id) => {
    try {
      const deletedBooking = await axios.delete(`${collectionBooking}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setDeleteItem(true);
      // {
      //   <div>We confirm that your booking has been successfully canceled</div>;
      // }
      // console.log("booking is canceled", deletedBooking.data);
    } catch (error) {
      console.log("there is an error when deleting the villa", error);
    }
  };

  const patchOneBooking = async (id) => {
    try {
      //if dates changed -> patch the dates in Villa collection
      // const patchedBooking = await axios.patch;
      //Patch the booking document you change nb of People, message, dates
      console.log("ICI", id);

      navigate(`/booking/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user || loading || !userBookings) {
    return <p>Loading user data...</p>;
  }

  // console.log("bookings of one user", userBookings);

  return (
    <>
      <div className="accountContainer">
        <h1>Your retreats</h1>
        {userBookings.Booking.map((booking) => {
          console.log(booking);
          return (
            <>
              <div className="cardBooking">
                <h1 key={booking.villaId._id}>{booking.villaId.name}</h1>
                <h2>
                  {booking.villaId.region} - {booking.villaId.country}
                </h2>
                <p>StartDate : {booking.bookedDates.Start.split("T", 1)}</p>
                <p>EndDate : {booking.bookedDates.End.split("T", 1)}</p>
                <p>For {booking.numberOfPeople} people</p>

                <p style={{ fontSize: 16, textAlign: "center" }}>
                  You sent this message: <br />{" "}
                  <span style={{ fontStyle: "italic" }}>
                    {" "}
                    "{booking.message}"
                  </span>
                </p>

                <p
                  style={{
                    fontSize: 12,
                    textAlign: "center",
                  }}
                >
                  Number of reservation : <br /> {booking._id}
                </p>
                <button
                  type="submit"
                  className="buttonTripBooked"
                  onClick={(event) => patchOneBooking(booking._id)}
                >
                  Edit my booking
                </button>
                <button
                  className="buttonTripBooked"
                  onClick={(event) => deleteOneBooking(booking._id)}
                >
                  Cancel this booking
                </button>
              </div>
            </>
          );
        })}
      </div>
      {deleteItem === true && (
        <div>
          <p style={{ fontSize: 16, textAlign: "center" }}>
            "We confirm that your booking with reservation number has been
            successfully canceled"
          </p>
        </div>
      )}
    </>
  );
}

export default AccountTripBooked;