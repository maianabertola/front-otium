import React from "react";
import "./QuestionnaireCreated.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import service from "../service/service";
import VillaCard from "../components/Card/VillaCard";
import LoadingSpinner from "../components/LoadingSpinner";

function QuestionnaireCreated() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("");
  };
  const [villas, setVillas] = useState([]);

  async function fetchVillas() {
    try {
      const response = await service.get("/villa");
      setVillas(response.data.Villa);
    } catch (e) {
      console.log(e);
    }
  }

  console.log("les villas sont:", villas);
  useEffect(() => {
    fetchVillas();
  }, []);

  let villaToDisplay = {};

  if (!villas.length) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <>
      <div className="description">
        <h1>Your questionnaire has been successfully created</h1>
        <p>
          We are delighted to have you as a member of our esteemed community.
          Let us curate unforgettable moments and tailor-made escapes that will
          surpass your expectations.
        </p>
      </div>
      {
        <div className="mapping">
          {
            (villaToDisplay = villas.map((villa) => {
              return <VillaCard></VillaCard>;
            }))
          }
        </div>
      }
    </>
  );
}

export default QuestionnaireCreated;
