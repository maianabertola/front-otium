import React from "react";
import { Link } from "react-router-dom";
import TitlePage from "../components/TitlePage";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function ConfirmationBookingPage() {
  const navigate = useNavigate();

  function navtoAccount(event) {
    console.log("toto");
    event.preventDefault();
    navigate("account");
  }
  return (
    <div className="pageContainer">
      <TitlePage
        h1={"Your booking has been"}
        span={"successfully created"}
        center={"true"}
      ></TitlePage>
      <p style={{ textAlign: "center" }}>
        Thank you for your trust. Your request has been successfully recorded.
        <br />
        You can find{" "}
        <Link to="/account-trips"> all your reservations in your account.</Link>
      </p>
      <div className="flexCenter">
        <Button
          cta={"Find all my reservations"}
          backgroundColor={"black"}
          url={navtoAccount}
        ></Button>
      </div>
    </div>
  );
}

export default ConfirmationBookingPage;
