import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import OneInput from "../components/OneInput";
import axios from "axios";
const collectionLogin = "http://localhost:3000/login"

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }

    async function handleSubmitLogin(event) {
        event.preventDefault()

        try {
            const response = await axios.post(collectionLogin, {
              name,
              birthDate,
              email,
              phoneNumber,
              address,
              country,
              password,
              postalCode,
            })
        } catch(e) {
            console.log(e)
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
        <form>
        <OneInput
          label={"email"}
          type={"text"}
          htmlFor={"email"}
          value={email}
          name={"email"}
          onChange={handleNameChange}
        />
        <OneInput
          label={"password"}
          type={"text"}
          htmlFor={"password"}
          value={password}
          name={"password"}
          onChange={handleNameChange}
        />
        <Button>Connect with us</Button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
