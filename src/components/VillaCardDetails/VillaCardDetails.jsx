import React, { useContext, useEffect, useMemo } from "react";
import peopleIcon from "../../assets/peopleIcon.png";
import squareMeterIcon from "../../assets/squaremeterIcon.png";
import bedroomIcon from "../../assets/iconebed.png";
import bathIcon from "../../assets/iconebathroom.png";
import moutainviewIcon from "../../assets/iconeview.png";
import seaviewIcon from "../../assets/seaview.png";
import Button from "../Button";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { BookingContext } from "../../context/BookingContext";
import "./VillaCardDetails.css";

export default function VillaCardDetails({ villa, booking }) {
  const { startDate, setStartDate, endDate, setEndDate, dates, setDates } =
    useContext(BookingContext);

  const navigate = useNavigate();
  const { id } = useParams();

  // when firing the button, the state is updated with a date object
  function createDate(event) {
    event.preventDefault();
    const newStartDate = startDate.toISOString();
    const newEndDate = endDate.toISOString();
    const newDates = { newStartDate, newEndDate };
    setDates(newDates);
  }

  useEffect(() => {
    villa;
  }, []);

  //memorize the results of the function. Will relaunch if villa changes
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

  //change icone if it's sea view or mountain view
  let icone;
  if (villa.Villa.view === "Sea") {
    icone = seaviewIcon;
  } else {
    icone = moutainviewIcon;
  }

  //change the position if this card appears in the booking page
  let myStyle;
  if (booking === "true") {
    myStyle = {
      position: "static",
    };
  } else {
    myStyle = {
      position: "absolute",
    };
  }

  function changePage(event) {
    event.preventDefault();
    navigate(`/villa/${id}/booking`);
  }

  return (
    <>
      <div className="villaCardDetails" style={myStyle}>
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
                </div>
                <div className="flexTextDetails">
                  <p
                    style={{ margin: 0 }}
                  >{`${villa.Villa.numberOfPeople} people`}</p>
                </div>
              </td>
              <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                <div className="iconeContainer">
                  <img src={squareMeterIcon} />
                </div>
                <div className="flexTextDetails">
                  <p style={{ margin: 0 }}>{`${villa.Villa.squareMeter} m2`}</p>
                </div>
              </td>
            </tr>
            <tr className="flexRowTable">
              <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                <div className="iconeContainer">
                  <img src={bedroomIcon} />
                </div>
                <div className="flexTextDetails">
                  <p
                    style={{ margin: 0 }}
                  >{`${villa.Villa.bedrooms} bedrooms`}</p>
                </div>
              </td>
              <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                <div className="iconeContainer">
                  <img src={bathIcon} />
                </div>
                <div className="flexTextDetails">
                  <p
                    style={{ margin: 0 }}
                  >{`${villa.Villa.bathrooms} bathrooms`}</p>
                </div>
              </td>
            </tr>
            <tr className="flexRowTable">
              <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                <div className="iconeContainer">
                  <img src={icone} />
                </div>
                <div className="flexTextDetails">
                  <p style={{ margin: 0 }}>{`${villa.Villa.view} view`}</p>
                </div>
              </td>
              <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                <div className="iconeContainer">
                  <p style={{ margin: 0 }}>From</p>
                </div>
                <div className="flexTextDetails">
                  <p
                    style={{ margin: 0 }}
                  >{`${villa.Villa.pricePerWeek}€/week`}</p>
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
              {!booking && (
                <>
                  <Button
                    cta={"Confirm your dates"}
                    backgroundColor={"black"}
                    onClick={createDate}
                  ></Button>
                  <Button
                    backgroundColor={"black"}
                    cta={"Book your stay now"}
                    onClick={changePage}
                  ></Button>
                </>
              )}
              {booking && (
                <Button
                  cta={"Confirm new dates"}
                  backgroundColor={"black"}
                  onClick={createDate}
                ></Button>
              )}
              <Outlet />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
