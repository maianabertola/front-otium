import React from "react";
import NeedHelp from "../components/NeedHelp";
import TitlePage from "../components/TitlePage";
import { Link } from "react-router-dom";
import ServiceCard from "../components/Card/ServiceCard";
import { useQuery } from "react-query";
import { getAllServices } from "../api/services";

function ServicesCollectionPage() {
  const {
    isLoading,
    isError,
    error,
    data: services,
  } = useQuery({ querykey: ["services"], queryFn: getAllServices });

  if (isLoading) {
    return <div>Please wait a moment</div>;
  }

  if (isError) {
    return <div>There is an error {error}</div>;
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
                    img={service.imageCover}
                    key={service.title}
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
