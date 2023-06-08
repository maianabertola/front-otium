import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import React, { useContext, useState, useEffect, useMemo } from "react";
import OneInput from "../components/OneInput";
import Button from "../components/Button";
import "./BookingPage.css";
import peopleIcon from "../assets/peopleIcon.png";
import squareMeterIcon from "../assets/squaremeterIcon.png";
import bedroomIcon from "../assets/iconebed.png";
import bathIcon from "../assets/iconebathroom.png";
import moutainviewIcon from "../assets/iconeview.png";
import DatePicker from "react-datepicker";
import { AuthContext } from "../context/AuthContext";
import { memo } from "react";
import service from "../service/service";

function BookingPage() {
  //Grab info from AuthContext
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    dates,
    setDates,
    user,
  } = useContext(AuthContext);

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [message, setMessage] = useState("");
  const [villa, setVilla] = useState("");
  const { id } = useParams();
  // const collectionVilla = "http://localhost:3000/villa";
  // const collectionBooking = "http://localhost:3000/booking";
  const navigate = useNavigate();

  //fetch Villas Data from db
  const getOneVilla = async () => {
    try {
      const oneVilla = await service.get(`/villa/${id}`);
      //   console.log(oneVilla.data);
      setVilla(oneVilla.data);
    } catch (error) {
      console.log(
        error,
        "there is an error when fetching one villa by ID from db on the villaPage"
      );
    }
  };

  //handling the value before submit
  function handleNumberOfPeople(event) {
    event.preventDefault();
    setNumberOfPeople(event.target.value);
  }

  function handleMessage(event) {
    event.preventDefault();
    setMessage(event.target.value);
  }

  async function submitBooking(event) {
    event.preventDefault();
    try {
      console.log("you are in submitBooking");
      // console.log("the date's booking", dates);
      //creating a new array to store the bookedDates from villa collection and from my booking
      const newDatesVillaCollection = [];

      villa.Villa.bookedDates.map((element) => {
        console.log("voici un element", element);
        newDatesVillaCollection.push(element);
      });
      newDatesVillaCollection.push(dates);

      const patchDates = await service.patch(
        `/villa/${id}`,
        newDatesVillaCollection
      );

      //creating a post in Booking collection
      const booking = await service.post(
        `/booking/${id}`,
        {
          numberOfPeople,
          message,
          userId: user._id,
          villaId: id,
          bookedDates: { Start: dates.newStartDate, End: dates.newEndDate },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log("this booking is posted in the db", booking);

      navigateToConfirmationBookingPage(event);
    } catch (error) {
      console.log(
        "there's an error when creating a booking or patching the bookedDates in the BookingPage",
        error
      );
    }
  }

  //navigate to the next page once submit is ok
  function navigateToConfirmationBookingPage(event) {
    event.preventDefault();
    navigate("/booking-confirmed");
  }

  useEffect(() => {
    getOneVilla();
  }, []);

  //memo the results for the dates
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

  // console.log("memodates should changed after the submit", memoDates);

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
