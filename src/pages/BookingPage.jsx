import { useOutletContext, useParams } from "react-router-dom";
import React, { useContext, useState, useEffect, useMemo } from "react";
import OneInput from "../components/OneInput";
import Button from "../components/Button";
import axios from "axios";
import "./BookingPage.css";
import peopleIcon from "../assets/peopleIcon.png";
import squareMeterIcon from "../assets/squaremeterIcon.png";
import bedroomIcon from "../assets/iconebed.png";
import bathIcon from "../assets/iconebathroom.png";
import moutainviewIcon from "../assets/iconeview.png";
import DatePicker from "react-datepicker";
import { AuthContext } from "../context/AuthContext";
import Box from "../components/Box";

function BookingPage() {
  //post on Booking
  //as props the dates, startdate and endate and user ID and idVilla

  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    dates,
    setDates,
    user,
  } = useContext(AuthContext);

  console.log("user", user);

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [pet, setPet] = useState(false);
  const [message, setMessage] = useState("");
  const [villa, setVilla] = useState("");
  const { id } = useParams();
  const collectionVilla = "http://localhost:3000/villa";
  const collectionBooking = "http://localhost:3000/booking";
  const collectionTrip = "";

  //fetch Villas Data from db
  const getOneVilla = async () => {
    try {
      const oneVilla = await axios.get(`${collectionVilla}/${id}`);
      //   console.log(oneVilla.data);
      setVilla(oneVilla.data);
    } catch (error) {
      console.log(
        error,
        "there is an error when fetching one villa by ID from db on the villaPage"
      );
    }
  };

  console.log("ID Villa is ", id);

  function handleNumberOfPeople(event) {
    event.preventDefault();
    setNumberOfPeople(event.target.value);
  }

  function handleMessage(event) {
    event.preventDefault();
    setMessage(event.target.value);
  }

  // function handlePet(event) {
  //   event.preventDefault();
  //   setPet(event.target.value);
  // }
  // function choosePet() {
  //   console.log("totot");

  //   setPet(true);
  //   console.log("what's my petstate?", pet);
  // }

  // function chooseNoPet() {
  //   console.log("totot");
  //   setPet(false);
  //   console.log("what's my petstate?", pet);
  // }

  async function submitBooking(event) {
    event.preventDefault();
    try {
      const booking = await axios.post(
        { collectionBooking },
        {
          numberOfPeople,
          message,
          userId: user.id,
          villaId: id,
        }
      );
      console.log("this booking is postes in the db", booking);

      // // const bookingDates = await axios.post("", {
      // //   dates,
      // });

      // ajouter memodates et dates
      const changeBookedDatesVilla = await axios.patch("", {});
    } catch (error) {
      console.log("there's an error when creating a booking error", error);
    }
  }

  useEffect(() => {
    getOneVilla();
  }, []);
  console.log("here's the data from the villa", villa);

  let petAllowed;

  console.log(villa);

  // if (villa.Villa.petFriendly === false) {
  //   petAllowed = false;
  // } else {
  //   petAllowed = true;
  // }

  const memoDates = useMemo(() => {
    if (villa && villa.Villa && villa.Villa.bookedDates) {
      return villa.Villa.bookedDates.map((element) => {
        return {
          start: new Date(element.Start),
          end: new Date(element.End),
        };
      });
    }
    return [];
  }, [villa]);

  //if not, display a little message to avoid error message
  if (!villa) {
    return <div>Please wait, content is loading</div>;
  }

  return (
    <>
      <div className="bookingVillaContainer">
        <div className="villaBookingDetails">
          <table>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th colSpan={2}>
                  <h1>{villa.Villa.name}</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <h2
                    style={{ textAlign: "center" }}
                  >{`${villa.Villa.region} — ${villa.Villa.country}`}</h2>
                </td>
              </tr>
              <tr className="flexRowTable">
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <img src={peopleIcon} />
                    <p>{`${villa.Villa.numberOfPeople} people`}</p>
                  </div>
                </td>
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <img src={squareMeterIcon} />
                    <p>{`${villa.Villa.squareMeter} m2`}</p>
                  </div>
                </td>
              </tr>
              <tr className="flexRowTable">
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <img src={bedroomIcon} />
                    <p>{`${villa.Villa.bedrooms} bedrooms`}</p>
                  </div>
                </td>
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <img src={bathIcon} />
                    <p>{`${villa.Villa.bathrooms} bathrooms`}</p>
                  </div>
                </td>
              </tr>
              <tr className="flexRowTable">
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <img src={moutainviewIcon} />
                    <p>{`${villa.Villa.view} view`}</p>
                  </div>
                </td>
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <p>From</p>
                    <p>{`${villa.Villa.pricePerWeek}€/week`}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <tr colSpan={2} className="flexVerticalCTA">
                  <DatePicker
                    key={"startDate"}
                    showIcon
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                    }}
                    isClearable
                    closeOnScroll={true}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                    excludeDateIntervals={memoDates}
                  />
                  <DatePicker
                    key={endDate}
                    showIcon
                    selected={endDate}
                    onChange={(date) => {
                      setEndDate(date);
                    }}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    isClearable
                    closeOnScroll={true}
                    dateFormat="yyyy/MM/dd"
                    excludeDateIntervals={memoDates}
                    placeholderText="Select a date other than today or yesterday"
                  />
                </tr>
              </tr>
            </tbody>
          </table>
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

            {/* {!petAllowed && (
              <div>
                <p>Remember pets are not allowed in the villa</p>
              </div>
            )} */}

            {/* {petAllowed && (
              <div>
                <p>Are you coming with your pets?</p>
                <button onClick={choosePet}>Yes</button>
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
              onClick={submitBooking}
            ></Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
