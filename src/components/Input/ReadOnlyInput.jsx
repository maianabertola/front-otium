import React from "react";
import "./ReadOnlyInput.css";

function ReadOnlyInput({ label, value, onChange }) {
  return (
    <div className="inputUserWrapper">
      <label className="userProperty">{label}: </label>
      <input
        className="userKey"
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default ReadOnlyInput;
