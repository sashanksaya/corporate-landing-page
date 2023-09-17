import React from 'react';
import './fooooooooot.css'

const Footer = () => {
  return (
    <footer>
      <div className="corpify-logo">
        <img src="/path/to/corpify-logo.png" alt="Corpify Logo" />
      </div>
      <div className="footer-links">
        <div className="link-group">
          <a href="#">Resources</a>
          <a href="#">About Us</a>
          <a href="mailto:shivaprasadshetty112@gmail.com">Contact</a>
          <a href="#">Blog</a>
        </div>
        <div className="link-group">
          <a href="#">Support</a>
          <a href="#">Signup</a>
          <a href="#">SignIn</a>
        </div>
        <div className="link-group">
          <span>Products:</span>
          <a href="#">Windframe</a>
          <a href="#">Loop</a>
          <a href="#">Contrast</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
