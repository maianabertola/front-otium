import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    return <Navigate to={"/auth/signup"} />;
  }

  if (isLoggedIn) {
    return <Outlet />;
  }
  return <div>ProtectedRoutes</div>;
}

export default ProtectedRoutes;
