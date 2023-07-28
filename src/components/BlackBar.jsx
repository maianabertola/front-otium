import React from "react";
import "./BlackBar.css";

function BlackBar({ height, position }) {
  const barHeight = `${height}vh`;
  let blackBarStyle;
  if (position === "absolute") {
    blackBarStyle = {
      height: barHeight,
      position: "absolute",
      top: 0,
      left: 50 + "%",
    };
  }

  if (position === "relative") {
    blackBarStyle = {
      height: barHeight,
      position: "relative",
      left: 50 + "%",
      marginTop: 5 + "vh",
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
