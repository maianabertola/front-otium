import React from "react";
import "./VillaCard.css";
import imgVilla from "../assets/imageVilla.jpg";

function villaCard({ region, name, slogan }) {
  return (
    <>
      <div className="villaCard">
        <img src={imgVilla}></img>
        <div className="overlay"> </div>
        <div className="textVillaCard">
          <h3 className="regionVillaCard">{region}</h3>
          <p className="nameVillaCard">{name}</p>
          <p className="sloganVillaCard">{slogan}</p>
        </div>
      </div>
    </>
  );
}

export default villaCard;
