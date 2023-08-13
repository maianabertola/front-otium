import React from "react";
import "./OneInput.css";

function OneInput({
  label,
  type,
  htmlFor,
  value,
  name,
  onChange,
  defaultChecked,
  placeholder,
}) {
  return (
    <div className="inputWrapper">
      <label className="labelOneInput" htmlFor={htmlFor}>
        {label}
      </label>
      <input
        className="inputLarge"
        key={label}
        type={type}
        value={value}
        id={htmlFor}
        name={name}
        onChange={onChange}
        defaultChecked={defaultChecked}
        placeholder={placeholder}
      ></input>
    </div>
  );
}

export default OneInput;
