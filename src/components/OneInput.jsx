import React from "react";
import "../components/OneInput.css";

function OneInput({ label, type, htmlFor, value, name, onChange }) {
  return (
    <div className="divInput">
      <label htmlFor={htmlFor}>{label}</label>
      <input
        key={label}
        type={type}
        value={value}
        id={htmlFor}
        name={name}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default OneInput;
