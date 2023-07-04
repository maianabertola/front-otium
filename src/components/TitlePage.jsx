import React from "react";
import "./TitlePage.css";

function TitlePage({ h1, span }) {
  return (
    <div className="titlePageContainer">
      <h1>
        {h1} <span> {span}</span>
      </h1>
    </div>
  );
}

export default TitlePage;
