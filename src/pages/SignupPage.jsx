import React from "react";
import service from "../service/service";
import AuthForm from "../components/AuthForm";
import "../pages/SignupPage.css";
import TitlePage from "../components/TitlePage";

function SignupPage() {
  async function handleSubmitUser(event) {
    event.preventDefault();
    try {
      const response = await service.post("/auth/signup", {
        email,
        password,
        name,
        surname,
        birthDate,
        phoneNumber,
        country,
        address,
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <div className="pageContainer">
        <div className="signupContainer">
          <TitlePage
            h1={"You are one click away to"}
            span={"become an Otium member"}
            center={"true"}
          ></TitlePage>
          <AuthForm mode={"signup"} />
        </div>
      </div>
    </>
  );
}

export default SignupPage;
