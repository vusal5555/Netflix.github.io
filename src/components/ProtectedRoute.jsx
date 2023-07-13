import React from "react";
import { NetflixAuth } from "../context/NetflixAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = NetflixAuth();

  if (!user) {
    <Navigate to="/"></Navigate>;
  } else {
    return children;
  }
};

export default ProtectedRoute;
