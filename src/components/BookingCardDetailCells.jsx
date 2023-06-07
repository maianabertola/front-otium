import React from "react";
import "./BookingVillaCard.css";

function BookingCardDetailCells({ icone, info, text }) {
  let myStyle;
  if (!icone) {
    myStyle = { display: "none" };
  }

  if (icone) {
    myStyle = { objectFit: "fill" };
  }

  return (
    <>
      <td>
        {/* <td colSpan={2} style={{ width: "40%" }} className="flexCells"> */}
        <div className="iconeContainer">
          <img style={myStyle} src={icone} />
          <p>{text}</p>
        </div>

        <p>{info}</p>
      </td>
    </>
  );
}
export default BookingCardDetailCells;
