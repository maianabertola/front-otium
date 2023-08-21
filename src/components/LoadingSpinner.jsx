import React from "react";
import { Ellipsis } from "react-awesome-spinners";

function LoadingSpinner() {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={style}>
      <Ellipsis color={"black"} size={33}></Ellipsis>
    </div>
  );
}

export default LoadingSpinner;
