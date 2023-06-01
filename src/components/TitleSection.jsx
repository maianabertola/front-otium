import React from "react";
import "./TitleSection.css";

function TitleSection({ title, paragraph }) {
  return (
    <div className="titleContainer">
      <h2>{title}</h2>
      <p>{paragraph}</p>
    </div>
  );
}

export default TitleSection;
