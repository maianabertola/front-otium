import "./VillaPage.css";
import villaHero from "../assets/villaera.webp";
import Button from "../components/Button";
import VillaCardDetails from "../components/VillaCardDetails/VillaCardDetails";
import Box from "../components/Box";
import DistinctiveFeatures from "../components/DistinctiveFeatures";
import { useParams } from "react-router-dom";
import Grid from "./Grid";
import imagetest from "../assets/Positano.jpeg";
import NeedHelp from "../components/NeedHelp";
import { useQuery } from "react-query";
import { getOneVilla } from "../api/villa";

function VillaPage() {
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

  //if not, display a little message to avoid error message
  if (isLoading) {
    return <div>Please wait, content is loading</div>;
  }
  if (isError) {
    return <div>There is an error: {error} on the Villa Page</div>;
  }

  return (
    <>
      <section id="heroSection">
        <div className="heroVillaContainer">
          <img src={villaHero} />
          <Button
            cta={"More Photos"}
            width={3}
            backgroundColor={"grey"}
          ></Button>
        </div>
      </section>
      <section id="villaInfo">
        <div className="textVillaContainer" key={id}>
          <p className="sloganVilla">{villa.Villa.slogan}</p>
          <p className="descriptionVilla">{villa.Villa.description}</p>
          <h2>An Idyllic Villa for</h2>
          <div className="flexBoxVilla">
            <Box text={"Friends Trip"} status={villa.Villa.idylicStatus}></Box>
            <Box text={"Life Party"} status={villa.Villa.idylicStatus}></Box>
            <Box text={"Family Moment"} status={villa.Villa.idylicStatus}></Box>
          </div>
          <h2>Is Pet friendly?</h2>
          <div className="flexBoxVilla">
            <Box text={"Yes"} petFriendly={villa.Villa.petFriendly}></Box>
            <Box text={"No"} petFriendly={villa.Villa.petFriendly}></Box>
          </div>
          <h2>Distinctive Features</h2>
          {villa.Villa.distinctiveFeatures.map((feature, index) => {
            return (
              <DistinctiveFeatures
                feature={feature}
                index={index}
              ></DistinctiveFeatures>
            );
          })}
          <h2>Services included</h2>
          <div className="gridContainer">
            {villa.Villa.services.map((element, index) => {
              return (
                <>
                  <Grid cellContent={element.title} key={index}></Grid>
                </>
              );
            })}
          </div>
          <h2>Rooms & furnitures</h2>
          {villa.Villa.roomsDescriptions.map((oneRoom) => {
            return (
              <details key={oneRoom.room}>
                <summary>{oneRoom.room}</summary>
                <ol>
                  {oneRoom.description.map((element, index) => {
                    return <li key={index}>{element}</li>;
                  })}
                </ol>
              </details>
            );
          })}
        </div>
        <section id="galleryPhotos">
          <div className="greenBackgroundServicesVilla">
            <p className="textGallery" style={{ top: 3 + "%", left: 45 + "%" }}>
              Picture
            </p>
            <div className="gallery">
              <div className="imageGalleryContainer1">
                <img src={imagetest}></img>
              </div>
              <p
                className="textGallery"
                style={{ top: 20 + "%", left: 14 + "%" }}
              >
                your
              </p>
              <div className="imageGalleryContainer2">
                <img src={imagetest}></img>
              </div>
              <p
                className="textGallery"
                style={{ top: 30 + "%", right: 1 + "%" }}
              >
                future
              </p>
              <div className="imageGalleryContainer3">
                <img src={imagetest}></img>
              </div>
              <p
                className="textGallery"
                style={{ top: 47 + "%", left: 8 + "%" }}
              >
                vacations
              </p>
              <div className="imageGalleryContainer4">
                <img src={imagetest}></img>
              </div>
              <div className="imageGalleryContainer5">
                <img src={imagetest}></img>
              </div>
            </div>
            <div className="flexCenter">
              <Button
                backgroundColor={"black"}
                cta={"Explore all the photos"}
              ></Button>
            </div>
          </div>
        </section>
        <NeedHelp></NeedHelp>
        <VillaCardDetails villa={villa}></VillaCardDetails>
      </section>
    </>
  );
}

export default VillaPage;
