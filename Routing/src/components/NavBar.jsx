import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <ul className="Nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/DashBoard"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            DashBoard
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
