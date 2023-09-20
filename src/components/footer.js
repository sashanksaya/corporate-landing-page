import React from "react";
import "./footer.css";
import Corpify from "../images/corpify2.png";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-md-4">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img alt="logo" src={Corpify} width="50px" />
            <span className="ms-3 h5 font-weight-bold">Corpify</span>
          </a>
          <p className="my-3" style={{ maxWidth: "250px" }}>
            We are creating High-Quality Resources and tools to aid developers
            during the development of their projects
          </p>
          {/* Social media icons/buttons */}
        </div>
        <div className="col-md-2">
          <h5 className="mb-4" style={{ fontWeight: "600" }}>
            Corpify
          </h5>
          <ul className="footer-links">
            <li>
              <a href="/">Resources</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="col-md-2">
          <h5 className="mb-4" style={{ fontWeight: "600" }}>
            Help
          </h5>
          <ul className="footer-links">
            <li>
              <a href="/">Support</a>
            </li>
            <li>
              <a href="/">Sign Up</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4-a">
          <h5 className="mb-4" style={{ fontWeight: "600" }}>
            Products
          </h5>
          <ul className="footer-links">
            <li>
              <a href="/">Windframe</a>
            </li>
            <li>
              <a href="/">Loop</a>
            </li>
            <li>
              <a href="/">Contrast</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="input">
        <h3>Enter your contact info</h3>
        <label>Name </label>
        <input type="text" />
        <br></br>
        <br></br>
        <label>Email </label>
        <input type="text" />
        <br></br>
        <br></br>
        <label>Phone-no </label>
        <input type="text" />
        <br></br>
        <br></br>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <small className="text-center">
            &copy; Corpify, 2023. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
