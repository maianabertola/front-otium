import React, { useEffect, useMemo } from "react";
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
      console.log(oneVilla.data);
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
    console.log("here's the dates the user wants to book", dates);
  }

  useEffect(() => {
    getOneVilla();
  }, []);

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

  // let test = {}
  //   function isTest(){
  //      test = villa.Villa.bookedDates.map((element) => {
  //             return {
  //               start: new Date(element.Start),
  //               end: new Date(element.End),
  //             };
  //           });
  //         }
  //   }

  //   useEffect(() => {
  //     isTest()

  //   }, [villa])

  console.log("my booking dates", memoDates);

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
