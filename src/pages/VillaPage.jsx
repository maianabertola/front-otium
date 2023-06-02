import React from "react";
import "./VillaPage.css";
import villaHero from "../assets/villa_era.webp";
import Button from "../components/Button";
import VillaCardDetails from "../components/VillaCardDetails";
import Box from "../components/Box";

function VillaPage() {
  return (
    <>
      <section id="heroSection">
        <div className="heroVillaContainer">
          <img src={villaHero} />
          <Button
            cta={"More Photos"}
            width={3}
            backgroundColor={"grey"}
          ></Button>
        </div>
      </section>
      <section id="villaInfo">
        <div className="textVillaContainer">
          <p className="sloganVilla">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <p className="descriptionVilla">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. .
          </p>
          <h2>An Idyllic Villa for</h2>
          <div className="flexBox">
            <Box text={"FAMILY MOMENT"}></Box>
            <Box text={"FRIENDS TRIP"}></Box>
            <Box text={"LIFE PARTY"}></Box>
          </div>
          <h2>Is Pet frienldy?</h2>
          <Box text={"YES"}></Box>
          <Box text={"NO"}></Box>
        </div>
        <VillaCardDetails></VillaCardDetails>
      </section>
    </>
  );
}

export default VillaPage;
