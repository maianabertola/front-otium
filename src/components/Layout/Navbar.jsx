import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/OtiumLogo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { setUser, isLoggedIn } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false);

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  // console.log(window.scrollY);
  //this function check if the setNavbar must change
  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  //event when scrolling call the function changeNavbar
  window.addEventListener("scroll", changeNavbar);
  // useEffect(() => {
  // }, []);

  return (
    //ternary condition to know if navbar must be active or not
    <nav className={navbar ? "navbar:active" : "navbar"}>
      <div className="logoContainer">
        <img src={logo} alt="Otium logo" />
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
            <button onClick={logout}>Log Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
