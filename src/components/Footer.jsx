import React from "react";
import "./Footer.css";
import BlackBar from "./BlackBar";
import BlackBarHorizontal from "./BlackBarHorizontal";
import "../App.css";
import logo from "../assets/OtiumLogo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <BlackBar height={50} position={"relative"}></BlackBar>
      <BlackBarHorizontal></BlackBarHorizontal>
      <footer id="footer">
        {/* <div style={{ position: "relative", height: 100 }}></div> */}
        <div className="leftFooter">
          <div className="logoFooterContainer">
            <img src={logo} alt="logo otium villa" />
          </div>
          <p className="textContainer" style={{ textAlign: "left" }}>
            Otium: Latin for leisure, a time of blissful repose, where one finds
            fulfillment through relaxation, contemplation, and indulgence in
            pleasurable pursuits
          </p>
        </div>
        <div className="rightFooter">
          <ol>
            <h3>Our experiences</h3>
            <Link>
              <li className="footerList">All our villas</li>
            </Link>
            <Link>
              <li className="footerList">The services</li>
            </Link>
            <Link to="/questionnaire">
              <li className="footerList">Find your ideal villas</li>
            </Link>
          </ol>
          <ol>
            <h3>Discover more</h3>
            <Link>
              <li className="footerList">About Otium</li>
            </Link>
            <Link>
              <li className="footerList">Contact</li>
            </Link>
            <Link>
              <li className="footerList">Terms and privacy</li>
            </Link>
          </ol>
        </div>
      </footer>
    </>
  );
}
