import React from "react";
import "./Footer.css";
import BlackBar from "./BlackBar";
import BlackBarHorizontal from "./BlackBarHorizontal";
import "../App.css";
import logo from "../assets/OtiumLogo.png";

export default function Footer() {
  return (
    <>
      <div className="flexRow">
        <BlackBar height={50}></BlackBar>
      </div>
      <BlackBarHorizontal></BlackBarHorizontal>
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
        <h3>Our experiences</h3>
        <Link>All our villas</Link>
        <Link>The services</Link>
        <Link>Find your ideal villas</Link>
      </div>
    </>
  );
}
