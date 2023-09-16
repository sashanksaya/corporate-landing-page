import React, { useState } from 'react';
import './navbar.css';
import logo from '../images/logo.jpeg';
import Menu from './menu';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div>
        <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
          <div className="container">
            <div className="logo">
              <img src={logo} alt="Logo" className="small-logo" />
            </div>
            <div className={`nav-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </nav>
        <Menu isOpen={isMenuOpen} onClose={toggleMenu} />
      </div>
    </>
  );
}

export default Navbar;
