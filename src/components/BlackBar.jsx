import React from "react";
import "./BlackBar.css";

function BlackBar({ height }) {
  const barHeight = `${height}vh`;

  return <div className="blackBar" style={{ height: barHeight }}></div>;
}

export default BlackBar;
