import React from "react";
import "./QuestionnaireCreated.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import VillaCard from "../components/VillaCard";
import Navbar from "../components/Navbar";

const collectionVillas = "http://localhost:3000/villa";

function QuestionnaireCreated() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("");
  };
  const [villas, setVillas] = useState([]);

  async function fetchVillas() {
    try {
      const response = await axios.get(collectionVillas);
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
    return <div>wait</div>;
  }

  return (
    <>
      <Navbar></Navbar>
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
