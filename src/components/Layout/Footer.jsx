import React from "react";
import "./Footer.css";
import BlackBar from "../BlackBar";
import BlackBarHorizontal from "../BlackBarHorizontal";
import logo from "../../assets/OtiumLogo.png";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { Parallax } from "react-scroll-parallax";

export default function Footer() {
  const emailTo = (event) => {
    event.preventDefault();
    window.location.href =
      "mailto:bonjour@we-are-ensemble.com?subject=" +
      encodeURIComponent("Questions & answers") +
      "&body=" +
      encodeURIComponent("Dear Otium Team,");
  };
  return (
    <>
      <div className="gridFooter">
        <div></div>
        <Parallax scaleY={[0, 1]} shouldAlwaysCompleteAnimation={true}>
          <BlackBar height={50} position={"bottom"}></BlackBar>
        </Parallax>
        <div></div>
      </div>
      <Parallax scaleX={[0, 1]} shouldAlwaysCompleteAnimation={true} speed={2}>
        <BlackBarHorizontal></BlackBarHorizontal>
      </Parallax>
      <footer id="footer">
        <div className="leftFooter">
          <div className="logoFooterContainer">
            <img src={logo} alt="logo otium villa" />
          </div>
          <div className="columnFooter">
            <p className="textContainer" style={{ textAlign: "left" }}>
              Otium: Latin for leisure, a time of blissful repose, where one
              finds fulfillment through relaxation, contemplation, and
              indulgence in pleasurable pursuits
            </p>
            <div className="flexRowFooter">
              <SocialIcon
                url="https://www.facebook.com/Otium"
                bgColor="grey"
                style={{
                  height: 32,
                  width: 32,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              ></SocialIcon>
              <SocialIcon
                url="https://www.instagram.com/Otium"
                bgColor="grey"
                style={{
                  height: 32,
                  width: 32,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              ></SocialIcon>
              <SocialIcon
                url="https://www.pinterest.com/Otium"
                bgColor="grey"
                style={{
                  height: 32,
                  width: 32,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              ></SocialIcon>
              <SocialIcon
                url="https://www.linkedin.com/in/maianabertola"
                bgColor="grey"
                style={{
                  height: 32,
                  width: 32,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              ></SocialIcon>
              <SocialIcon
                url="https://www.github.com/maianabertola"
                bgColor="grey"
                style={{
                  height: 32,
                  width: 32,
                  marginRight: 10,
                  cursor: "pointer",
                }}
              ></SocialIcon>
            </div>
          </div>
        </div>

        <div className="rightFooter">
          <ol>
            <h3>Our experiences</h3>
            <Link to={"/villas-collection"}>
              <li className="footerList">All our villas</li>
            </Link>
            <Link to={"services-collection"}>
              <li className="footerList">The services</li>
            </Link>
            <Link to="/questionnaire">
              <li className="footerList">Find your ideal villas</li>
            </Link>
          </ol>
          <ol>
            <h3>Discover more</h3>
            <Link to={"about"}>
              <li className="footerList">About Otium</li>
            </Link>
            <Link onClick={emailTo}>
              <li className="footerList">Contact</li>
            </Link>
            <Link>
              <li className="footerList">Terms and privacy</li>
            </Link>
          </ol>
        </div>
      </footer>
    </>
  );
}
