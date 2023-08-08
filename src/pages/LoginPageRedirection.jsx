import React, { useState } from "react";
import "../pages/LoginPage.css";
import AuthForm from "../components/AuthForm";
import service from "../service/service";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import BlackBar from "../components/BlackBar";
import TitlePage from "../components/TitlePage";

function LoginPage() {
  const navigate = useNavigate();
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

  function navToCreateAccount(event) {
    event.preventDefault();
    navigate("signup");
  }
  return (
    <>
      <div className="accountLogRedirectionContainer">
        <TitlePage
          h1={"This page is"}
          span={"reserved to our members"}
          center={"true"}
        ></TitlePage>
        <div className="logInWrapper">
          <div className="columnFlex">
            <h1 style={{ textAlign: "center", marginBottom: 5 + "vh" }}>
              First time here?
            </h1>
            <div className="textWrap">
              <p style={{ paddingBottom: 10.5 + "vh" }}>
                As an esteemed member of Otium, gain access to our exclusive
                collection of villas by submitting a membership application.
                Experience unrivaled luxury and reserve your dream
                accommodations. Unlock a world of opulence and tranquility. Join
                the privileged few at Otium. Apply now.
              </p>

              <Button
                cta={"Connect with us"}
                backgroundColor={"black"}
                onClick={navToCreateAccount}
              ></Button>
            </div>
          </div>

          <BlackBar position={"static"} height={72.8}></BlackBar>
          <div className="columnFlex">
            <h1 style={{ textAlign: "center", marginBottom: 5 + "vh" }}>
              Already a member?
            </h1>
            <AuthForm mode={"login"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
