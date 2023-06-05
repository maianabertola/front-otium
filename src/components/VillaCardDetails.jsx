import React, { useEffect } from "react";
import "./VillaCardDetails.css";
import peopleIcon from "../assets/peopleIcon.png";
import squareMeterIcon from "../assets/squaremeterIcon.png";
import VillaCardDetailsCells from "./VillaCardDetailsCells";
import bedroomIcon from "../assets/iconebed.png";
import bathIcon from "../assets/iconebathroom.png";
import moutainviewIcon from "../assets/iconeview.png";
import Button from "./Button";
import "react-datepicker/dist/react-datepicker.css";
import subDays from "date-fns/subDays";
import DatePicker from "react-datepicker";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function VillaCardDetails({
  name,
  region,
  numberOfPeople,
  squareMeter,
  beds,
  bathrooms,
  view,
  pricePerWeek,
}) {
  const collectionVilla = "http://localhost:3000/villa";
  const bookingVilla = "http://localhost:3000/booking/trip";
  const [villa, setVilla] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dates, setDates] = useState([]);
  const { id } = useParams();

  //get the villa by ID and check the date available
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

  //create a post when checking the dates
  //comparing the booked date and booking date

  function createDate(event) {
    const newStartDate = startDate.toISOString();
    const newEndDate = endDate.toISOString();
    event.preventDefault();
    const newDates = { newStartDate, newEndDate };

    setDates(newDates);

    // try {
    //   console.log("==========", startDate, date);
    //   const newDates = await axios.post(bookingVilla, {
    //     startDate,
    //     endDate,
    //   });
    //   console.log("les news dates sont : ", newDates.data);
    //   setDates(newDates.data);
    //   // console.log("new dates created in the villaPage", newDates);
    //   //     console.log =   endDate:"2023-06-05T11:43:49.925Z" startDate:"2023-06-07T11:43:49.000Z"
    //   // console.log(dates.createTrip.endDate);
    //   console.log("tab de dates : ", dates);

    //   dates.map((date) => {
    //     if (dates.length === 0) {
    //       return <div>wait</div>;
    //     }
    //     console.log("yes its mapping the dates");
    //     if (date !== villa.Villa.startDate && date !== villa.Villa.endDate) {
    //       return <div>These dates are not available</div>;
    //     }
    //   });
    // } catch (error) {
    //   console.log(
    //     "there's an issue when creating dates in the villaPage",
    //     error
    //   );
    // }
    console.log("tessssttttttttt");
    console.log("voilà les dates", dates);
  }

  useEffect(() => {
    getOneVilla();
    // createDate();
  }, []);

  // console.log(villa.Villa.endDate);
  // console.log(villa.Villa.startDate);c
  console.log("my booking dates", dates);

  return (
    <>
      <div className="villaCardDetails">
        <table>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th colSpan={2}>
                <h1>{name}</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <h2 style={{ textAlign: "center" }}>{region}</h2>
              </td>
            </tr>
            <tr className="flexRowTable">
              <VillaCardDetailsCells
                info={numberOfPeople}
                icone={peopleIcon}
              ></VillaCardDetailsCells>

              <VillaCardDetailsCells
                info={squareMeter}
                icone={squareMeterIcon}
              ></VillaCardDetailsCells>
            </tr>
            <tr className="flexRowTable">
              <VillaCardDetailsCells
                info={beds}
                icone={bedroomIcon}
              ></VillaCardDetailsCells>
              <VillaCardDetailsCells
                info={bathrooms}
                icone={bathIcon}
              ></VillaCardDetailsCells>
            </tr>
            <tr className="flexRowTable">
              <VillaCardDetailsCells
                info={view}
                icone={moutainviewIcon}
              ></VillaCardDetailsCells>
              <VillaCardDetailsCells
                info={pricePerWeek}
                text={"From"}
              ></VillaCardDetailsCells>
            </tr>
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
                excludeDates={[new Date(), subDays(new Date(), 1)]}
                placeholderText="Select a date other than today or yesterday"
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
                excludeDates={[new Date(), subDays(new Date(), 0)]}
                placeholderText="Select a date other than today or yesterday"
              />
              <Button
                cta={"Check availability"}
                backgroundColor={"black"}
                onClick={createDate}
              ></Button>
              <Button
                backgroundColor={"white"}
                cta={"Save it in your wishlist"}
              ></Button>
              <Button
                backgroundColor={"black"}
                cta={"Book your stay now"}
              ></Button>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
