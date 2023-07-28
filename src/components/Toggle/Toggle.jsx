import React from "react";
import "./Toggle.css";

function Toggle({ label, value, onChange, defaultChecked, question }) {
  return (
    <>
      <p style={{ marginBottom: 1 + "vh" }}>{question}</p>
      <div className="toggleWrap">
        <input
          key={label}
          type="radio"
          value={value}
          name="toggle"
          onChange={onChange}
          defaultChecked={defaultChecked}
          id={label} // id must be unique
        ></input>
        <label htmlFor={label} className="btnLabel">
          {label}
        </label>
      </div>
    </>
  );
}

export default Toggle;
