import React from "react";
import "./VillaCard.css";
import { useState } from "react";
import Button from "../Button";

function villaCard({ image, region, name, tagline }) {
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
        <img src={image}></img>
        <div className="overlay"> </div>
        <div className="textVillaCard">
          <h3 className="regionVillaCard">{region}</h3>
          <p className="nameVillaCard">{name}</p>
          <p className="sloganVillaCard">{tagline}</p>
          {hover && (
            <Button
              cta={"Discover"}
              backgroundColor={"transparent"}
              style={{
                transition: "10s ease-in-out",
                transitionDuration: "4s",
                transitionDelay: "2s",
              }}
            ></Button>
          )}
        </div>
      </div>
    </>
  );
}

export default villaCard;
