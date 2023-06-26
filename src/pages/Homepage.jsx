import "./Homepage.css";
import heroImg from "../assets/Positano.jpeg";
import BlackBar from "../components/BlackBar";
import VillaCard from "../components/VillaCard";
import Button from "../components/Button";
import TitleSection from "../components/TitleSection";
import SmallItalicText from "../components/SmallItalicText";
import BlackBarHorizontal from "../components/BlackBarHorizontal";
import ServiceCard from "../components/ServiceCard";
import serviceImg from "../assets/ChefService.jpg";
import aboutImg from "../assets/Founderspictures.jpg";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import NeedHelp from "../components/NeedHelp";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import service from "../service/service";
import "../App.css";

function Homepage() {
  const navigate = useNavigate();
  const [villas, setVillas] = useState(null);
  const [services, setServices] = useState(null);
  const { user, isLoggedIn } = useContext(AuthContext);

  //fetch data from the villa
  const getAllVillas = async () => {
    try {
      const myVillas = await service.get("/villa");
      setVillas(myVillas.data);
    } catch (error) {
      console.log(
        "there is an error when fetching all the villas from db on the homepage"
      );
    }
  };

  //fetching the services
  const getAllServices = async () => {
    try {
      const myServices = await service.get("/service");
      setServices(myServices.data);
    } catch (error) {
      console.log("there is an error when fetching all the services from db");
    }
  };

  //function to nav. to the questionnaire page
  function navToQuestionnaire(event) {
    event.preventDefault();
    navigate("questionnaire");
  }

  //use effect to fire these functions once the page is loaded
  useEffect(() => {
    getAllVillas(), getAllServices();
  }, []);

  //avoid error by displaying div if the data is not loaded
  if (!villas || !services) {
    return <div>Content is loading</div>;
  }

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

      <section id="intro">
        <BlackBar height={50}></BlackBar>
        <div className="introContainer">
          <div className="introTextContainer">
            {!isLoggedIn && <h1>Ciao,</h1>}
            <h2>Otium, an exquisite haven for discerning epicureans</h2>
            <p>
              Discover enchanting retreats that rejuvenate your senses and evoke
              pure bliss. Indulge in elegance, unwind in serenity, and embark on
              a journey of delightful discovery. Welcome to the epitome of
              refined hospitality.
            </p>
          </div>
        </div>
      </section>

      <section id="villaCollection">
        <TitleSection
          title={"Your perfect holidays begin here"}
          paragraph={
            "Immerse yourself in a sanctuary of refined indulgence, where each moment unveils blissful tranquility, captivating beauty, and an extraordinary connection to nature."
          }
        ></TitleSection>
        <div className="collectionContainer">
          {/* slicing the mapping to insert the call out between two rows */}
          {villas.Villa.slice(0, 4).map((villa) => {
            return (
              <>
                <Link to={`/villa/${villa._id}`}>
                  <VillaCard
                    key={villa._id}
                    region={villa.region}
                    name={villa.name}
                    slogan={villa.slogan}
                  ></VillaCard>
                </Link>
              </>
            );
          })}
        </div>
        <div className="callOut">
          <div className="textContainerCallOut">
            <h2>Do you need help in your research?</h2>
            <p style={{ margin: 0, paddingRight: 10 + "vw" }}>
              Immerse yourself in a sanctuary of refined indulgence, where each
              moment unveils blissful tranquility, captivating beauty, and an
              extraordinary connection to nature.
            </p>
          </div>
          <div className="flexButton">
            <Button
              cta={"Find Your Perfect Retreat"}
              url={navToQuestionnaire}
              backgroundColor={"black"}
            ></Button>
          </div>
        </div>
        <div className="collectionContainer">
          {villas.Villa.slice(4).map((villa) => {
            return (
              <>
                <Link to={`/villa/${villa._id}`}>
                  <VillaCard
                    key={villa._id}
                    region={villa.region}
                    name={villa.name}
                    slogan={villa.slogan}
                  ></VillaCard>
                </Link>
              </>
            );
          })}
        </div>
      </section>
      <section id="values" className="flexRow">
        <BlackBar height={82}></BlackBar>
        <div className="introContainer">
          <div className="introTextContainer">
            <h2 style={{ fontSize: 40, fontStyle: "italic" }}>
              Otium,
              <br />
              Embrace the Art of <br /> Extraordinary Luxury
            </h2>
          </div>
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
          <div className="servicesContainer">
            {services.ServiceDetail.map((service) => {
              return (
                <>
                  <Link to={`/service/${service._id}`}>
                    <ServiceCard
                      nameService={service.title}
                      img={serviceImg}
                    ></ServiceCard>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section id="aboutUs" className="flexRow">
        <div className="containerPictureVertical">
          <img src={aboutImg}></img>
        </div>
        <BlackBar height={100}></BlackBar>
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
            <Button
              cta={"Discover Our Story"}
              backgroundColor={"black"}
            ></Button>
          </div>
        </div>
      </section>
      <section id="help"></section>
      <NeedHelp></NeedHelp>
    </>
  );
}

export default Homepage;
