import React from "react";
import "./Button.css";

function Button({ cta, backgroundColor, width, onClick }) {
  let myStyle;
  if (backgroundColor === "black") {
    myStyle = {
      backgroundColor: "hsl(0, 0%, 9%)",
      color: "hsl(0, 0%, 98%)",
    };
  }

  if (backgroundColor === "white") {
    myStyle = {
      backgroundColor: "transparent",
      color: "hsl(0, 0%, 9%)",
      border: "1px solid",
    };
  }

  if (backgroundColor === "grey") {
    myStyle = {
      backgroundColor: "hsl(0, 3%, 31%, 53%)",
      color: "hsl(0, 0%, 98%)",
      border: "1px solid hsl(0, 0%, 98%)",
      position: "absolute",
      top: "80%",
      left: "6%",
      margin: "3vh 0 1vh 0",
    };
  }

  if (backgroundColor === "transparent") {
    myStyle = {
      backgroundColor: "hsl(0, 3%, 31%, 53%)",
      color: "hsl(0, 0%, 98%)",
      border: "1px solid hsl(0, 0%, 98%)",
      margin: "3vh 0 1vh 0",
    };
  }

  if (backgroundColor === "blackEnd") {
    myStyle = {
      backgroundColor: "hsl(0, 0%, 9%)",
      color: "hsl(0, 0%, 98%)",
      border: "1px solid hsl(0, 0%, 98%)",
      margin: 0,
    };
  }

  let newWidth = `${width}vw`;

  const buttonStyle = { ...myStyle, newWidth };

  return (
    <div className="button" onClick={onClick} style={buttonStyle}>
      {cta}
    </div>
  );
}

export default Button;
