import React from "react";
import { useNavigate } from "react-router-dom";
import "./AccountCreatedPage.css";
import TitlePage from "../components/TitlePage";
import Button from "../components/Button";

function AccountCreatedPage() {
  const navigate = useNavigate();
  const navToVillas = () => {
    navigate("/villas-collection");
  };
  return (
    <>
      <div className="pageContainerConfirmation">
        <div className="confirmationWrapper">
          <TitlePage
            h1={"Your account has been"}
            span={"successfully created"}
            center={"true"}
          ></TitlePage>
          <div className="confirmationTextWrapper">
            <p>
              We are delighted to have you as a member of our esteemed
              community.
              <br />
              Let us curate unforgettable moments and tailor-made escapes that
              will surpass your expectations.
            </p>
          </div>
        </div>
        <Button
          cta={"Book your first Otium villa"}
          onClick={navToVillas}
          backgroundColor={"black"}
        ></Button>
      </div>
    </>
  );
}

export default AccountCreatedPage;
