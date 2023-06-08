import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import React, { useContext, useState, useEffect, useMemo } from "react";
import OneInput from "../components/OneInput";
import Button from "../components/Button";
import service from "../service/service";
import "./BookingPage.css";
import peopleIcon from "../assets/peopleIcon.png";
import squareMeterIcon from "../assets/squaremeterIcon.png";
import bedroomIcon from "../assets/iconebed.png";
import bathIcon from "../assets/iconebathroom.png";
import moutainviewIcon from "../assets/iconeview.png";
import DatePicker from "react-datepicker";
import { AuthContext } from "../context/AuthContext";
import { memo } from "react";
import { parseISO } from "date-fns";

function BookingPage() {
  const { id } = useParams();
  // const collectionVilla = "http://localhost:3000/villa";
  const [booking, setBooking] = useState(null);
  const [villa, setVilla] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [dates, setDates] = useState();
  const [message, setMessage] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const navigate = useNavigate();

  //fetch data from the booking ID
  const getOneBooking = async () => {
    try {
      const oneBooking = await service.get(`/booking/edit/:${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setBooking(oneBooking.data);
    } catch (error) {
      console.log(
        "error when fetching booking info in the BookingPageEdit",
        error
      );
    }
  };

  // console.log("BOOKING", booking);

  //handling before submit
  function handleNumberOfPeople(event) {
    event.preventDefault();
    setNumberOfPeople(event.target.value);
  }

  function handleMessage(event) {
    event.preventDefault();
    setMessage(event.target.value);
  }

  //submit fire the patch
  async function submitPatching(event) {
    event.preventDefault();
    try {
      console.log("you are in submitBooking");
      //creating a new array to store the bookedDates from villa collection and from my edited booking
      const newDatesVillaCollection = [];
      villa.bookedDates.map((element) => {
        newDatesVillaCollection.push(element);
      });
      newDatesVillaCollection.push(dates);

      const patchDates = await service.patch(
        `/villa/${villa._id}`,
        newDatesVillaCollection
      );

      //   creating a patch in Booking collection
      const updatedBooking = await service.patch(
        `/booking/${id}`,
        {
          numberOfPeople,
          message,
          userId: booking.userId,
          villaId: villa._id,
          bookedDates: {
            Start: dates?.newStartDateforDB ?? startDate,
            End: dates?.newEndDateforDB ?? endDate,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      navigateToConfirmationBookingPage();
    } catch (error) {
      console.log(
        "there's an error when creating a booking or patching the bookedDates in the BookingPage",
        error
      );
    }
  }

  //navigate to the next page once submit is ok

  function navigateToConfirmationBookingPage() {
    navigate("/booking-confirmed");
  }
  //   console.log(booking);

  // when firing the button, the state is updated with a date object
  function createDate(event) {
    const newStartDateforDB = startDate.toISOString();
    console.log("START DATE", startDate);
    const newEndDateforDB = endDate.toISOString();
    event.preventDefault();
    const newDatesforDB = { newStartDateforDB, newEndDateforDB };
    setDates(newDatesforDB);
    console.log(
      "here's the new dates the user wants to book on BookingpageEdit",
      dates,
      newDatesforDB
    );
  }

  useEffect(() => {
    getOneBooking();
  }, []);

  useEffect(() => {
    if (booking) {
      setVilla(booking.Booking.villaId);
      setStartDate(parseISO(booking.Booking.bookedDates.Start));
      setEndDate(parseISO(booking.Booking.bookedDates.End));
      setMessage(booking.Booking.message);
      setNumberOfPeople(booking.Booking.numberOfPeople);
    }
  }, [booking]);

  //memo the dates
  const memoDates = useMemo(() => {
    if (villa && villa.bookedDates) {
      return villa.bookedDates.map((element) => {
        return {
          start: new Date(element.Start),
          end: new Date(element.End),
        };
      });
    }
    return [];
  }, [villa]);

  // console.log("villa info", villa);

  //changin the db dates for the react format
  const newStartDate = new Date(startDate);
  const newEndDate = new Date(endDate);

  //if not, display a little message to avoid error message
  if (!booking || !villa || !startDate || !endDate || !numberOfPeople) {
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
                  <h1>{villa.name}</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <h2
                    style={{ textAlign: "center" }}
                  >{`${villa.region} — ${villa.country}`}</h2>
                </td>
              </tr>
              <tr className="flexRowTable">
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <img src={peopleIcon} />
                    <p>{`${villa.numberOfPeople} people`}</p>
                  </div>
                </td>
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <img src={squareMeterIcon} />
                    <p>{`${villa.squareMeter} m2`}</p>
                  </div>
                </td>
              </tr>
              <tr className="flexRowTable">
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <img src={bedroomIcon} />
                    <p>{`${villa.bedrooms} bedrooms`}</p>
                  </div>
                </td>
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <img src={bathIcon} />
                    <p>{`${villa.bathrooms} bathrooms`}</p>
                  </div>
                </td>
              </tr>
              <tr className="flexRowTable">
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <img src={moutainviewIcon} />
                    <p>{`${villa.view} view`}</p>
                  </div>
                </td>
                <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                  <div className="iconeContainer">
                    <p>From</p>
                    <p>{`${villa.pricePerWeek}€/week`}</p>
                  </div>
                </td>
              </tr>
              <tr>
                <tr colSpan={2} className="flexVerticalCTA">
                  <DatePicker
                    key={"startDate"}
                    showIcon
                    selected={newStartDate}
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
                    selected={newEndDate}
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
                  <Button
                    cta={"Edit your dates"}
                    backgroundColor={"black"}
                    onClick={createDate}
                  ></Button>
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

            <OneInput
              label={"Any more information to share?"}
              key={"Message"}
              type={"textarea"}
              value={message}
              name={"message"}
              onChange={handleMessage}
            ></OneInput>
            <Button
              cta={"Edit booking"}
              backgroundColor="black"
              onClick={submitPatching}
            ></Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingPage;
