import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/OtiumLogo.png";
import Button from "./Button";

function Navbar() {
  return (
    <nav>
      <div className="logoContainer">
        <img src={logo} alt="Otium logo" />
      </div>
      <ul>
        <Link>
          <li className="linkNavbar">Destinations</li>
        </Link>
        <Link>
          <li className="linkNavbar">Services</li>
        </Link>
        <Link>
          <li className="linkNavbar">Find yours</li>
        </Link>
        <Link>
          <li className="linkNavbar">About</li>
        </Link>
        <Link>
          <li className="linkNavbar">Log In</li>
        </Link>
        <Button cta={"Book now"}></Button>
      </ul>
    </nav>
  );
}

export default Navbar;
