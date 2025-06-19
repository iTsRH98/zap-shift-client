import React from "react";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
