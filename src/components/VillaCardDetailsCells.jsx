import React from "react";
import "./VillaCardDetails.css";

function VillaCardDetailsCells({ icone, info, text }) {
  let myStyle;
  if (!icone) {
    myStyle = { display: "none" };
  }

  if (icone) {
    myStyle = { objectFit: "fill" };
  }

  return (
    <>
      {/* <div style={{ width: "40%" }}> */}
      <td colSpan={2} style={{ width: "40%" }} className="flexCells">
        <div className="iconeContainer">
          <img style={myStyle} src={icone} />
          <p>{text}</p>
        </div>
        {/* </td>
        <td> */}
        <p>{info}</p>
      </td>
      {/* </div> */}
    </>
  );
}

export default VillaCardDetailsCells;
