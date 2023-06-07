import React, { useContext, useEffect, useMemo } from "react";
import "./VillaCardDetails.css";
// import VillaCardDetailsCells from "./VillaCardDetailsCells";
import peopleIcon from "../assets/peopleIcon.png";
import squareMeterIcon from "../assets/squaremeterIcon.png";
import bedroomIcon from "../assets/iconebed.png";
import bathIcon from "../assets/iconebathroom.png";
import moutainviewIcon from "../assets/iconeview.png";

import Button from "./Button";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Outlet, useParams } from "react-router-dom";

export default function VillaCardDetails({
  name,
  region,
  numberOfPeople,
  squareMeter,
  beds,
  bathrooms,
  view,
  pricePerWeek,
  villa,
}) {
  const { startDate, setStartDate, endDate, setEndDate, dates, setDates } =
    useContext(AuthContext);
  // const [dates, setDates] = useState([]);
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();

  // console.log("TEST CONTEXT", startDate, endDate, dates);

  // console.log("myvilla", villa);

  // const bookingVilla = "http://localhost:3000/booking/trip";
  // const [villa, setVilla] = useState(null);

  const { id } = useParams();

  //get the villa by ID and check the date available
  // const getOneVilla = async () => {
  //   try {
  //     const oneVilla = await axios.get(`${collectionVilla}/${id}`);
  //     console.log(oneVilla.data);
  //     setVilla(oneVilla.data);
  //   } catch (error) {
  //     console.log(
  //       error,
  //       "there is an error when fetching one villa by ID from db on the villaPage"
  //     );
  //   }
  // };

  // create a post when checking the dates
  // comparing the booked date and booking date
  function createDate(event) {
    const newStartDate = startDate.toISOString();
    const newEndDate = endDate.toISOString();
    event.preventDefault();
    const newDates = { newStartDate, newEndDate };
    setDates(newDates);
    // console.log(
    //   "here's the dates the user wants to book on VillaCardDetails",
    //   dates
    // );
  }

  useEffect(() => {
    villa;
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

  // console.log("the villa is booked at these dates", memoDates);

  function changePage(event) {
    event.preventDefault();
    navigate(`/villa/${id}/booking`);
  }

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
                cta={"Confirm your dates"}
                backgroundColor={"black"}
                onClick={createDate}
              ></Button>
              {/* <Button
                backgroundColor={"white"}
                cta={"Save it in your wishlist"}
              ></Button> */}
              <Button
                backgroundColor={"black"}
                cta={"Book your stay now"}
                onClick={changePage}
              ></Button>
              <Outlet />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
