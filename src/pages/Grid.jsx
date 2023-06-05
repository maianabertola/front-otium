import React from "react";
import "./Grid.css";

function Grid({ cellContent }) {
  //   console.log(cellContent);

  return (
    <div className="gridContainer">
      <div className="gridItem" key={cellContent}>
        {cellContent}
      </div>
    </div>
  );
}

export default Grid;
