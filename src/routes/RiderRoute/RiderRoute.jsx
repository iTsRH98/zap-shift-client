import React from "react";
import Loading from "../../pages/shared/Loading/Loading";
import useAuth from "../../hooks/useAuth/useAuth";
import useUserRole from "../../hooks/useUserRole/useUserRole";
import { Navigate } from "react-router";

const RiderRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();
  if (loading || roleLoading) {
    return <Loading></Loading>;
  }
  if (!user || role !== "rider") {
    return (
      <Navigate
        state={{ from: location.pathname }}
        to={`/forbidden`}
      ></Navigate>
    );
  }
  return children;
};

export default RiderRoute;
