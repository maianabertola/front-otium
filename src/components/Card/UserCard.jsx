import React from "react";
import "../UserDisplay.css";
import ReadOnlyInput from "../Input/ReadOnlyInput";

function UserCard({ title, onClick }) {
  return (
    <div className="userCard">
      <div className="flexRowTitleUser">
        <p className="userTitleCard">{title}: </p>
        {!isEditing && <Link onClick={switchEditing}>Edit</Link>}
        {isEditing && <Link onClick={onClick}>Save</Link>}
      </div>
      <ReadOnlyInput></ReadOnlyInput>
    </div>
  );
}

export default UserCard;
