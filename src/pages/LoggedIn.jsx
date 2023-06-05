import React from "react";
import Navbar from "../components/Navbar";
import "./LoggedIn.css";
import { Link } from "react-router-dom";


function LoggedIn() {
  return (
    <>
      <Navbar></Navbar>
      <div className="menu">
        <h1>Welcome back</h1>
        <Link>
          <h2>Your retreat</h2>
        </Link>
        {/* <button className='buttonAccount'>Favorite Villas</button>
            <button className='buttonAccount' navigate("/questionnaire")>Questionnaire</button>
            <button className='buttonAccount'>Profile</button>
            <button className='buttonAccount'>EMail us</button> */}
      </div>
    </>
  );
}

export default LoggedIn;
