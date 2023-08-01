import React from "react";
import TitleSection from "./TitleSection";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function NeedHelp() {
  const navigate = useNavigate();

  const navToQuestionnaire = (event) => {
    event.preventDefault();
    navigate("questionnaire");
  };

  const emailTo = (event) => {
    event.preventDefault();
    window.location.href =
      "mailto:bonjour@we-are-ensemble.com?subject=" +
      encodeURIComponent("Questions & answers") +
      "&body=" +
      encodeURIComponent("Dear Otium Team,");
  };

  return (
    <>
      <TitleSection
        title={"Do you need help in your research?"}
        paragraph={
          "You have two options to find the villa of your dreams at Otium. Either fill out our interactive questionnaire or engage with our team of consultants for personalized assistance. Your perfect Otium experience awaits."
        }
      ></TitleSection>
      <div className="flexRow">
        <Button
          cta={"Find Your Perfect Retreat"}
          backgroundColor={"black"}
          onClick={navToQuestionnaire}
        ></Button>
        <Button
          cta={"Contact the Otium Experts"}
          backgroundColor={"white"}
          onClick={emailTo}
        ></Button>
      </div>
    </>
  );
}

export default NeedHelp;
