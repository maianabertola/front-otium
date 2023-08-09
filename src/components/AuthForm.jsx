import React, { useState } from "react";
import service from "../service/service";
import "../components/AuthForm.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import OneInput from "./Input/OneInput";
import Button from "./Button";

const AuthForm = ({ mode }) => {
  const { authentificationUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSurnameChange = (event) => {
    setSurName(event.target.value);
  };
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userToSignup = {
        email,
        password,
        name,
        surname,
        phoneNumber,
        birthDate,
        address,
        country,
      };
      const userToLogin = { email, password };
      if (mode === "signup") {
        const response = await service.post("/auth/signup", userToSignup);
        navigate("/accountcreated");
      } else {
        const response = await service.post("/auth/login", userToLogin);
        localStorage.setItem("token", response.data.token);
        setError("");
        await authentificationUser();
        navigate("/account");
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };
  return (
    <>
      {mode === "signup" && (
        <>
          <div className="signUpWrapper">
            <h3>Login</h3>

            <hr className="hrSignUp"></hr>

            <div className="flexRowSignUp">
              <OneInput
                key={"email"}
                label={"Email"}
                type={"text"}
                value={email}
                name={"email"}
                onChange={handleEmailChange}
              />
              <OneInput
                key={"password"}
                label={"Password"}
                type={"password"}
                value={password}
                name={"password"}
                onChange={handlePasswordChange}
              />
            </div>
            <h3>Identity</h3>
            <hr className="hrSignUp"></hr>

            <div className="flexRowSignUp">
              <OneInput
                key={"Name"}
                label={"Name"}
                type={"text"}
                value={name}
                name={"name"}
                onChange={handleNameChange}
              />
              <OneInput
                key={"Surname"}
                label={"Surname"}
                type={"text"}
                value={surname}
                name={"surname"}
                onChange={handleSurnameChange}
              />
            </div>
            <OneInput
              key={"birthDate"}
              label={"BirthDate"}
              type={"Date"}
              value={birthDate}
              name={"birthDate"}
              onChange={handleBirthDateChange}
            />
            <h3>Contact details</h3>
            <hr className="hrSignUp"></hr>

            <div className="flexRowSignUp">
              <OneInput
                key={"phoneNumber"}
                label={"Phone number"}
                type={"text"}
                value={phoneNumber}
                name={"phoneNumber"}
                onChange={handlePhoneNumberChange}
              />

              <OneInput
                key={"address"}
                label={"Address"}
                type={"text"}
                value={address}
                name={"address"}
                onChange={handleAddressChange}
              />
            </div>
            <div className="flexRowSignUp">
              <OneInput
                key={"country"}
                label={"Country"}
                type={"text"}
                value={country}
                name={"country"}
                onChange={handleCountryChange}
              />
            </div>
            <div className="flexRow">
              <Button
                onClick={handleSubmit}
                backgroundColor={"black"}
                cta={"Connect with us"}
              ></Button>
            </div>
          </div>
        </>
      )}

      {mode === "login" && (
        <div className="inputLoginWrap">
          <OneInput
            label={"Email: "}
            type={"text"}
            value={email}
            name={"email"}
            onChange={handleEmailChange}
          />
          <OneInput
            label={"Password: "}
            type={"password"}
            value={password}
            name={"password"}
            onChange={handlePasswordChange}
          />

          <Button
            cta={"Login"}
            backgroundColor={"black"}
            onClick={handleSubmit}
          ></Button>
        </div>
      )}
    </>
  );
};

export default AuthForm;
