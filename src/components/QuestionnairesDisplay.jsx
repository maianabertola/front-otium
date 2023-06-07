import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import service from "../service/service";
import "./QuestionnairesDisplay.css";
import Navbar from "./Navbar";

const collectionQuestionnaire = "http://localhost:3000/questionnaire";

function QuestionnairesDisplay() {
  const navigate = useNavigate();
  const [questionnaire, setQuestionnaire] = useState([]);
  const { user } = useContext(AuthContext);
  const param = useParams();

  async function fetchQuestionnaire() {
    try {
      const response = await axios.get(collectionQuestionnaire);
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
  console.log(questionnaire[0]._id);

  async function editUser(event, idEnquestion) {
    event.preventDefault();
    navigate(`/questionnaire/${idEnquestion}`);
  }

  let currentUsertQuestionnaire = [];

  questionnaire.map((question) => {
    if (question.userId === user._id) {
      currentUsertQuestionnaire.push(question);
    }
  });
  console.log("les questionnaires sont:", currentUsertQuestionnaire);
  return (
    <>
      <div className="questionnaireDisplay">
        {currentUsertQuestionnaire.map((question) => {
          return (
            <>
            <Navbar></Navbar>
              <div key={param.id}></div>
              <p>{question.name} test</p>
              <p>{question._id} test</p>
              <button onClick={(event) => editUser(event, question._id)}>
                edit
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default QuestionnairesDisplay;
