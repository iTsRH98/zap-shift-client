import React from "react";
import useUserRole from "../../../hooks/useUserRole/useUserRole";
import DashboardLoading from "../../shared/DashboardLoading/DashboardLoading";
import Forbidden from "../../Forbidden/Forbidden";
import UserDashboard from "./UserDashboard";
import RiderDashboard from "./RiderDashboard";
import AdminDashboard from "./AdminDashboard";

const DashboardHome = () => {
  const { role, roleLoading } = useUserRole();

  if (roleLoading) {
    return <DashboardLoading></DashboardLoading>;
  }

  if (role === "user") {
    return <UserDashboard></UserDashboard>;
  } else if (role === "rider") {
    return <RiderDashboard></RiderDashboard>;
  } else if (role === "admin") {
    return <AdminDashboard></AdminDashboard>;
  } else {
    return <Forbidden></Forbidden>;
  }
};

export default DashboardHome;
