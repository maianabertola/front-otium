import React from "react";
import "./Button.css";

function Button({ cta, onClick }) {
  return (
    <div className="ul button" onClick={onClick}>
      {cta}
    </div>
  );
}

export default Button;
