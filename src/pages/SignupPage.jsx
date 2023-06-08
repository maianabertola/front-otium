import React from "react";
import service from "../service/service";
import Navbar from "../components/Navbar";
import AuthForm from "../components/AuthForm";
import "../pages/SignupPage.css";

// const collectionUser = "http://localhost:3000/auth/signup";
function SignupPage() {
  async function handleSubmitUser(event) {
    event.preventDefault();
    try {
      const response = await service.post("/auth/signup", {
        email,
        password,
        name,
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
      <Navbar></Navbar>
      <div className="body">
        <h1 className="h1Signup">
          You are one click away to become an Otium member
        </h1>
        <AuthForm mode={"signup"} />
      </div>
    </>
  );
}

export default SignupPage;
