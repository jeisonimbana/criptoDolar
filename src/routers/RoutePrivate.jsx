import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CriptoList from "../components/criptoList/CriptoList";
import Home from "../components/homeScreen/Home";
import Layout from "../components/layout/Layout";

const RoutePrivate = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<CriptoList />} />
      </Route>
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default RoutePrivate;
