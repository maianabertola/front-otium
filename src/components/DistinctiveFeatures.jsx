import React from "react";
import "../pages/VillaPage.css";

function DistinctiveFeatures({ feature, index }) {
  let myStyle = {};
  if (index === 0) {
    myStyle = { width: 100 };
  }
  if (index === 1) {
    myStyle = { width: 150 };
  }
  if (index === 2) {
    myStyle = { width: 200 };
  }
  if (index === 3) {
    myStyle = { width: 250 };
  }
  if (index === 4) {
    myStyle = { width: 300 };
  }
  return (
    <div className="flexFeatures">
      <div className="line" style={myStyle}></div>
      <p className="features">{feature}</p>
    </div>
  );
}

export default DistinctiveFeatures;
