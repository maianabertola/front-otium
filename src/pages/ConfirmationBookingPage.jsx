import React from "react";
import { Link } from "react-router-dom";

function ConfirmationBookingPage() {
  return (
    <div>
      <h1>Your booking has been successfully created</h1>
      <p>
        Thank you for your trust. Your request has been successfully recorded.
        You can find <Link to="/"> all your reservations in your account.</Link>
      </p>
    </div>
  );
}

export default ConfirmationBookingPage;
