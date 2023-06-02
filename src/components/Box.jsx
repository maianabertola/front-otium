import React from "react";
import "./Box.css";

function Box({ text }) {
  //if idillyc status includes Family moment then style in green
  //hsl 64,17%84%

  return (
    <>
      <div className="box">{text}</div>
    </>
  );
}

export default Box;
