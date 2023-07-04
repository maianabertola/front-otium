import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../service/service";
import "./ServicePage.css";
import imgService from "../assets/ChefService.jpg";

function ServicePage() {
  const [oneService, setOneService] = useState(null);
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

  //use effect to fire these functions once the page is loaded
  useEffect(() => {
    getOneService();
  }, []);

  if (!oneService) {
    return <div>Please wait a moment</div>;
  }
  console.log(oneService);
  return (
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
  );
}

export default ServicePage;
