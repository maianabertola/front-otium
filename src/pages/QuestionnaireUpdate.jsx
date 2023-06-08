import React from "react";
import service from "../service/service";
import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import OneInput from "../components/OneInput";
import Title from "../components/TitleSection";

function QuestionnaireUpdate() {
  const param = useParams();
  console.log(param);
  const { user } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [pickedCountry, setPickedCountry] = useState([]);
  const [pickedView, setPickedView] = useState("");
  const [pickedIdyllicStatus, setPickedIdyllicStatus] = useState([]);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [petFriendly, setPetFriendly] = useState("");
  const [numberOFBedroom, setNumberOFBedroom] = useState(1);
  const [pickedServices, setPickedServices] = useState([]);

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

  async function handleEditQuestionnaire(event) {
    event.preventDefault();
    const id = user._id;

    try {
      const response = await service.patch(`/questionnaire/${param.id}`, {
        name,
        userId: id,
        pickedCountry,
        pickedView,
        pickedIdyllicStatus,
        numberOfPeople,
        petFriendly,
        numberOFBedroom,
        pickedServices,
      });

      console.log("la respinse", response);
      //   navigate(`/questionnaire/${idEnquestion}`);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <form onSubmit={handleEditQuestionnaire} className="second_block">
      <div>
        <Title title={"What the name of your retreat project ?"}></Title>
        <OneInput
          key={"name"}
          label={""}
          type={"text"}
          value={name}
          name={"name"}
          onChange={handleNameChange}
        />
        <div className="separation2"></div>
        <Title title={"Which country appeals you?"}></Title>
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
        <div className="separation2"></div>
        <Title title={"What view do your prefer for your holidays?"}></Title>
        {["mountain", "sea"].map((view) => {
          return (
            <OneInput
              key={view}
              label={view}
              type={"radio"}
              value={view}
              name={"view"}
              onChange={handleViewChange}
            />
          );
        })}
        <div className="separation2"></div>
        <Title title={"What atmosphere do you seek?"}></Title>
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
        <div className="separation2"></div>
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
        <div className="separation2"></div>
        <Title title={"Do you travel with your pets?"}></Title>
        {["yes", "no"].map((response) => {
          return (
            <OneInput
              key={response}
              label={response}
              type={"radio"}
              value={response}
              name={"petFriendly"}
              onChange={handlePetFriendlyChange}
            />
          );
        })}
        <div className="separation2"></div>
        <Title title={"How many bedrooms do you need?"}></Title>
        <OneInput
          key={"bedroom"}
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
      </div>
      <div className="positionButton">
        <button>find</button>
      </div>
    </form>
  );
}

export default QuestionnaireUpdate;
