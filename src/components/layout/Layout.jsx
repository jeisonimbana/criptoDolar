import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { getListCriptosAsync } from "../../store/criptos/criptoAsync";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Layout = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getListCriptosAsync());
  }, []);
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
