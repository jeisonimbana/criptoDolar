import React from "react";
import { useDispatch } from "react-redux";
import {  NavLink } from "react-router-dom";
import { onLogout } from "../store/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch( onLogout() );
  }

  return (
    <nav className="navbar_container">
      <div className="navbarLeft">
        <span className="navbar_logo">CriptoDolar</span>
      </div>
      <div className="navbarRight">
        <ul className="navbarMenu">
          <li className="navbarItemMenu">
            <NavLink
              to="/auth/home"
              className={({ isActive }) =>
                isActive ? "linkMenu active" : "linkMenu"
              }
            >
              Inicio
            </NavLink>
          </li>
          <li className="navbarItemMenu">
            <NavLink
              to="/auth/list"
              className={({ isActive }) =>
                isActive ? "linkMenu active" : "linkMenu"
              }
            >
              Candidatos
            </NavLink>
          </li>
        </ul>
        <button onClick={handleLogout} className="buttonNavbarSession">Salir</button>
      </div>
    </nav>
  );
};

export default Navbar;
