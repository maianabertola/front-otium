import React from "react";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./QuestionnairesDisplay.css";

const collectionQuestionnaire = "http://localhost:3000/questionnaire";

function QuestionnairesDisplay() {
  const [questionnaire, setQuestionnaire] = useState([]);
  const { user } = useContext(AuthContext);

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
  // let questionnaireToFilter = questionnaire.filter((question) => question.includes(user._id))
  // console.log(questionnaireToFilter)
  let questionnaireToDisplay = {};
  if (!questionnaire.length) {
    return <div>wait</div>;
  }
  if (!user) {
    return <div>wait</div>;
  }

  // console.log("on dispay les questionnaires de l'user", user._id);

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
            return <p>{question.name} test</p>;
          })
        }
    </div>
    </>
  );
}

export default QuestionnairesDisplay;
