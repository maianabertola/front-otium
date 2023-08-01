import React from "react";
import "./Grid.css";

function Grid({ cellContent }) {
  return (
    <div className="gridItem" key={cellContent}>
      {cellContent}
    </div>
  );
}

export default Grid;
