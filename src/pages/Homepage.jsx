import "./Homepage.css";
import BlackBar from "../components/BlackBar";
import VillaCard from "../components/Card/VillaCard";
import Button from "../components/Button";
import TitleSection from "../components/TitleSection";
import SmallItalicText from "../components/SmallItalicText";
import BlackBarHorizontal from "../components/BlackBarHorizontal";
import ServiceCard from "../components/Card/ServiceCard";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import NeedHelp from "../components/NeedHelp";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { getAllVillas } from "../api/villa";
import { getAllServices } from "../api/services";
import ReactPlayer from "react-player";
import LoadingSpinner from "../components/LoadingSpinner";
import { Parallax } from "react-scroll-parallax";

function Homepage() {
  const navigate = useNavigate();
  const { isLoggedIn, user } = useContext(AuthContext);
  const [mainVideo, setMainVideo] = useState(
    "https://res.cloudinary.com/dspbzkolr/video/upload/v1691073954/OTIUM/Hero/Original_tkmzsp.mp4"
  );

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

  //function to nav.
  function navToQuestionnaire(event) {
    event.preventDefault();
    navigate("questionnaire");
  }

  function navToAbout(event) {
    event.preventDefault();
    navigate("about");
  }

  //changing the hero assets when the mouse is hovering texts
  const handleMouseEnter = (newVideo) => {
    setMainVideo(newVideo); // change video URL when faded out
  };

  const handleErrorVideo = () => {
    return <div>Your browser cannot play this video</div>;
  };

  if (isLoadingVillas || isLoadingServices) {
    return <LoadingSpinner></LoadingSpinner>;
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
          <div className="reactPlayerWrapper">
            <ReactPlayer
              url={mainVideo}
              playing
              loop
              muted
              width="100%"
              height="100%"
              onError={handleErrorVideo}
              className="reactPlayer"
            />
          </div>
          <div className="overlay">
            <div className="heroTitleContainer">
              <h1 className="heroTitle">Your otium, your perfect stay to</h1>
            </div>
            <div className="heroSlogan">
              <h4
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://res.cloudinary.com/dspbzkolr/video/upload/v1691073954/OTIUM/Hero/Original_tkmzsp.mp4"
                  )
                }
              >
                Retreat
              </h4>
              <h4
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://res.cloudinary.com/dspbzkolr/video/upload/v1691073961/OTIUM/Hero/Discover_uilifj.mp4"
                  )
                }
              >
                Discover
              </h4>
              <h4
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://res.cloudinary.com/dspbzkolr/video/upload/v1691073962/OTIUM/Hero/Indulge_1_pelfmk.mp4"
                  )
                }
              >
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
        <div className="introContainer">
          <div className="introTextContainer">
            {isLoggedIn && <h1>Ciao, {user.surname}</h1>}
            {!isLoggedIn && <h1>Ciao,</h1>}
            <h2>Otium, an exquisite haven for discerning epicureans</h2>
            <p>
              Discover enchanting retreats that rejuvenate your senses and evoke
              pure bliss. Indulge in elegance, unwind in serenity, and embark on
              a journey of delightful discovery. Welcome to the epitome of
              refined hospitality.
            </p>
          </div>
          <Parallax scaleY={[0, 1]}>
            <BlackBar height={50} position={"top"}></BlackBar>
          </Parallax>
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
                <Parallax
                  speed={4}
                  translateX={["7%", "-30%"]}
                  easing={"easeInOut"}
                  startScroll={1200}
                  endScroll={2000}
                >
                  <Link to={`/villa/${villa._id}`}>
                    <VillaCard
                      image={villa.previewPhoto}
                      key={villa._id}
                      region={villa.region}
                      name={villa.name}
                      tagline={villa.tagline}
                    ></VillaCard>
                  </Link>
                </Parallax>
              </>
            );
          })}
        </div>
        <div className="callOut">
          <div className="textContainerCallOut">
            <h2>Do you need help in your research?</h2>
            <p style={{ margin: 0 }}>
              Immerse yourself in a sanctuary of refined indulgence, where each
              moment unveils blissful tranquility, captivating beauty, and an
              extraordinary connection to nature.
            </p>
          </div>
          <div className="flexButton">
            <Button
              cta={"Find Your Perfect Retreat"}
              backgroundColor={"blackButtonNoMargin"}
              onClick={navToQuestionnaire}
            ></Button>
          </div>
        </div>
        <div className="collectionContainer">
          {villas.Villa.slice(4).map((villa) => {
            return (
              <>
                <Parallax
                  speed={4}
                  translateX={["-30%", "7%"]}
                  easing={"easeInOut"}
                  startScroll={1500}
                  endScroll={2800}
                >
                  <Link to={`/villa/${villa._id}`}>
                    <VillaCard
                      image={villa.previewPhoto}
                      key={villa._id}
                      region={villa.region}
                      name={villa.name}
                      tagline={villa.tagline}
                    ></VillaCard>
                  </Link>
                </Parallax>
              </>
            );
          })}
        </div>
      </section>
      <section id="values">
        <div className="introContainer">
          <div className="introTextContainer">
            <h2 style={{ fontSize: 40, fontStyle: "italic" }}>
              Otium,
              <br />
              Embrace the Art of <br /> Extraordinary Luxury
            </h2>
          </div>
          <Parallax scaleY={[0, 1]} startScroll={2000} endScroll={3600}>
            <BlackBar height={100} position={"bottom"}></BlackBar>
          </Parallax>
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
        </div>
      </section>
      <Parallax scaleX={[0, 1]}>
        <BlackBarHorizontal
          height={160}
          startScroll={70}
          endScroll={100}
          speed={4}
        ></BlackBarHorizontal>
      </Parallax>
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
                  <Parallax
                    translateY={[20, -30]}
                    easing={"easeInCirc"}
                    speed={5}
                    shouldAlwaysCompleteAnimation={true}
                    // startScroll={1}
                    // endScroll={150}
                  >
                    <Link to={`/service/${service._id}`}>
                      <ServiceCard
                        nameService={service.title}
                        img={service.imageCover}
                      ></ServiceCard>
                    </Link>
                  </Parallax>
                </>
              );
            })}
          </div>
        </div>
      </section>
      <section id="aboutUs">
        <div className="introContainer">
          <div className="containerPictureVertical">
            <img src="https://res.cloudinary.com/dspbzkolr/image/upload/v1691052033/OTIUM/Founderspictures_dnihod.jpg"></img>
          </div>
          <Parallax scaleY={[0, 1]} startScroll={0} endScroll={7000} speed={10}>
            <BlackBar height={110} position={"top"}></BlackBar>
          </Parallax>

          <div className="columnFlex">
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
            </div>
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
