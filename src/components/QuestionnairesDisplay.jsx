import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import service from "../service/service";
import "./QuestionnairesDisplay.css";
import Navbar from "./Navbar";

const collectionQuestionnaire = "/questionnaire";

function QuestionnairesDisplay() {
  const navigate = useNavigate();
  const [questionnaire, setQuestionnaire] = useState([]);
  const { user } = useContext(AuthContext);
  const param = useParams();

  async function deleteUser(event, idEnquestion) {
    try {
      const deleteQuestionnaire = await service.delete(
        `/questionnaire/${idEnquestion}`
      );
      fetchQuestionnaire();
    } catch (e) {
      console.log(e);
    }
  }

  async function fetchQuestionnaire() {
    try {
      const response = await service.get(collectionQuestionnaire);
      setQuestionnaire(response.data.findAllQuestionnaire);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchQuestionnaire();
  }, []);
  if (!questionnaire.length) {
    return <div>wait</div>;
  }
  if (!user) {
    return <div>wait</div>;
  }

  async function editUser(event, idEnquestion) {
    navigate(`/questionnaire/${idEnquestion}`);
  }

  let currentUsertQuestionnaire = [];

  questionnaire.map((question) => {
    if (question.userId === user._id) {
      currentUsertQuestionnaire.push(question);
    }
  });

  return (
    <>
      <div className="questionnaireDisplay">
        {currentUsertQuestionnaire.map((question) => {
          return (
            <>
              <div key={param.id} className="informations">
                <p>{question.name}</p>
                <p>Country : {question.pickedCountry}</p>
                <p>View : {question.pickedView}</p>
                <p>Idyllic Status : {question.pickedIdyllicStatus}</p>
                <p>Peoples : {question.numberOfPeople}</p>
                <p>Pets : {question.petFriendly}</p>
                <p>Bedrooms : {question.numberOfBedroom}</p>
                <p>Services : {question.pickedServices}</p>
              </div>
              <div className="buttons">
                <button onClick={(event) => editUser(event, question._id)}>
                  edit
                </button>
                <button onClick={(event) => deleteUser(event, question._id)}>
                  delete
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default QuestionnairesDisplay;
