import React from "react";
import "./BlackBar.css";

function BlackBar({ height, position }) {
  const barHeight = `${height}vh`;
  let blackBarStyle;
  if (position === "top") {
    blackBarStyle = {
      height: barHeight,
      position: "relative",
      top: 0,
    };
  }

  if (position === "bottom") {
    blackBarStyle = {
      height: barHeight,
      position: "relative",
      bottom: 0 + "%",
    };
  }

  if (position === "static") {
    blackBarStyle = {
      height: barHeight,
      position: "static",
      left: 50 + "%",
      marginTop: 5 + "vh",
    };
  }

  return (
    <>
      <div className="blackBar" style={blackBarStyle}></div>
    </>
  );
}

export default BlackBar;
