import React, { useContext, useState } from "react";
import "./MenuAccount.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Button from "../Button";
import UserDisplay from "./UserDisplay";
import RetreatsDisplay from "./RetreatsDisplay";
import QuestionnaireDisplay from "./QuestionnairesDisplay";
import LoadingSpinner from "../LoadingSpinner";

function MenuAccount() {
  const { user, logout, isLoading } = useContext(AuthContext);
  const [displayUser, setDisplayUser] = useState(true);
  const [displayQuestionnaire, setDisplayQuestionnaire] = useState(false);
  const [displayRetreats, setDisplayRetreats] = useState(false);

  const navigate = useNavigate();

  //toLogOut call the logout function from AuthContext to erase the token
  const toLogOut = async () => {
    await logout();
    navigate("/");
  };

  //emailing the team if issue with the log in
  const emailTo = (event) => {
    event.preventDefault();
    window.location.href =
      "mailto:bonjour@we-are-ensemble.com?subject=" +
      encodeURIComponent("Questions & answers") +
      "&body=" +
      encodeURIComponent("Dear Otium Team,");
  };

  const switchtoDisplayRetreat = (event) => {
    event.preventDefault();
    setDisplayUser(false);
    setDisplayQuestionnaire(false);
    setDisplayRetreats(true);
  };

  const switchtoDisplayQuestionnaire = (event) => {
    event.preventDefault();
    setDisplayUser(false);
    setDisplayRetreats(false);
    setDisplayQuestionnaire(true);
  };

  const switchToDisplayUser = (event) => {
    event.preventDefault();
    setDisplayUser(true);
    setDisplayRetreats(false);
    setDisplayQuestionnaire(false);
  };

  if (!user) {
    <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      <div className="flexRowAccount">
        <div className="menuContainer">
          <h1 style={{ padding: 0 }}>Welcome back</h1>
          <span className="spanNameUser">{user.surname},</span>
          <div className="menuAccount">
            <Link onClick={switchtoDisplayRetreat} className="linkAccount">
              Your retreats
            </Link>
            <div className="blackSeparation"></div>
            <Link
              onClick={switchtoDisplayQuestionnaire}
              className="linkAccount"
            >
              Questionnaire
            </Link>
            <div className="blackSeparation"></div>
            <Link onClick={switchToDisplayUser} className="linkAccount">
              Profile
            </Link>
            <div className="blackSeparation"></div>

            <div className="contactWrapper">
              <h5 style={{ paddingBottom: 2 + "vh" }}>Need Help?</h5>
              <Button
                cta={"Email us"}
                backgroundColor={"smallBlackButton"}
                onClick={emailTo}
              ></Button>
            </div>
            <Link onClick={toLogOut} className="logOut">
              Log Out
            </Link>
          </div>
        </div>
        <div>
          {displayUser && <UserDisplay></UserDisplay>}
          {displayRetreats && <RetreatsDisplay></RetreatsDisplay>}
          {displayQuestionnaire && (
            <QuestionnaireDisplay></QuestionnaireDisplay>
          )}
        </div>
      </div>
    </>
  );
}

export default MenuAccount;
