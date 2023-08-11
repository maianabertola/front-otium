import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../components/Layout/Navbar";

function ProtectedNavRoutes() {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    return <Navigate to={"need-login"} />;
  }

  if (isLoggedIn) {
    return (
      <>
        <NavBar />
        <Outlet />;
      </>
    );
  }
  return <div>ProtectedRoutes</div>;
}

export default ProtectedNavRoutes;
