import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/OtiumLogo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    //ternary condition to know if navbar must be active or not
    <nav className="navbar">
      <div className="logoContainer">
        <Link to="/" className="linkNavbar">
          <img src={logo} alt="Otium logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/villas-collection" className="linkNavbar">
            Destinations
          </Link>
        </li>
        <li>
          <Link to="/services-collection" className="linkNavbar">
            Services
          </Link>
        </li>
        <li>
          <Link to="/questionnaire" className="linkNavbar">
            Find yours
          </Link>
        </li>
        <li>
          <Link to="/about" className="linkNavbar">
            About
          </Link>
        </li>
        {!isLoggedIn && (
          <li>
            <Link to="/auth/login" className="linkNavbar">
              Account
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Link to="/auth/account" className="linkNavbar">
              Account
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
