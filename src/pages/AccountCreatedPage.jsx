import React from "react";
import { useNavigate } from "react-router-dom";

function AccountCreatedPage() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/auth/login");
  };
  return (
    <>
      <h1>Your account has been successfully created</h1>
      <p>
        We are delighted to have you as a member of our esteemed community. Let
        us curate unforgettable moments and tailor-made escapes that will
        surpass your expectations.
      </p>
      <button onClick={handleNavigate}>Continue to login Page</button>
    </>
  );
}

export default AccountCreatedPage;
