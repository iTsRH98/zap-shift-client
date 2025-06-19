import React from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50">
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="flex-1">
        <Outlet></Outlet>
      </main>
      <footer className="h-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
