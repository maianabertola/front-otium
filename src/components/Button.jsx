import React, { useState } from "react";
import "./Button.css";

function Button({ cta, backgroundColor, onClick }) {
  let myStyle;

  return (
    <div onClick={onClick} className={backgroundColor}>
      {cta}
    </div>
  );
}

export default Button;
