import React from "react";
import "./ServiceCard.css";
import { useState } from "react";
import Button from "../Button";
import { Parallax } from "react-scroll-parallax";

function ServiceCard({ nameService, img }) {
  const [hover, setHover] = useState(false);

  return (
    <>
      {/* <Parallax
        rotateY={[80, 0]}
        translateY={[-8, 8]}
        easing={"easeInCirc"}
        shouldAlwaysCompleteAnimation={true}
        startScroll={0}
        endScroll={180}
        speed={-10}
      > */}
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
      {/* </Parallax> */}
    </>
  );
}

export default ServiceCard;
