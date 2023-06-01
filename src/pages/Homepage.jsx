import React from "react";
import "./Homepage.css";
import heroImg from "../assets/Positano.jpeg";
import BlackBar from "../components/BlackBar";
import VillaCard from "../components/villaCard";
import Button from "../components/Button";
import TitleSection from "../components/TitleSection";
import SmallItalicText from "../components/SmallItalicText";
import BlackBarHorizontal from "../components/BlackBarHorizontal";
import ServiceCard from "../components/ServiceCard";
import serviceImg from "../assets/ChefService.jpg";
import aboutImg from "../assets/Founderspictures.jpg";

function Homepage() {
  return (
    <>
      <section id="heroSection">
        <div className="heroContainer">
          <img src={heroImg} />
          <div className="overlay">
            <h1 className="heroText">Your otium, your perfect stay to</h1>
            <div className="heroSlogan">
              <h4>Retreat</h4>
              <h4>Discover</h4>
              <h4>Indulge</h4>
            </div>
          </div>
        </div>
      </section>

      <div className="introContainer">
        <div className="introTextContainer">
          <h1>Ciao Fabien</h1>
          <h2>Otium, an exquisite haven for discerning epicureans</h2>
          <p>
            Discover enchanting retreats that rejuvenate your senses and evoke
            pure bliss. Indulge in elegance, unwind in serenity, and embark on a
            journey of delightful discovery. Welcome to the epitome of refined
            hospitality.
          </p>
        </div>
        <BlackBar height={60}></BlackBar>
      </div>
      <section id="villaCollection">
        <TitleSection
          title={"Your perfect holidays begin here"}
          paragraph={
            "Immerse yourself in a sanctuary of refined indulgence, where each moment unveils blissful tranquility, captivating beauty, and an extraordinary connection to nature."
          }
        ></TitleSection>

        <VillaCard
          region={"Almafi Coast"}
          name={"Villa Damdam"}
          slogan={"A little tagline about the place."}
        ></VillaCard>
        <div className="callOut">
          <div className="textContainerCallOut">
            <h2>Do you need help in your research?</h2>
            <p>
              Immerse yourself in a sanctuary of refined indulgence, where each
              moment unveils blissful tranquility, captivating beauty, and an
              extraordinary connection to nature.
            </p>
          </div>
          <div className="flexButton">
            <Button cta={"Find Your Perfect Retreat"}></Button>
          </div>
        </div>
      </section>
      <section id="values" className="flexRow">
        <div className="introContainer">
          <div className="introTextContainer">
            <h2 style={{ fontSize: 40, fontStyle: "italic" }}>
              Otium,
              <br />
              Embrace the Art of <br /> Extraordinary Luxury
            </h2>
          </div>
          <BlackBar></BlackBar>
        </div>

        <div className="flexVertical">
          <SmallItalicText
            title={"Tranquility and Privacy"}
            paragraph={
              "Our villas are nestled in exceptional and discreet locations, far from crowds, ensuring utmost privacy for your vacation."
            }
          ></SmallItalicText>
          <SmallItalicText
            title={"Unparalleled Services"}
            paragraph={
              "Experience the finest in hospitality with services that rival the best palaces. From in-house chefs, housekeeping, butlers, and personal trainers to concierge services, we cater to your every need."
            }
          ></SmallItalicText>
          <SmallItalicText
            title={"Dedicated Team"}
            paragraph={
              "Our team is available 7 days a week from 9 am to 8 pm, ready to fulfill your desires and ensure a seamless experience during your stay."
            }
          ></SmallItalicText>
        </div>
      </section>
      <BlackBarHorizontal height={160}></BlackBarHorizontal>
      <section id="services">
        <div className="greenBackgroundServices">
          <TitleSection
            title={"Opium's Elite Services"}
            paragraph={
              "Immerse yourself in a sanctuary of refined indulgence, where each moment unveils blissful tranquility, captivating beauty, and an extraordinary connection to nature."
            }
          ></TitleSection>
          <ServiceCard
            nameService={"Private Chef"}
            img={serviceImg}
          ></ServiceCard>
        </div>
      </section>
      <section id="aboutUs">
        <div className="flexRow">
          <div className="containerPictureVertical">
            <img src={aboutImg}></img>
          </div>
          <BlackBar height={160}></BlackBar>
          <div className="introContainer">
            <div className="introTextContainer">
              <h2 style={{ fontSize: 40, fontStyle: "italic" }}>
                Otium,
                <br />
                Born from a Vision,
                <br /> Crafted with passion,
              </h2>
              <p>
                Opium was born from a vision to create an unparalleled
                experience—a harmonious blend of opulence, tranquility, and
                refined indulgence. With meticulous design and unwavering
                commitment, we crafted a haven where every detail reflects our
                dedication. Welcome to a world where the extraordinary is woven
                into the fabric of your existence.
              </p>
              <Button cta={"Discover Our Story"}></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
