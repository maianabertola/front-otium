import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes() {
  const { isLoggedIn, isLoading, setNeedLogin } = useContext(AuthContext);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn) {
    setNeedLogin(true);
    return <Navigate to={"auth/login"} />;
  }

  if (isLoggedIn) {
    return (
      <>
        <Outlet />;
      </>
    );
  }
  return <div>ProtectedRoutes</div>;
}

export default ProtectedRoutes;
