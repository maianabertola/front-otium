import React from "react";
import "./VillaCardDetails.css";
import peopleIcon from "../assets/peopleIcon.png";
import squareMeterIcon from "../assets/squaremeterIcon.png";
import VillaCardDetailsCells from "./VillaCardDetailsCells";
import bedroomIcon from "../assets/iconebed.png";
import bathIcon from "../assets/iconebathroom.png";
import moutainviewIcon from "../assets/iconeview.png";
import Button from "./Button";

export default function VillaCardDetails() {
  return (
    <>
      <div className="villaCardDetails">
        <table>
          <thead style={{ textAlign: "center" }}>
            <tr>
              <th colSpan={2}>
                <h1>Villa Damdam</h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}>
                <h2 style={{ textAlign: "center" }}>
                  Costa Almafitana - Italy
                </h2>
              </td>
            </tr>
            <tr className="flexRowTable">
              <VillaCardDetailsCells
                info={"8 people"}
                icone={peopleIcon}
              ></VillaCardDetailsCells>

              <VillaCardDetailsCells
                info={"650m2"}
                icone={squareMeterIcon}
              ></VillaCardDetailsCells>
            </tr>
            <tr className="flexRowTable">
              <VillaCardDetailsCells
                info={"10 bedrooms"}
                icone={bedroomIcon}
              ></VillaCardDetailsCells>
              <VillaCardDetailsCells
                info={"12 bathrooms"}
                icone={bathIcon}
              ></VillaCardDetailsCells>
            </tr>
            <tr className="flexRowTable">
              <VillaCardDetailsCells
                info={"Mountain"}
                icone={moutainviewIcon}
              ></VillaCardDetailsCells>
              <VillaCardDetailsCells
                info={"3450€/week"}
                text={"From"}
              ></VillaCardDetailsCells>
            </tr>
            <tr colSpan={2} className="flexVerticalCTA">
              <div></div>
              <Button
                backgroundColor={"white"}
                cta={"Save it in your wishlist"}
              ></Button>
              <Button
                backgroundColor={"black"}
                cta={"Book your stay now"}
              ></Button>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
