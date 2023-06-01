import React from "react";
import "../pages/Homepage.css";

function SmallItalicText({ title, paragraph }) {
  const marginBottom = "2rem";

  return (
    <>
      <div className="textContainer">
        <h3 style={{ textAlign: "left" }}>{title}</h3>
        <p style={{ textAlign: "left", marginBottom: marginBottom }}>
          {paragraph}
        </p>
      </div>
    </>
  );
}

export default SmallItalicText;
