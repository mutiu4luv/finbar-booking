import React, { useState } from "react";
import "./Navbar.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
import logo from "../assests/finbarNavbar.jpg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Logo" className="navbar-logo-image" />
          </a>
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
