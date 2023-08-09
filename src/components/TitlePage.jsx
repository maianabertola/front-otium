import React from "react";
import "./TitlePage.css";

function TitlePage({ h1, span, center }) {
  let myStyle;
  if (center === "true") {
    myStyle = {
      textAlign: "center",
      margin: 0,
    };
  } else {
    myStyle = {
      marginLeft: 4.5 + "vw",
    };
  }
  return (
    <div className="titlePageContainer">
      {!center && (
        <h1 style={myStyle}>
          {h1} <span className="spanTitlePage"> {span}</span>
        </h1>
      )}
      {center && (
        <h1 style={myStyle}>
          {h1} <br></br>
          <span className="spanTitlePage"> {span}</span>
        </h1>
      )}
    </div>
  );
}

export default TitlePage;
