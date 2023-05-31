import React from "react";
import "./Homepage.css";
import heroImg from "../assets/Positano.jpeg";

function Homepage() {
  return (
    <div>
      <div className="heroContainer">
        <h1>Your otium, your perfect sta</h1>
        <img src={heroImg}></img>
      </div>
    </div>
  );
}

export default Homepage;
