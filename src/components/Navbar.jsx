import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/OtiumLogo.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { setUser } = useContext(AuthContext);

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }
  return (
    <nav>
      <div className="logoContainer">
        <img src={logo} alt="Otium logo" />
      </div>
      <ul>
        <li>
          <Link to="/" className="linkNavbar">
            Destinations
          </Link>
        </li>
        <li>
          <Link to="/account" className="linkNavbar">
            Account
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
        <li>
          <Link to="/auth/login" className="linkNavbar">
            Log In
          </Link>
        </li>
        <li>
          <Link to="/auth/signup" className="linkNavbar">
            Sign Up
          </Link>
        </li>
        <li>
          <button
            onClick={
              logout
            }
          >
            Log Out
          </button>
        </li>
        {/* <Button cta={"Book now"} backgroundColor={"black"}></Button> */}
      </ul>
    </nav>
  );
}

export default Navbar;
