import React from "react";
import useAuth from "../../hooks/useAuth/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "../../pages/shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return (
      <Navigate state={{ from: location.pathname }} to={`/login`}></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
