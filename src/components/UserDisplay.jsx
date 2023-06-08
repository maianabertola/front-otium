import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./UserDisplay.css";

function UserDisplay() {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <div>wait</div>;
  }
  const date = user.birthDate;
  const birth = date.split("T");
  return (
    <>
      <div className="user">
        <p className="element titleDiv">Identity : </p>
        <p className="element">name : {user.name}</p>
        <p className="element">birthdate : {birth[0]}</p>
        <p className="element">email : {user.email}</p>
        <p className="element">phone number : {user.phoneNumber}</p>
      </div>
      <div className="user">
        <p className="element titleDiv">Contact Details : </p>
        <p className="element">address : {user.address}</p>
        <p className="element">country : {user.country}</p>
      </div>
    </>
  );
}

export default UserDisplay;
