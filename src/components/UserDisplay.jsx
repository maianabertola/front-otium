import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./UserDisplay.css";

function UserDisplay() {
  const { user } = useContext(AuthContext);
  console.log(user, "coucoucoucou");

  if (!user) {
    return <div>wait</div>;
  }

  const date = user.birthDate;
  const birth = date.split("T");
  console.log(birth);

  return (
    <>
      <div className="user">
        <p className="element">{user.name}</p>
        <p className="element">{birth[0]}</p>
        <p className="element">{user.email}</p>
        <p className="element">{user.phoneNumber}</p>
      </div>
      <div className="user">
        <p className="element">{user.address}</p>
        <p className="element">{user.country}</p>
      </div>
    </>
  );
}

export default UserDisplay;
