import React, { useContext, useEffect, useMemo, useState } from "react";
import Button from "../Button";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { useNavigate, Outlet, useParams } from "react-router-dom";
import { BookingContext } from "../../context/BookingContext";
import "./VillaCardDetails.css";
import addDays from "date-fns/addDays";

export default function VillaCardDetails({ villa, booking }) {
  const {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    setDates,
    minEndDate,
    setMinEndDate,
  } = useContext(BookingContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [showButton, setShowButton] = useState(false);

  // when firing the button, the state is updated with a date object
  function createDate(event) {
    event.preventDefault();
    const newStartDate = startDate.toISOString();
    const newEndDate = endDate.toISOString();
    const newDates = { newStartDate, newEndDate };
    setDates(newDates);
    navToBooking(event);
  }

  useEffect(() => {
    villa, setShowButton;
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
  // let icone;
  // if (villa.Villa.view === "Sea") {
  //   icone = seaviewIcon;
  // } else {
  //   icone = moutainviewIcon;
  // }

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

  function navToBooking(event) {
    event.preventDefault();
    navigate(`/villa/${id}/booking`);
  }

  //calculate minimum endDate
  const handleStartDate = (date) => {
    setStartDate(date);
    const newEndDate = addDays(date, 6);
    setMinEndDate(newEndDate);
  };

  // compare the value of the date to show or no the booking button
  useEffect(() => {
    if (
      startDate.getTime() !== endDate.getTime() &&
      endDate.getTime() >= addDays(startDate, 6).getTime()
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [startDate, endDate]);

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
                  <img src="https://res.cloudinary.com/dspbzkolr/image/upload/v1692950397/OTIUM/Icones/peopleicone_og62ry.png" />
                </div>
                <div className="flexTextDetails">
                  <p
                    style={{ margin: 0 }}
                  >{`${villa.Villa.numberOfPeople} people`}</p>
                </div>
              </td>
              <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                <div className="iconeContainer">
                  <img src="https://res.cloudinary.com/dspbzkolr/image/upload/v1692950427/OTIUM/Icones/squareicone_vvraqn.png" />
                </div>
                <div className="flexTextDetails">
                  <p style={{ margin: 0 }}>{`${villa.Villa.squareMeter} m2`}</p>
                </div>
              </td>
            </tr>
            <tr className="flexRowTable">
              <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                <div className="iconeContainer">
                  <img src="https://res.cloudinary.com/dspbzkolr/image/upload/v1692950397/OTIUM/Icones/bedicone_q0pkkf.png" />
                </div>
                <div className="flexTextDetails">
                  <p
                    style={{ margin: 0 }}
                  >{`${villa.Villa.bedrooms} bedrooms`}</p>
                </div>
              </td>
              <td colSpan={2} style={{ width: "40%" }} className="flexCells">
                <div className="iconeContainer">
                  <img src="https://res.cloudinary.com/dspbzkolr/image/upload/v1692950105/OTIUM/Icones/Bathroom%20icone.png" />
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
                {villa.Villa.view === "Sea" ? (
                  <div className="iconeContainer">
                    <img src="https://res.cloudinary.com/dspbzkolr/image/upload/v1692950397/OTIUM/Icones/seaIcone_klmrms.png" />
                  </div>
                ) : (
                  <div className="iconeContainer">
                    <img src="https://res.cloudinary.com/dspbzkolr/image/upload/v1692950397/OTIUM/Icones/mountainicone_l13jwu.png" />
                  </div>
                )}
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
              <div className="flexRow">
                <div className="flexVerticalDates">
                  <label className="labelDates">Arrival</label>
                  <DatePicker
                    placeholderText="Select a start date"
                    wrapperClassName="datePicker"
                    key={"startDate"}
                    showIcon
                    selected={startDate}
                    onChange={(date) => {
                      handleStartDate(date);
                    }}
                    closeOnScroll={true}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                    excludeDateIntervals={memoDates}
                    required={true}
                  />
                </div>
                <div className="flexVerticalDates">
                  <label className="labelDates">Departure</label>
                  <DatePicker
                    placeholderText="Select an end date"
                    wrapperClassName="datePicker"
                    key={endDate}
                    showIcon
                    selected={endDate}
                    onChange={(date) => {
                      setEndDate(date);
                    }}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={minEndDate}
                    closeOnScroll={true}
                    dateFormat="yyyy/MM/dd"
                    excludeDateIntervals={memoDates}
                    required={true}
                  />
                </div>
              </div>
              <div className="datesTextWrapper">
                <p>To enhance your stay, a minimum of 6 nights is requested.</p>
              </div>
              {!booking && showButton && (
                <>
                  <Button
                    backgroundColor={"black"}
                    cta={"Book your stay now"}
                    onClick={createDate}
                  ></Button>
                </>
              )}
              {booking && showButton && (
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
