import "./Homepage.css";
import originalHeroImage from "../assets/Positano.jpeg";
import discoverHeroImage from "../assets/Discover.jpg";
import indulgeHeroImage from "../assets/Indulge.jpg";
import BlackBar from "../components/BlackBar";
import VillaCard from "../components/VillaCard/VillaCard";
import Button from "../components/Button";
import TitleSection from "../components/TitleSection";
import SmallItalicText from "../components/SmallItalicText";
import BlackBarHorizontal from "../components/BlackBarHorizontal";
import ServiceCard from "../components/ServiceCard";
import serviceImg from "../assets/ChefService.jpg";
import aboutImg from "../assets/Founderspictures.jpg";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import NeedHelp from "../components/NeedHelp";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../App.css";
import { useQuery } from "react-query";
import { getAllVillas } from "../api/villa";
import { getAllServices } from "../api/services";

function Homepage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const [heroImage, setHeroImage] = useState(originalHeroImage);
  const [imageLoading, setImageLoading] = useState(false);

  //loading villas collection
  const {
    isLoading: isLoadingVillas,
    isError: isErrorVillas,
    error: errorVillas,
    data: villas,
  } = useQuery({ queryKey: ["villas"], queryFn: getAllVillas });

  //loading services collection
  const {
    isLoading: isLoadingServices,
    isError: isErrorServices,
    error: errorServices,
    data: services,
  } = useQuery({ queryKey: ["services"], queryFn: getAllServices });

  //function to nav. to the questionnaire page
  function navToQuestionnaire(event) {
    event.preventDefault();
    navigate("questionnaire");
  }

  function navToAbout(event) {
    event.preventDefault();
    navigate("about");
  }

  const handleMouseEnter = (newImage) => {
    setHeroImage(newImage);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  if (isLoadingVillas || isLoadingServices) {
    return <div>Loading...</div>;
  }

  if (isErrorVillas || isErrorServices) {
    return (
      <div>
        There was an error loading the data:
        {errorVillas || errorServices}
      </div>
    );
  }

  return (
    <>
      <section id="heroSection">
        <div className="heroContainer">
          <img
            src={heroImage}
            className={imageLoading ? "fade-out" : ""}
            onLoad={handleImageLoad}
          />
          <div className="overlay">
            <div className="heroTitleContainer">
              <h1 className="heroTitle">Your otium, your perfect stay to</h1>
            </div>
            <div className="heroSlogan">
              <h4 onMouseEnter={() => handleMouseEnter(originalHeroImage)}>
                Retreat
              </h4>
              <h4 onMouseEnter={() => handleMouseEnter(discoverHeroImage)}>
                Discover
              </h4>
              <h4 onMouseEnter={() => handleMouseEnter(indulgeHeroImage)}>
                Indulge
              </h4>
            </div>
            <div className="logoFirstWrapper">
              <p className="logoO">O</p>
            </div>
            <div className="logoSecondWrapper">
              <p className="logoT">T</p>
            </div>
          </div>
        </div>
      </section>

      <section id="intro">
        <BlackBar height={40} position={"absolute"}></BlackBar>
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
                    image={villa.previewPhoto}
                    key={villa._id}
                    region={villa.region}
                    name={villa.name}
                    tagline={villa.tagline}
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
              backgroundColor={"black"}
              onClick={navToQuestionnaire}
            ></Button>
          </div>
        </div>
        <div className="collectionContainer">
          {villas.Villa.slice(4).map((villa) => {
            return (
              <>
                <Link to={`/villa/${villa._id}`}>
                  <VillaCard
                    image={villa.previewPhoto}
                    key={villa._id}
                    region={villa.region}
                    name={villa.name}
                    tagline={villa.tagline}
                  ></VillaCard>
                </Link>
              </>
            );
          })}
        </div>
      </section>
      <section id="values" className="flexRow">
        <BlackBar height={75} position={"absolute"}></BlackBar>
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
                      img={service.imageCover}
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
        <BlackBar height={110} position={"absolute"}></BlackBar>
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
              onClick={navToAbout}
            ></Button>
          </div>
        </div>
      </section>
      <section id="help">
        <NeedHelp></NeedHelp>
      </section>
    </>
  );
}

export default Homepage;
