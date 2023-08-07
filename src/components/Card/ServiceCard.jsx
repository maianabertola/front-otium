import React from "react";
import "./ServiceCard.css";
import { useState } from "react";
import Button from "../Button";

function ServiceCard({ nameService, img }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        className="serviceCard"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <img src={img} />
        <div className="overlay"></div>
        <div className="textServiceCard">
          <h3 className="titleService">{nameService}</h3>
          {hover && (
            <Button cta={"Discover"} backgroundColor={"transparent"}></Button>
          )}
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
