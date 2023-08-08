import React, { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "./UserDisplay.css";
import { useMemo } from "react";
import { useQueryClient, useMutation } from "react-query";
import { patchUser } from "../api/user";
import { useState } from "react";
import ReadOnlyInput from "./Input/ReadOnlyInput";

function UserDisplay() {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setEditName] = useState(user.name);
  const [surname, setEditSurname] = useState(user.name);
  const [birthDate, setEditBirthdate] = useState(user.birthDate);
  const [email, setEditMail] = useState(user.email);
  const [phoneNumber, setEditPhoneNumber] = useState(user.phoneNumber);
  const [address, setEditAddress] = useState(user.address);
  const [country, setEditCountry] = useState(user.country);

  const queryClient = useQueryClient();

  //formatting the birthdate
  // let birth;
  // function formattingBirthDate() {
  //   useMemo(() => {
  //     let dateParts = user.birthDate.split("T");
  //     return (birth = dateParts[0]);
  //   }, [user.birthDate]);
  // }

  //patch the user info
  const switchEditing = () => {
    setIsEditing(true);
  };
  const handleNameChange = (event) => {
    setEditName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setEditSurname(event.target.value);
  };

  const handleBirthdateChange = (event) => {
    setEditBirthdate(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEditMail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setEditPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setEditAddress(event.target.value);
  };

  const handleCountryChange = (event) => {
    setEditCountry(event.target.value);
  };

  const { isLoading, isError, error, data, mutate } = useMutation({
    mutationFn: patchUser,
    onSuccess: (newPatchUser) => {
      queryClient.setQueryData(["users", newPatchUser]);
    },
  });

  const handleEditUser = async () => {
    mutate({
      name,
      surname,
      birthDate,
      email,
      phoneNumber,
      address,
      country,

      userId: user._id,
    });
  };

  if (!user || isLoading) {
    return <div>Please wait a moment</div>;
  }

  if (isError) {
    return <div>There's an error {error}</div>;
  }

  console.log("isEditable?", isEditing);
  console.log("newname", name);

  // useEffect(() => {
  //   formattingBirthDate();
  // }, []);

  return (
    <>
      <div className="flexRowUser">
        <div className="userCard">
          <div className="flexRowTitleUser">
            <p className="userTitleCard">Identity: </p>
            {!isEditing && <Link onClick={switchEditing}>Edit</Link>}
            {isEditing && <Link onClick={handleEditUser}>Save</Link>}
          </div>
          <div className="userWrapper">
            <ReadOnlyInput
              label={"Name"}
              readOnly={!isEditing}
              onChange={handleNameChange}
              value={name}
            ></ReadOnlyInput>
            <ReadOnlyInput
              label={"Surname"}
              value={surname}
              readOnly={!isEditing}
              onChange={handleSurnameChange}
            ></ReadOnlyInput>
            <ReadOnlyInput
              label={"Birthdate"}
              value={birthDate}
              readOnly={!isEditing}
              onChange={handleBirthdateChange}
            ></ReadOnlyInput>
          </div>
        </div>
        <div className="userCard">
          <div className="flexRowTitleUser">
            <p className="userTitleCard">Contact details: </p>
            {!isEditing && <Link onClick={switchEditing}>Edit</Link>}
            {isEditing && <Link onClick={handleEditUser}>Save</Link>}
          </div>
          <div className="userWrapper">
            <ReadOnlyInput
              label={"Email"}
              value={email}
              readOnly={!isEditing}
              onChange={handleEmailChange}
            ></ReadOnlyInput>
            <ReadOnlyInput
              label={"Phone"}
              value={phoneNumber}
              readOnly={!isEditing}
              onChange={handlePhoneNumberChange}
            ></ReadOnlyInput>
            <ReadOnlyInput
              label={"Address"}
              value={address}
              readOnly={!isEditing}
              onChange={handleAddressChange}
            ></ReadOnlyInput>
            <ReadOnlyInput
              label={"Country"}
              value={country}
              readOnly={!isEditing}
              onChange={handleCountryChange}
            ></ReadOnlyInput>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDisplay;
