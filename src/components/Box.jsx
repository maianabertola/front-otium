import React from "react";
import "./Box.css";

function Box({ text, status, petFriendly, isClickable }) {
  let myStyle = {};
  let boxClasses = "box";

  if (status) {
    if (status.includes(text)) {
      myStyle.backgroundColor = "hsl(64,17%,84%)";
    }
  } else {
    myStyle.backgroundColor = "hsl(50, 90%,94%)";
  }

  if (petFriendly === true && text === "Yes") {
    myStyle.backgroundColor = "hsl(64, 17%, 84%)";
  }
  if (petFriendly === false && text === "No") {
    myStyle.backgroundColor = "hsl(64, 17%, 84%)";
  }

  if (isClickable === "yes") {
    boxClasses += " clickable";
  }

  return (
    <>
      <div className={boxClasses} style={myStyle}>
        {text}
      </div>
    </>
  );
}

export default Box;
