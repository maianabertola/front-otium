import React from "react";
import { useParams } from "react-router-dom";
import "./ServicePage.css";
import imgService from "../assets/ChefService.jpg";
import TitlePage from "../components/TitlePage";
import { Link } from "react-router-dom";
import VillaCard from "../components/VillaCard/VillaCard";
import { getAllVillas } from "../api/villa";
import { useQuery } from "react-query";
import { getOneService } from "../api/services";

function ServicePage() {
  const { id } = useParams();

  //loading one service
  const {
    isLoading: isLoadingService,
    isError: isErrorService,
    error: errorService,
    data: oneService,
  } = useQuery({
    queryKey: ["services", id],
    queryFn: () => getOneService(id),
  });

  //loading villas collection
  const {
    isLoading: isLoadingVillas,
    isError: isErrorVillas,
    error: errorVillas,
    data: villas,
  } = useQuery({ queryKey: ["villas"], queryFn: getAllVillas });

  if (isLoadingService || isLoadingVillas) {
    return <div>Please wait a moment</div>;
  }

  if (isErrorVillas || isErrorService) {
    return (
      <div>
        There is an error {errorVillas} || {errorService}
      </div>
    );
  }

  // filter the villas if they include the service displayed
  let villasToDisplay = villas.Villa.filter((villa) => {
    return villa.services.includes(oneService.Service._id);
  });

  return (
    <>
      <div className="pageContainer flexrowService">
        <div className="imgServiceContainer">
          <img src={imgService}></img>
        </div>
        <div className="greenBackgroundService">
          <div className="textServiceContainer">
            <h1>{oneService.Service.title}</h1>
            <h2>{oneService.Service.slogan}</h2>
            <p>{oneService.Service.description}</p>
          </div>
        </div>
      </div>
      <TitlePage h1={"This service is"} span={"available in"}></TitlePage>
      <div className="collectionContainerService">
        {villasToDisplay.map((villa) => {
          return (
            <>
              <Link to={`/villa/${villa._id}`}>
                <VillaCard
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
    </>
  );
}

export default ServicePage;
