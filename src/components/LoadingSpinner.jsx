import React from "react";
import { PropagateLoader } from "react-spinners";

function LoadingSpinner() {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={style}>
      <PropagateLoader color="black"></PropagateLoader>
    </div>
  );
}

export default LoadingSpinner;
