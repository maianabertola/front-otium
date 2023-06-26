import React from "react";
import "./VillaCard.css";
import imgVilla from "../assets/imageVilla.jpg";
import { useState } from "react";
import Button from "./Button";

function villaCard({ region, name, slogan }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        className="villaCard"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <img src={imgVilla}></img>
        <div className="overlay"> </div>
        <div className="textVillaCard">
          <h3 className="regionVillaCard">{region}</h3>
          <p className="nameVillaCard">{name}</p>
          <p className="sloganVillaCard">{slogan}</p>
          {hover && (
            <Button cta={"Discover"} backgroundColor={"transparent"}></Button>
          )}
        </div>
      </div>
    </>
  );
}

export default villaCard;
