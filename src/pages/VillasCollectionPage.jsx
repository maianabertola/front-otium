import React from "react";
import { useState, useEffect } from "react";
import "../pages/Homepage.css";
import service from "../service/service";
import { Link } from "react-router-dom";
import VillaCard from "../components/VillaCard";
import NeedHelp from "../components/NeedHelp";
import TitlePage from "../components/TitlePage";

function VillasCollectionPage() {
  const [villas, setVillas] = useState(null);

  //fetch data from the villa
  const getAllVillas = async () => {
    try {
      console.log("getting into getAllVillas");
      const myVillas = await service.get("/villa");
      setVillas(myVillas.data);
      console.log("HERE", myVillas);
    } catch (error) {
      console.log(
        "there is an error when fetching all the villas from db on the villas collection"
      );
    }
  };

  //use effect to fire these functions once the page is loaded
  useEffect(() => {
    getAllVillas();
  }, []);

  if (!villas) {
    return <div>Please wait a moment</div>;
  }

  return (
    <>
      <div className="pageContainer">
        <TitlePage h1={"Our villas"} span={"collection"}></TitlePage>
        <div className="collectionContainer">
          {villas.Villa.map((villa) => {
            return (
              <>
                <Link to={`/villa/${villa._id}`} className="linkCard">
                  <VillaCard
                    key={villa._id}
                    region={villa.region}
                    name={villa.name}
                    slogan={villa.slogan}
                  ></VillaCard>
                </Link>
              </>
            );
          })}
        </div>
        <NeedHelp></NeedHelp>
      </div>
    </>
  );
}

export default VillasCollectionPage;
