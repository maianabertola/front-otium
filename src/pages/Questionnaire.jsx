import React from "react";
import "./Questionnaire.css";
import axios from "axios";
import Button from "../components/Button";
import { useState } from "react";
const collectionDate = "http://localhost:3000/questionnaire";

function postFormQuestionnaire() {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [country, setCountry] = useState("");
  const [view, setView] = useState("");
  const [idyllicStatus, setIdyllicStatus] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [petFriendly, setPetFriendly] = useState(0);
  const [numberOFBedroom, setNumberOFBedroom] = useState(0);
  const [services, setServices] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  async function questionnaire(event) {
    try {
      const response = await axios.post(collectionDate, {
        name,
        userId,
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

  return (
    <>
      <div className="first_block">
        <div className="presentation">
          <h2>Take rest; a field that has rested gives a bountiful crop.</h2>
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
      <form className="second_block">
        <div>
          <h3>What the name of your retreat project ?</h3>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
          <div className="separation2"></div>
          <div className="block_trip">
            <h3>What are the start and end dates of your trip?</h3>
            <div className="date_trip">
              <label htmlFor="startDate">Start Date</label>

              <input
                type="date"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
              ></input>
              <label htmlFor="endDate">End Date</label>

              <input
                type="date"
                value={endDate}
                onChange={(event) => setEndDate(event.target.value)}
              ></input>
            </div>
          </div>
          <div className="separation2"></div>
          <h3>Which country appeals you?</h3>
          <input
            type="radio"
            name="france"
            value={country}
            checked={selectedOption === { country }}
            onChange={(event) => setSelectedOption(event.target.value)}
          ></input>
          <label htmlFor="country">France</label>
          <input
            type="radio"
            name="itali"
            value={country}
            checked={selectedOption === { country }}
            onChange={(event) => setSelectedOption(event.target.value)}
          ></input>
          <label htmlFor="country">Itali</label>
          <input
            type="radio"
            name="spain"
            value={country}
            checked={selectedOption === { country }}
            onChange={(event) => setSelectedOption(event.target.value)}
          ></input>
          <label htmlFor="country">spain</label>
          <div className="separation2"></div>
          <h3>What view do your prefer for your holidays?</h3>
          <input
            type="radio"
            value={view}
            onChange={(event) => setView(event.target.value)}
          ></input>
          <label htmlFor="view">photo</label>
          <input
            type="radio"
            value={view}
            onChange={(event) => setView(event.target.value)}
          ></input>
          <label htmlFor="view">photo</label>

          <div className="separation2"></div>
          <h3>What atmosphere do you seek?</h3>
          <input
            type="checkbox"
            value={idyllicStatus}
            onChange={(event) => setIdyllicStatus(event.target.value)}
          ></input>
          <label htmlFor="idyllicStatus">Family Moment</label>
          <input
            type="checkbox"
            value={idyllicStatus}
            onChange={(event) => setIdyllicStatus(event.target.value)}
          ></input>
          <label htmlFor="idyllicStatus">Life Party</label>

          <input
            type="checkbox"
            value={idyllicStatus}
            onChange={(event) => setIdyllicStatus(event.target.value)}
          ></input>
          <label htmlFor="idyllicStatus">Friends Trip</label>

          <div className="separation2"></div>
          <h3>How many people are accompanying you?</h3>
          <input
            type="text"
            value={numberOfPeople}
            onChange={(event) => setNumberOfPeople(event.target.value)}
          ></input>
          <div className="separation2"></div>
          <h3>Do you travel with your pets?</h3>
          <input
            type="text"
            value={petFriendly}
            onChange={(event) => setPetFriendly(event.target.value)}
          ></input>
          <div className="separation2"></div>
          <h3>How many bedrooms do you need?</h3>
          <input
            type="text"
            value={numberOFBedroom}
            onChange={(event) => setNumberOFBedroom(event.target.value)}
          ></input>
          <div className="separation2"></div>
          <h3>What services are essential for you?</h3>
          <div className="services">
            <div className="services_block">
              <div className="services_align">
                <input
                  type="checkbox"
                  id="services"
                  value={services}
                  onChange={(event) => setServices(event.target.value)}
                />
                <label htmlFor="services">Private Chef</label>

                <input
                  type="checkbox"
                  id="services"
                  value={services}
                  onChange={(event) => setServices(event.target.value)}
                />
                <label htmlFor="services">Chauffeur</label>

                <input
                  type="checkbox"
                  id="services"
                  value={services}
                  onChange={(event) => setServices(event.target.value)}
                />
                <label htmlFor="services">Gouvernante</label>
                <input
                  type="checkbox"
                  id="services"
                  value={services}
                  onChange={(event) => setServices(event.target.value)}
                />
                <label htmlFor="services">Private Chef</label>

                <input
                  type="checkbox"
                  id="services"
                  value={services}
                  onChange={(event) => setServices(event.target.value)}
                />
                <label htmlFor="services">Chauffeur</label>

                <input
                  type="checkbox"
                  id="services"
                  value={services}
                  onChange={(event) => setServices(event.target.value)}
                />
                <label htmlFor="services">Gouvernante</label>
                <input
                  type="checkbox"
                  id="services"
                  value={services}
                  onChange={(event) => setServices(event.target.value)}
                />
                <label htmlFor="services">Private Chef</label>

                <input
                  type="checkbox"
                  id="services"
                  value={services}
                  onChange={(event) => setServices(event.target.value)}
                />
                <label htmlFor="services">Chauffeur</label>

                <input
                  type="checkbox"
                  id="services"
                  value={services}
                  onChange={(event) => setServices(event.target.value)}
                />
                <label htmlFor="services">Gouvernante</label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default postFormQuestionnaire;
