import React from "react";
import "./Box.css";

function Box({ text, status, petFriendly, isClickable }) {
  let myStyle = {};
  let boxClasses = "box";

  // console.log(petFriendly);

  if (petFriendly === true && text === "YES") {
    myStyle.backgroundColor = "hsl(64, 17%, 84%)";
  }

  if (petFriendly === false && text === "NO") {
    myStyle.backgroundColor = "hsl(64, 17%, 84%)";
  }

  // if (status.includes("Family Moment") && text === "FAMILY MOMENT") {
  //   console.log("yes family");
  //   myStyle = {
  //     backgroundColor: "hsl: (64,17%,84%)",
  //   };
  // } else {
  //   myStyle = {
  //     backgroundColor: "hsl : (50, 90%,94%)",
  //   };
  // }

  if (isClickable === "yes") {
    boxClasses += " clickable";
  }

  // console.log(myStyle);
  return (
    <>
      <div className={boxClasses} style={myStyle}>
        {text}
      </div>
    </>
  );
}

export default Box;
