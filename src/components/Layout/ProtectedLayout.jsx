import React from "react";
import ProtectedRoutes from "../../pages/ProtectedRoutes";
import Layout from "./Layout";

function ProtectedLayout({ children }) {
  return (
    <>
      <ProtectedRoutes>
        <Layout>{children}</Layout>
      </ProtectedRoutes>
    </>
  );
}

export default ProtectedLayout;
