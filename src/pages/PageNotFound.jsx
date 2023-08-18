import React from "react";
import TitlePage from "../components/TitlePage";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const navToPreviousPage = () => {
    navigate("/");
  };
  return (
    <div className="pageContainer">
      <div className="flexColumnCenter">
        <TitlePage
          h1={"The page you are looking for"}
          span={"does not exist"}
          center={"true"}
        ></TitlePage>
        <Button
          cta={"Go to the previous page"}
          backgroundColor={"black"}
          onClick={navToPreviousPage}
        ></Button>
      </div>
    </div>
  );
}

export default PageNotFound;
