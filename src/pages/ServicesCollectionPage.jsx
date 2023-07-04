import React from "react";
import NeedHelp from "../components/NeedHelp";
import TitlePage from "../components/TitlePage";
import "../App.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import service from "../service/service";
import serviceImg from "../assets/ChefService.jpg";

function ServicesCollectionPage() {
  const [services, setServices] = useState(null);

  //fetching the services
  const getAllServices = async () => {
    try {
      const myServices = await service.get("/service");
      setServices(myServices.data);
    } catch (error) {
      console.log(
        "there is an error when fetching all the services on ServicesCollectionPage"
      );
    }
  };

  //use effect to fire these functions once the page is loaded
  useEffect(() => {
    getAllServices();
  }, []);

  if (!services) {
    return <div>Please wait a moment</div>;
  }

  return (
    <>
      <div className="pageContainer">
        <TitlePage h1={"Our services"} span={"collection"}></TitlePage>
        <div className="servicesContainer">
          {services.ServiceDetail.map((service) => {
            return (
              <>
                <Link to={`/service/${service._id}`}>
                  <ServiceCard
                    nameService={service.title}
                    img={serviceImg}
                  ></ServiceCard>
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

export default ServicesCollectionPage;
