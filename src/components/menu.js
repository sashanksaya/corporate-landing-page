import React from "react";
import "./menu.css";
import "./login";
import { Link } from "react-router-dom";

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? "open" : ""}`}>
      <div className="menu-header">
        <div className="close-button" onClick={onClose}>
          <div className="crossbox">
            <div className={`bar ${isOpen ? "rotate-up" : ""}`}></div>
            <div className={`bar ${isOpen ? "rotate-down" : ""}`}></div>
          </div>

          <div className={`bar ${isOpen ? "cross" : ""}`}></div>
        </div>
      </div>
      <ul className="menu-links">
        <li>
          <a href="#navbar">Home</a>
        </li>
        <li>
          <a href="#cards-container">Services</a>
        </li>
        <li>
          <a href="#scrolling">Our Clients</a>
        </li>
        <li>
          <a href="#us">Our Team</a>
        </li>
        <li>
          <a href="mailto:shivaprasadshetty112@gmail.com">Contact us</a>
        </li>
        <li>
          <a href="#footer">Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
