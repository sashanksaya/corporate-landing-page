
import React from 'react';
import './menu.css';

function Menu({ isOpen, onClose }) {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-header">
        <div className="close-button" onClick={onClose}>
          <div className="crossbox">
            <div className={`bar ${isOpen ? 'rotate-up' : ''}`}></div>
            <div className={`bar ${isOpen ? 'rotate-down' : ''}`}></div>

          </div>
          
          <div className={`bar ${isOpen ? 'cross' : ''}`}></div>
        </div>
      </div>
      <ul className="menu-links">
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/">Our Clients</a></li>
        <li><a href="mailto:shivaprasadshetty112@gmail.com">Contact us</a></li>
        <li><a href="/">Login</a></li>
        
        
        
      </ul>
    </div>
  );
}

export default Menu;


