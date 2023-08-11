import React, { useState } from "react";
import service from "../service/service";
import "../components/AuthForm.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import OneInput from "./Input/OneInput";
import Button from "./Button";
import { Link } from "react-router-dom";
import { QueryClient, useMutation } from "react-query";
import { SignUp, fetchUser } from "../api/user";

const AuthForm = ({ mode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();
  const { login, isLoginError } = useContext(AuthContext);

  //handling values from the sign up form
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

  // creating a new user
  const handleSignUp = async () => {
    mutateSignUp({
      email,
      password,
      name,
      surname,
      phoneNumber,
      birthDate,
      address,
      country,
    });
  };

  const {
    isLoading: isLoadingSignUp,
    isError: isErrorSignUp,
    error: errorSignup,
    mutate: mutateSignUp,
  } = useMutation({
    mutationFn: SignUp,
    onSucces: (newUser) => {
      QueryClient.setQueryData(["users", newUser]);
      console.log("yeah a new user has been created");
      navigate("/auth/accountcreated");
    },
  });

  //send en email to the team for log in support
  const mailTo = async (event) => {
    event.preventDefault();
    window.location.href =
      "mailto:bonjour@we-are-ensemble.com?subject=" +
      encodeURIComponent("Issue with my account") +
      "&body=" +
      encodeURIComponent(
        "Please send us your email, name and surname to help you. Do not share with us your password."
      );
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
                onClick={handleSignUp}
                backgroundColor={"black"}
                cta={"Connect with us"}
              ></Button>
            </div>
          </div>
        </>
      )}

      {mode === "login" && (
        <>
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
          </div>
          <Button
            cta={"Login"}
            backgroundColor={"black"}
            onClick={() => login(email, password)}
          ></Button>
          {isLoginError && (
            <>
              <div className="wrongLoginTextWrapper">
                <p>
                  The mail or the password you are trying to use are not valid.
                  <br></br>Please try again or contact{" "}
                  <Link onClick={mailTo}>the Otium team.</Link>
                </p>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AuthForm;
