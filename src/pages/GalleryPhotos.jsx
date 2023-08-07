import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { getOneVilla } from "../api/villa";
import "./GalleryPhotos.css";
import { Link } from "react-router-dom";

function GalleryPhotos() {
  const { id } = useParams();

  //fetching the data of one villa by ID
  const {
    isLoading,
    isError,
    error,
    data: villa,
  } = useQuery({
    queryKey: ["villas", parseInt(id)],
    queryFn: () => getOneVilla(id),
  });

  //map the gallery photos
  const images = villa.Villa.galeryPhoto.map((number) => ({
    src: number,
  }));
  return (
    <>
      <div className="pageContainer">
        <div className="titleWrapper">
          <h1>
            {villa.Villa.name} — {villa.Villa.region}
          </h1>
          <div>
            <Link to={-1}>Back</Link>
          </div>
        </div>

        <div className="flexRow">
          <Carousel
            images={images}
            style={{ height: 500, width: 600 }}
            hasMediaButton={false}
            shouldLazyLoad={true}
            objectFit="contain"
          ></Carousel>
        </div>
      </div>
    </>
  );
}

export default GalleryPhotos;
