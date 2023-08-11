import React, { useContext, useState } from "react";
import "./MenuAccount.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button";
import UserDisplay from "../components/UserDisplay";

function MenuAccount() {
  const { user, logout, isLoading } = useContext(AuthContext);
  const [displayQuestionnaire, setDisplayQuestionnaire] = useState(null);
  const [displayUser, setDisplayUser] = useState(null);

  const navigate = useNavigate();

  //toLogOut call the logout function from AuthContext to erase the token
  const toLogOut = async () => {
    await logout();
    navigate("/");
  };

  function navigateToAccountTripBooked(event) {
    event.preventDefault();
    navigate("/account-trips");
  }

  //emailing the team if issue with the log in
  const emailTo = (event) => {
    event.preventDefault();
    window.location.href =
      "mailto:bonjour@we-are-ensemble.com?subject=" +
      encodeURIComponent("Questions & answers") +
      "&body=" +
      encodeURIComponent("Dear Otium Team,");
  };

  if (!user) {
    return <div>Please wait a moment</div>;
  }

  console.log("USER MENUACCOUNT", user);

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
            <Link onClick={toLogOut} className="logOut">
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
