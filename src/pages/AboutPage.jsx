import React from "react";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="pageContainer">
      <div className="flexRowAbout">
        <div className="containerPictureVertical">
          <img src="https://res.cloudinary.com/dspbzkolr/image/upload/v1691050730/OTIUM/Villas/VillaPaula.jpg"></img>
        </div>
        <div className="textAbout">
          <h1>About this project</h1>
          <hr></hr>
          <p>
            I developed this project as a culminating assignment during my
            IronHack bootcamp. It served as a comprehensive demonstration to the
            evaluators, proving that we, the students, had grasped the course
            content and could proficiently construct both a front-end and
            back-end from scratch.
          </p>
          <ol className="olAbout">
            <p style={{ fontFamily: "Playfair Semibold" }}>Things to know</p>
            <li>
              It is not 100% finished,{" "}
              <a
                className="linkText"
                href="https://github.com/maianabertola/front-otium"
                target="blank"
              >
                you can check my ToDo List here on git
              </a>
            </li>
            <li>
              My main inspiration was the{" "}
              <a
                href="https://www.lecollectionist.com/"
                target="blank"
                className="linkText"
              >
                Collectionist{" "}
              </a>
              and{" "}
              <a
                href="https://www.iconic.house/"
                target="blank"
                className="linkText"
              >
                Iconic Houses
              </a>
            </li>
            <li>
              I wanted the website to be both aesthetically pleasing and
              impactful. So, I conceptualized a fictitious brand named "Otium",
              derived from the Latin word for "Leasure", "Peace".
            </li>
            <li>
              I designed its brand identity, established a distinct tone of
              voice, and envisioned a collection of imaginary villas.
            </li>
            <li>
              You can find the design on{" "}
              <a
                href="https://www.figma.com/file/zc46H8VXrLGXUpW4LPHpvP/Final-Project-%2F-OTIUM?type=design&node-id=0%3A1&mode=design&t=n8iLdY5iVKmzyMmr-1"
                target="blank"
                className="linkText"
              >
                my Figma
              </a>
            </li>
            <li>
              All the texts were made via Chat GPT according to the tone of
              voice established
            </li>
            <li>
              The pictures used for the villas belong to The Collectionist
              website and the Collectionnist Instagram
            </li>
            <li>
              The pictures used to display the services are from{" "}
              <a
                href="https://app.deathtothestockphoto.com/"
                target="blank"
                className="linkText"
              >
                Death To Stock
              </a>
            </li>
            <li>
              The videos are from{" "}
              <a
                href="https://www.pexels.com/@maiana-bertola-674999568/collections/"
                target="blank"
                className="linkText"
              >
                Pexels
              </a>
            </li>
            <li>
              If you want to know more about me you can check{" "}
              <a
                href="https://www.we-are-ensemble.com"
                target="blank"
                className="linkText"
              >
                my portfolio
              </a>{" "}
              and{" "}
              <a
                href="https://www.linkedin.com/in/maianabertola"
                target="blank"
                className="linkText"
              >
                my LinkedIn
              </a>
            </li>
          </ol>

          <div className="callOutAbout">
            <h5>If you want to fully enjoy the website</h5>
            <hr></hr>
            <p
              style={{
                paddingLeft: 0 + "vh",
                paddingRight: 2 + "vw",
                paddingTop: 1 + "vh",
                paddingBottom: 1 + "vh",
                fontSize: 1 + "rem",
              }}
            >
              Some pages are protected. If you don't want to create an account,
              you can use the following credentials:
            </p>
            <p
              style={{
                paddingLeft: 0 + "vh",
                paddingRight: 2 + "vw",
                paddingTop: 1 + "vh",
                paddingBottom: 1 + "vh",
                fontSize: 1 + "rem",
              }}
            >
              Login: maianab@gmail.com Password: otium
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
