import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../style/images/logo.jpg";

const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <a className="brand-logo">
          <img src={Logo} alt="logo" />
        </a>
        <ul className="right">
          <p className="title">SAVVY Builder LLC</p>
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
      <div className="footer-container">
        footer
        <a href="#" className="facebook social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="#" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/learnbuildteach"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <p>&copy; 2020 Heith Robbins.</p>
      </div>
    </nav>
  );
};

export default NavBar;
