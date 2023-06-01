import "./Questionnaire.css";
import axios from "axios";
import Button from "../components/Button";
import React, { useState, useContext } from "react";
import OneInput from "../components/OneInput";
import Title from "../components/TitleSection";
// import { AuthContextWrapper } from "../context/AuthContext";
const collectionDate = "http://localhost:3000/questionnaire";


function Questionnaire() {
  // const { user } = useContext(AuthContextWrapper);
  // console.log(AuthContextWrapper)

  const [name, setName] = useState("");
  // const userId = user._id;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [country, setCountry] = useState("");
  const [view, setView] = useState("");
  const [idyllicStatus, setIdyllicStatus] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [petFriendly, setPetFriendly] = useState(0);
  const [numberOFBedroom, setNumberOFBedroom] = useState(0);
  const [services, setServices] = useState([]);

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
    setCountry(event.target.value);
  };
  const handleViewChange = (event) => {
    setView(event.target.value);
  };
  const handleIdyllicStatusChange = (event) => {
    setIdyllicStatus(event.target.value);
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
    setServices(event.target.value);
  };

  async function handleSubmitQuestionnaire(event) {
    event.preventDefault();

    async function questionnaire(event) {
      try {
        const response = await axios.post(collectionDate, {
          name,
          // userId,
          startDate,
          endDate,
          country,
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
          <OneInput
            label={"france"}
            htmlFor={"country"}
            type={"radio"}
            value={country}
            name={"country"}
            onChangeDate={handleCountryChange}
          />
          <OneInput
            label={"itali"}
            htmlFor={"country"}
            type={"radio"}
            value={country}
            name={"country"}
            onChangeDate={handleCountryChange}
          />
          <OneInput
            label={"spain"}
            htmlFor={"country"}
            type={"radio"}
            value={country}
            name={"country"}
            onChangeDate={handleCountryChange}
          />
          <div className="separation2"></div>
          <Title title={"What view do your prefer for your holidays?"}></Title>
          <OneInput
            label={"mountain"}
            type={"radio"}
            htmlFor={"view"}
            value={view}
            name={"view"}
            onChangeDate={handleViewChange}
          />
          <OneInput
            label={"sea"}
            type={"radio"}
            htmlFor={"view"}
            value={view}
            name={"view"}
            onChangeDate={handleViewChange}
          />
          <div className="separation2"></div>
          <Title title={"What atmosphere do you seek?"}></Title>
          <OneInput
            label={"Family Moment"}
            type={"checkbox"}
            htmlFor={"idyllicStatus"}
            value={"Family Moment"}
            name={"idyllicStatus"}
            onChangeDate={handleIdyllicStatusChange}
          />
          <OneInput
            label={"Life Party"}
            type={"checkbox"}
            htmlFor={"idyllicStatus"}
            value={"Life Party"}
            name={"idyllicStatus"}
            onChangeDate={handleIdyllicStatusChange}
          />
          <OneInput
            label={"Friends Trip"}
            type={"checkbox"}
            htmlFor={"idyllicStatus"}
            value={"Friends Trip"}
            name={"idyllicStatus"}
            onChangeDate={handleIdyllicStatusChange}
          />

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
          <OneInput
            label={"Yachting"}
            type={"checkbox"}
            htmlFor={"services"}
            value={"Yachting"}
            name={"idyllicStatus"}
            onChange={handleServicesChange}
          />
          <OneInput
            label={"Event planner"}
            type={"checkbox"}
            htmlFor={"services"}
            value={"Event planner"}
            name={"idyllicStatus"}
            onChange={handleServicesChange}
          />
          <OneInput
            label={"Sport coach"}
            type={"checkbox"}
            htmlFor={"services"}
            value={"Sport coach"}
            name={"idyllicStatus"}
            onChange={handleServicesChange}
          />
          <OneInput
            label={"Exclusive Excursions"}
            type={"checkbox"}
            htmlFor={"services"}
            value={"Exclusive Excursions"}
            name={"idyllicStatus"}
            onChange={handleServicesChange}
          />
          <OneInput
            label={"Personal Stylist"}
            type={"checkbox"}
            htmlFor={"services"}
            value={"Personal Stylist"}
            name={"idyllicStatus"}
            onChange={handleServicesChange}
          />
          <OneInput
            label={"Ultimate Spa"}
            type={"checkbox"}
            htmlFor={"services"}
            value={"Ultimate Spa"}
            name={"idyllicStatus"}
            onChange={handleServicesChange}
          />
          <OneInput
            label={"Private Chef"}
            type={"checkbox"}
            htmlFor={"services"}
            value={"Private Chef"}
            name={"idyllicStatus"}
            onChange={handleServicesChange}
          />
          <OneInput
            label={"Chauffeur"}
            type={"checkbox"}
            htmlFor={"services"}
            value={"Chauffeur"}
            name={"idyllicStatus"}
            onChange={handleServicesChange}
          />
          <OneInput
            label={"Gouvernante"}
            type={"checkbox"}
            htmlFor={"services"}
            value={"Gouvernante"}
            name={"idyllicStatus"}
            onChange={handleServicesChange}
          />
        </div>
        <div className="positionButton">
          <button>find</button>
        </div>
      </form>
    </>
  );
}

export default Questionnaire;
