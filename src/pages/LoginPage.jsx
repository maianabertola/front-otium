import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../pages/LoginPage.css";
import AuthForm from "../components/AuthForm";
import service from "../service/service";

// const collectionLogin = "http://localhost:3000/auth/login";

function LoginPage() {
  async function handleSubmitLogin(event) {
    event.preventDefault();
    try {
      const response = await service.post("/auth/login", {
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
      <div className="bodyLogin">
        <div className="text">
          <h1>First time here?</h1>
          <p className="paragraph">
            As an esteemed member of Otium, gain access to our exclusive
            collection of villas by submitting a membership application.
            Experience unrivaled luxury and reserve your dream accommodations.
            Unlock a world of opulence and tranquility. Join the privileged few
            at Otium. Apply now.
          </p>
        </div>
        <div className="connection">
          <p>Already a member?</p>
          <AuthForm mode={"login"} />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
