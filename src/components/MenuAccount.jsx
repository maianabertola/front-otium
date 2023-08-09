import React, { useContext } from "react";
import "./MenuAccount.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button";
import UserDisplay from "../components/UserDisplay";

function MenuAccount() {
  let [questionnaireShow, setQuestionnaireShow] = useState(true);
  let [userShow, setUserShow] = useState(false);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setUser(null);
  }

  function displayUser() {
    setUserShow(true);
    setQuestionnaireShow(false);
  }

  function displayQuestionnaire() {
    setUserShow(false);
    setQuestionnaireShow(true);
  }

  function navigateToAccountTripBooked(event) {
    event.preventDefault();
    navigate("/account-trips");
    window.location.href =
      "mailto:bonjour@we-are-ensemble.com?subject=" +
      encodeURIComponent("Questions & answers") +
      "&body=" +
      encodeURIComponent("Dear Otium Team,");
  }

  const emailTo = (event) => {
    event.preventDefault();
  };

  if (!user) {
    return <div>Please wait a moment</div>;
  }
  return (
    <>
      <div className="flexRowAccount">
        <div className="menuContainer">
          <h1 style={{ padding: 0 }}>Welcome back</h1>
          <span className="spanNameUser">{user.surname},</span>
          <div className="menuAccount">
            <Link onClick={navigateToAccountTripBooked} className="linkAccount">
              Your retreats
            </Link>
            <div className="blackSeparation"></div>
            <Link onClick={displayQuestionnaire} className="linkAccount">
              Questionnaire
            </Link>
            <div className="blackSeparation"></div>
            <Link onClick={displayUser} className="linkAccount">
              Profile
            </Link>
            <div className="blackSeparation"></div>

            <div className="contactWrapper">
              <h5>Need Help?</h5>
              <Button
                cta={"Email us"}
                backgroundColor={"black"}
                onClick={emailTo}
              ></Button>
            </div>
            <Link onClick={logout} className="logOut">
              Log Out
            </Link>
          </div>
        </div>
        <div>
          <UserDisplay></UserDisplay>
        </div>
      </div>
    </>
  );
}

export default MenuAccount;
