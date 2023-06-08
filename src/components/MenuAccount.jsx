import React from "react";
import "./MenuAccount.css";
import Questionnaire from "../components/QuestionnairesDisplay";
import User from "../components/UserDisplay";
import { useState } from "react";
function MenuAccount() {
  let [questionnaireShow, setQuestionnaireShow] = useState(true);
  let [userShow, setUserShow] = useState(false);

  function displayUser(event) {
    setUserShow(true);
    setQuestionnaireShow(false);
  }

  function displayQuestionnaire(event) {
    setUserShow(false);
    setQuestionnaireShow(true);
  }

  return (
    <>
      <div className="menu">
        <h1 className="welcome">Welcome back</h1>
        <button className="menuAccount">Favorite Villas</button>
        <button className="menuAccount">Your retreat</button>
        <button className="menuAccount" onClick={displayQuestionnaire}>
          Questionnaire
        </button>
        <button className="menuAccount" onClick={displayUser}>
          Profile
        </button>
        <button className="menuAccount">Email us</button>
      </div>
      {userShow && <User></User>}
      {questionnaireShow && <Questionnaire></Questionnaire>}
    </>
  );
}

export default MenuAccount;
