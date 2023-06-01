import React from "react";
import "./Button.css";

function Button({ cta, url, backgroundColor }) {
  let myStyle;
  if (backgroundColor === "black") {
    myStyle = {
      backgroundColor: "hsl(0, 0%, 9%)",
      color: "hsl(0, 0%, 98%)",
    };
    // console.log(myStyle);
  }

  if (backgroundColor === "white") {
    myStyle = {
      backgroundColor: "transparent",
      color: "hsl(0, 0%, 9%)",
      border: "1px solid",
    };
  }

  return (
    <div className="button" onClick={url} style={myStyle}>
      {cta}
    </div>
  );
}

export default Button;
