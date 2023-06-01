import React from "react";
import TitleSection from "./TitleSection";
import Button from "./Button";

function NeedHelp() {
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
        ></Button>
        <Button
          cta={"Contact the Otium Experts"}
          backgroundColor={"white"}
        ></Button>
      </div>
    </>
  );
}

export default NeedHelp;
