import React from "react";
import { Link, NavLink } from "react-router-dom";

import Logo from "../style/images/logo/117767319_154718386254126_6427164057978971817_n.jpg";

const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a className="brand-logo">
          <img scr={Logo} alt="Logo"></img>Savvy Builders
        </a>

        <ul className="right">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
