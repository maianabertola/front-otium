import React from "react";
import "./ServiceCard.css";

function ServiceCard({ nameService, img }) {
  return (
    <>
      <div className="containerService">
        <img src={img} />
        <div className="overlay"></div>
        <h3 className="titleService">{nameService}</h3>
      </div>
    </>
  );
}

export default ServiceCard;
