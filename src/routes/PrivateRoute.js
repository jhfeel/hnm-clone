import React from "react";
import ProductDetail from "../pages/ProductDetail";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);

  return authenticated ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
