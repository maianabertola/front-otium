import React from "react";
import "../pages/Homepage.css";
import { Link } from "react-router-dom";
import VillaCard from "../components/Card/VillaCard";
import NeedHelp from "../components/NeedHelp";
import TitlePage from "../components/TitlePage";
import { useQuery } from "react-query";
import { getAllVillas } from "../api/villa";
import LoadingSpinner from "../components/LoadingSpinner";

function VillasCollectionPage() {
  const {
    isLoading,
    isError,
    error,
    data: villas,
  } = useQuery({ queryKey: ["villas"], queryFn: getAllVillas });

  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  if (isError) {
    return <div>There's an error {error}</div>;
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
                    image={villa.previewPhoto}
                    key={villa._id}
                    region={villa.region}
                    name={villa.name}
                    tagline={villa.tagline}
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
