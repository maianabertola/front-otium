import React from "react";
import "./TitlePage.css";

function TitlePage({ h1, span, center }) {
  let myStyle;
  if (center === "true") {
    myStyle = {
      textAlign: "center",
    };
  }
  return (
    <div className="titlePageContainer">
      <h1 style={myStyle}>
        {h1} <span className="spanTitlePage"> {span}</span>
      </h1>
    </div>
  );
}

export default TitlePage;
