import React from "react";
import Navbar from "../components/Navbar";
import Menu from "../components/MenuAccount";
import "./LoggedIn.css";

function LoggedIn() {

  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className="bodi">
        <Menu></Menu>
      </div>
    </>
  );
}

export default LoggedIn;
