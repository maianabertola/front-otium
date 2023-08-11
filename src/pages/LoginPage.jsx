import React, { useState } from "react";
import "../pages/LoginPage.css";
import AuthForm from "../components/AuthForm";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import BlackBar from "../components/BlackBar";

function LoginPage() {
  const navigate = useNavigate();
  function navToCreateAccount(event) {
    event.preventDefault();
    navigate("/auth/signup");
  }
  return (
    <>
      <div className="accountLogContainer">
        <div className="columnFlex">
          <h1 style={{ textAlign: "center", marginBottom: 5 + "vh" }}>
            First time here?
          </h1>
          <div className="textWrap">
            <p style={{ paddingBottom: 10.5 + "vh" }}>
              As an esteemed member of Otium, gain access to our exclusive
              collection of villas by submitting a membership application.
              Experience unrivaled luxury and reserve your dream accommodations.
              Unlock a world of opulence and tranquility. Join the privileged
              few at Otium. Apply now.
            </p>
          </div>
          <Button
            cta={"Connect with us"}
            backgroundColor={"black"}
            onClick={navToCreateAccount}
          ></Button>
        </div>

        <BlackBar position={"static"} height={85}></BlackBar>
        <div className="columnFlex">
          <h1 style={{ textAlign: "center", marginBottom: 1 + "vh" }}>
            Already a member?
          </h1>
          <AuthForm mode={"login"} />
        </div>
      </div>
    </>
  );
}

export default LoginPage;
