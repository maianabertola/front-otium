import React from "react";
import { useNavigate } from "react-router-dom";
import "./AccountCreatedPage.css"
import Navbar from "../components/Navbar"


function AccountCreatedPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/auth/login");
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="description2">
        <h1 className="successfully">Your account has been successfully created</h1>
        <p className="explication">
          We are delighted to have you as a member of our esteemed community.
          Let us curate unforgettable moments and tailor-made escapes that will
          surpass your expectations.
        </p>
        <button onClick={handleNavigate}>Continue to login Page</button>
      </div>
    </>
  );
}

export default AccountCreatedPage;
