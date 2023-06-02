import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import OneInput from "../components/OneInput";
import axios from "axios";
import AuthForm from "../components/AuthForm";
import { AuthContextWrapper } from "../context/AuthContext";
const collectionLogin = "http://localhost:3000/login";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleSubmitLogin(event) {
    event.preventDefault();

    try {
      const response = await axios.post(collectionLogin, {
        email,
        password,
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1>First time here?</h1>
        <p>
          As an esteemed member of Otium, gain access to our exclusive
          collection of villas by submitting a membership application.
          Experience unrivaled luxury and reserve your dream accommodations.
          Unlock a world of opulence and tranquility. Join the privileged few at
          Otium. Apply now.
        </p>
        <Button>Connect with us</Button>
      </div>
      <div>
        <p>a</p>
      </div>
      <div>
        <p>Already a member?</p>
       <AuthForm mode={"login"}/>
      </div>
    </>
  );
}

export default LoginPage;
