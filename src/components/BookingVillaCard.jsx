import React from "react";
import "../components/BookingVillaCard.css";
import peopleIcon from "../assets/peopleIcon.png";
import squareMeterIcon from "../assets/squaremeterIcon.png";
import bedroomIcon from "../assets/iconebed.png";
import bathIcon from "../assets/iconebathroom.png";
import moutainviewIcon from "../assets/iconeview.png";
import BookingCardDetailCells from "./BookingCardDetailCells";

function BookingVillaCard({
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
  return (
    <div className="bookingVillaCardDetails">
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
          <tr>
            <BookingCardDetailCells
              info={numberOfPeople}
              icone={peopleIcon}
            ></BookingCardDetailCells>

            <BookingCardDetailCells
              info={squareMeter}
              icone={squareMeterIcon}
            ></BookingCardDetailCells>
          </tr>
          <tr>
            <BookingCardDetailCells
              info={beds}
              icone={bedroomIcon}
            ></BookingCardDetailCells>
            <BookingCardDetailCells
              info={bathrooms}
              icone={bathIcon}
            ></BookingCardDetailCells>
          </tr>
          <tr className="flexRowTable">
            <BookingCardDetailCells
              info={view}
              icone={moutainviewIcon}
            ></BookingCardDetailCells>
            <BookingCardDetailCells
              info={pricePerWeek}
              text={"From"}
            ></BookingCardDetailCells>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BookingVillaCard;
