import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layoutContainer">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
