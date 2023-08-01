import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../service/service";
import "./ServicePage.css";
import imgService from "../assets/ChefService.jpg";
import TitlePage from "../components/TitlePage";
import { Link } from "react-router-dom";
import VillaCard from "../components/VillaCard";

function ServicePage() {
  const [oneService, setOneService] = useState(null);
  const [villas, setVillas] = useState(null);
  const { id } = useParams();

  //fetching the services
  const getOneService = async () => {
    try {
      const myService = await service.get(`/service/${id}`);
      setOneService(myService.data);
    } catch (error) {
      console.log("there is an error when fetching one service on ServicePage");
    }
  };

  //fetch data from the villa
  const getAllVillas = async () => {
    try {
      const myVillas = await service.get("/villa");
      setVillas(myVillas.data);
    } catch (error) {
      console.log(
        "there is an error when fetching all the villas from db on the homepage"
      );
    }
  };

  //use effect to fire these functions once the page is loaded
  useEffect(() => {
    getOneService(), getAllVillas();
  }, []);

  if (!oneService || !villas) {
    return <div>Please wait a moment</div>;
  }

  //filter the villas if they include the service displayed
  let villasToDisplay = villas.Villa.filter((villa) => {
    // console.log(villa.services);
    return villa.services.includes(oneService.Service._id);
    // console.log(oneService.Service._id);
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
