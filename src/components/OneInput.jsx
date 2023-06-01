import React from "react";
import "../components/OneInput.css";

function OneInput({ label, type, htmlFor, value, name, onChange }) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} value={value} name={name} onChange={onChange}></input>
    </div>
  );
}

export default OneInput;
