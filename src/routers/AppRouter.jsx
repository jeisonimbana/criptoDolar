import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes  } from "react-router-dom";
import RoutePrivate from "./RoutePrivate";
import RoutePublic from "./RoutePublic";
import { useDispatch, useSelector } from 'react-redux';
import { onLogin } from "../store/auth/authSlice";

const AppRouter = () => {
  const dispatch = useDispatch();


  const { status } = useSelector((state) => state.auth);

  const token = localStorage.getItem("cobrando") || ""

  useEffect(() => {
    if(token !== ""){
      dispatch(onLogin({name:token}))
    }
  }, [dispatch,token])
  

  return (
    <BrowserRouter>
      <Routes>
          {
            (status === "authenticated") 
            ? (
              <>
                <Route path="/auth/*" element={<RoutePrivate />} />
                <Route path="/*" element={<Navigate to="/auth/home" />} />
              </>
            )
            :(
              <>
                <Route path="/*" element={<RoutePublic />} />
              </>
            )  
          }
          <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
