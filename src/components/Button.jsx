import React, { useState } from "react";
import "./Button.css";

function Button({ cta, backgroundColor, onClick }) {
  return (
    <div onClick={onClick} className={backgroundColor}>
      {cta}
    </div>
  );
}

export default Button;
