import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });
  return (
    <>
      {isLoading && (
        <div style={style}>
          <PropagateLoader color="black"></PropagateLoader>
        </div>
      )}
    </>
  );
}

export default LoadingSpinner;
