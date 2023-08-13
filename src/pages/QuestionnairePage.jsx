import "./QuestionnairePage.css";
import Button from "../components/Button";
import React, { useState, useContext } from "react";
import OneInput from "../components/Input/OneInput";
import Title from "../components/TitleSection";
import { AuthContext } from "../context/AuthContext";
import service from "../service/service";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import BlackBar from "../components/BlackBar";
import TitleSection from "../components/TitleSection";
import Toggle from "../components/Toggle/Toggle";

const collectionDate = "/questionnaire";

function QuestionnairePage() {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [pickedCountry, setPickedCountry] = useState([]);
  const [pickedView, setPickedView] = useState("");
  const [pickedIdyllicStatus, setPickedIdyllicStatus] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [petFriendly, setPetFriendly] = useState("");
  const [numberOfBedroom, setNumberOfBedroom] = useState(1);
  const [pickedServices, setPickedServices] = useState([]);

  const scrollRef = useRef();
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });

  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCountryChange = (event) => {
    const country = event.target.value;
    if (!pickedCountry.includes(country)) {
      setPickedCountry((current) => [...current, country]);
    } else {
      setPickedCountry(pickedCountry.filter((element) => element !== country));
    }
  };
  const handleViewChange = (event) => {
    setPickedView(event.target.value);
  };
  const handleIdyllicStatusChange = (event) => {
    const idyllicStatus = event.target.value;
    if (!pickedIdyllicStatus.includes(idyllicStatus)) {
      setPickedIdyllicStatus((current) => [...current, idyllicStatus]);
    } else {
      setPickedIdyllicStatus(
        pickedIdyllicStatus.filter((element) => element !== idyllicStatus)
      );
    }
  };
  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };
  const handlePetFriendlyChange = (event) => {
    setPetFriendly(event.target.value);
  };
  const handleNumberOfBedroomChange = (event) => {
    setNumberOfBedroom(event.target.value);
  };
  const handleServicesChange = (event) => {
    const services = event.target.value;
    if (!pickedServices.includes(services)) {
      setPickedServices((current) => [...current, services]);
    } else {
      setPickedServices(
        pickedServices.filter((element) => element !== services)
      );
    }
  };
  async function handleSubmitQuestionnaire(event) {
    event.preventDefault();
    try {
      const response = await service.post("/questionnaire", {
        name,
        userId: user._id,
        pickedCountry,
        pickedView,
        pickedIdyllicStatus,
        numberOfPeople,
        petFriendly,
        numberOfBedroom,
        pickedServices,
      });
      navigate("/created");
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <section id="introQuestionnaire" ref={scrollRef}>
        <div className="introContainer">
          <div className="introLeftTextContainer">
            <h1>
              "Take rest; a field that has rested gives a bountiful crop."
            </h1>
            <div>
              <p
                style={{
                  fontSize: 2.5 + "rem",
                  fontFamily: "Playfair Semibold",
                }}
              >
                - Ovid
              </p>
            </div>
          </div>
          <BlackBar height={100}></BlackBar>
          <div className="introRightTextContainer">
            <p
              style={{
                paddingTop: 2 + "vh",
                paddingBottom: 4 + "vh",
                width: 80 + "%",
                textAlign: "center",
              }}
            >
              Indulge in the journey of finding your perfect Opium villa through
              our questionnaire. Designed with meticulous care, this interactive
              experience guides you through a seamless exploration of your
              desires, preferences, and dreams.
            </p>
            <Button
              backgroundColor={"black"}
              cta={"Find Your Perfect Retreat"}
            ></Button>
          </div>
        </div>
      </section>
      <section id="firstQuestion" className="questionnaireSection">
        <TitleSection
          title={"What the name of your retreat project ?"}
        ></TitleSection>
        <OneInput
          key={"name"}
          label={""}
          type={"text"}
          value={name}
          name={"name"}
          onChange={handleNameChange}
          placeholder={"My trip with my family - winter 2024"}
          required={true}
        />
      </section>
      <section id={"secondQuestion"} className="questionnaireSection"></section>
      <TitleSection title={"Which country appeals you?"}></TitleSection>
      <div className="flexVerticalQuestionnaire">
        {["France", "Italy", "Spain"].map((country) => {
          return (
            <OneInput
              key={country}
              label={country}
              type={"checkbox"}
              value={country}
              name={"country"}
              onChange={handleCountryChange}
            />
          );
        })}
      </div>
      <section id={"thirdQuestion"} className="questionnaireSection">
        <TitleSection title={"What atmosphere do you seek?"}></TitleSection>

        {["Family Moment", "Life Party", "Friends Trip"].map((trip) => {
          return (
            <OneInput
              key={trip}
              label={trip}
              type={"checkbox"}
              value={trip}
              name={"idyllicStatus"}
              onChange={handleIdyllicStatusChange}
            />
          );
        })}
      </section>
      <section id={"fourthQuestion"} className="questionnaireSection">
        <Title title={"How many people are accompanying you?"}></Title>
        <OneInput
          key={"number"}
          label={""}
          type={"number"}
          htmlFor={"people"}
          value={numberOfPeople}
          name={"numberOfPeople"}
          onChange={handleNumberOfPeopleChange}
        />
      </section>
      <section id={"fifthQuestion"} className="questionnaireSection">
        <TitleSection title={"Do you travel with your pets?"}></TitleSection>

        <div className="flexToggleQuestionnaire">
          <Toggle
            key={"isPetFriendly"}
            label={"Yes"}
            value={true}
            name={"petFriendly"}
            onChange={handlePetFriendlyChange}
          ></Toggle>
          <Toggle
            key={"isNotPetFriendly"}
            label={"No"}
            value={false}
            name={"petFriendly"}
            onChange={handlePetFriendlyChange}
          ></Toggle>
        </div>
      </section>
      <section id={"sixthQuestion"} className="questionnaireSection">
        <TitleSection title={"How many bedrooms do you need?"}></TitleSection>
        <OneInput
          key={"number1"}
          label={""}
          type={"number"}
          value={numberOfBedroom}
          name={"numberOfBedroom"}
          onChange={handleNumberOfBedroomChange}
        />
      </section>
      <section id={"seventhQuestion"} className="questionnaireSection">
        <TitleSection
          title={"What services are essential for you?"}
        ></TitleSection>
        {[
          "Yachting",
          "Event planner",
          "Sport coach",
          "Exclusive Excursions",
          "Personal Stylist",
          "Ultimate Spa",
          "Private Chef",
          "Chauffeur",
          "Gouvernante",
        ].map((services) => {
          return (
            <OneInput
              key={services}
              label={services}
              type={"checkbox"}
              htmlFor={services}
              value={services}
              name={"services"}
              onChange={handleServicesChange}
            />
          );
        })}
        <Button cta={"Discover the results"} backgroundColor={"black"}></Button>
      </section>
    </>
  );
}

export default QuestionnairePage;
