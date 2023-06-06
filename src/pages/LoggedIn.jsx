import React from "react";
import Navbar from "../components/Navbar";
import "./LoggedIn.css";
import { Link } from "react-router-dom";

function LoggedIn() {
  return (
    <>
      <Navbar></Navbar>
      <div className="menu">
        <h1 className="welcome">Welcome back</h1>
        <Link>
          <h2 className="menuAccount">Favorite Villas</h2>
        </Link>
        <Link>
          <h2 className="menuAccount">Your retreat</h2>
        </Link>
        <Link to={"/questionnaire"}>
          <h2 className="menuAccount">Questionnaire</h2>
        </Link>
        <Link>
          <h2 className="menuAccount">Profile</h2>
        </Link>
        <Link>
          <h2 className="menuAccount">Email us</h2>
        </Link>
      </div>
    </>
  );
}

export default LoggedIn;
