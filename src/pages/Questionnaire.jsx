import "./Questionnaire.css";
import axios from "axios";
import Button from "../components/Button";
import React, { useState, useContext } from "react";
import OneInput from "../components/OneInput";
import Title from "../components/TitleSection";
import { AuthContext } from "../context/AuthContext";
const collectionDate = "http://localhost:3000/questionnaire";

function Questionnaire() {
  const { user, authentificationUser, token } = useContext(AuthContext);
  console.log(user);
  console.log("auth fct", authentificationUser);
  console.log("token de auth fct", token);

  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pickedCountry, setPickedCountry] = useState([]);
  const [view, setView] = useState("");
  const [pickedIdyllicStatus, setPickedIdyllicStatus] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [petFriendly, setPetFriendly] = useState(false);
  const [numberOFBedroom, setNumberOFBedroom] = useState(1);
  const [pickedServices, setPickedServices] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
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
    setView(event.target.value);
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
  const handleNumberOFBedroomChange = (event) => {
    setNumberOFBedroom(event.target.value);
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
    const id = user._id;
    console.log(id);
    async function questionnaire(event) {
      try {
        const response = await axios.post(collectionDate, {
          name,
          userId: user._id,
          startDate,
          endDate,
          pickedCountry,
          view,
          idyllicStatus,
          numberOfPeople,
          petFriendly,
          numberOFBedroom,
          services,
        });
        console.log("response", response);
      } catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <>
      <div className="first_block">
        <div className="presentation">
          <Title
            title={"Take rest; a field that has rested gives a bountiful crop."}
          ></Title>
          <div>
            <p>- Ovid</p>
          </div>
        </div>
        <div className="separation"></div>
        <div>
          <div className="retreat">
            <div className="block_retreat">
              <p className="description_retreat">
                Indulge in the journey of finding your perfect Opium villa
                through our questionnaire. Designed with meticulous care, this
                interactive experience guides you through a seamless exploration
                of your desires, preferences, and dreams.
              </p>
              <Button>Find Your Perfect Retreat </Button>
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmitQuestionnaire} className="second_block">
        <div>
          <Title title={"What the name of your retreat project ?"}></Title>
          <OneInput
            label={""}
            type={"text"}
            htmlFor={"name"}
            value={name}
            name={"name"}
            onChange={handleNameChange}
          />
          <div className="separation2"></div>
          <div className="blockTrip">
            <Title
              title={"What are the start and end dates of your trip?"}
            ></Title>
            <OneInput
              label={"Start Date"}
              htmlFor={"Date"}
              type={"date"}
              value={startDate}
              name={"Date"}
              onChange={handleStartDateChange}
            />
            <OneInput
              label={"End Date"}
              htmlFor={"Date"}
              type={"date"}
              value={endDate}
              name={"Date"}
              onChange={handleEndDateChange}
            />
          </div>
          <div className="separation2"></div>
          <Title title={"Which country appeals you?"}></Title>
          {["France", "Italy", "Spain"].map((name) => {
            return (
              <OneInput
                key={name}
                label={name}
                type={"checkbox"}
                value={name}
                name={"country"}
                onChange={handleCountryChange}
              />
            );
          })}
          <div className="separation2"></div>
          <Title title={"What view do your prefer for your holidays?"}></Title>
          <OneInput
            label={"mountain"}
            type={"radio"}
            htmlFor={"mountain"}
            value={view}
            name={"view"}
            onChange={handleViewChange}
          />
          <OneInput
            label={"sea"}
            type={"radio"}
            htmlFor={"sea"}
            value={view}
            name={"view"}
            onChange={handleViewChange}
          />
          <div className="separation2"></div>
          <Title title={"What atmosphere do you seek?"}></Title>
          {["Family Moment", "Life Party", "Friends Trip"].map((name) => {
            return (
              <OneInput
                key={name}
                label={name}
                type={"checkbox"}
                value={name}
                name={"idyllicStatus"}
                onChange={handleIdyllicStatusChange}
              />
            );
          })}

          <div className="separation2"></div>
          <Title title={"How many people are accompanying you?"}></Title>
          <OneInput
            label={""}
            type={"number"}
            htmlFor={"people"}
            value={numberOfPeople}
            name={"numberOfPeople"}
            onChange={handleNumberOfPeopleChange}
          />
          <div className="separation2"></div>
          <Title title={"Do you travel with your pets?"}></Title>
          <OneInput
            label={""}
            type={"number"}
            htmlFor={"petFriendly"}
            value={petFriendly}
            name={"petFriendly"}
            onChange={handlePetFriendlyChange}
          />
          <div className="separation2"></div>
          <Title title={"How many bedrooms do you need?"}></Title>
          <OneInput
            label={""}
            type={"number"}
            htmlFor={"bedrooms"}
            value={numberOFBedroom}
            name={"numberOFBedroom"}
            onChange={handleNumberOFBedroomChange}
          />
          <div className="separation2"></div>
          <Title title={"What services are essential for you?"}></Title>
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
          ].map((name) => {
            return (
              <OneInput
                label={name} 
                type={"checkbox"}
                htmlFor={name}
                value={name}
                name={"services"}
                onChange={handleServicesChange}
              />
            );
          })}
        </div>
        <div className="positionButton">
          <button>find</button>
        </div>
      </form>
    </>
  );
}

export default Questionnaire;
