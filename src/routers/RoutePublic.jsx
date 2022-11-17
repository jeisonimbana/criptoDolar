import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/Login";

const RoutePublic = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Navigate to="login" />} />
    </Routes>
  );
};

export default RoutePublic;
