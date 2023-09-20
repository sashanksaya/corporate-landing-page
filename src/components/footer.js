import React, { useState } from "react";
import "./footer.css";
import Corpify from "../images/corpify2.png";
import axios from "axios";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert("Please enter your name");
    } else if (email.length === 0) {
      alert("Please enter your email");
    } else if (phone.length === 0) {
      alert("Please enter your phone number");
    } else {
      const url = "api.php";
      let fdata = new FormData();
      fdata.append("name", name);
      fdata.append("email", email);
      fdata.append("phone", phone);

      axios
        .post(url, fdata)
        .then((response) => alert(response.data))
        .catch((error) => alert(error));

      // Here, you can send the form data to your server or perform other actions
    }
  };

  return (
    <footer className="footer">
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
        <div className="col-md-4">
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
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="name">Name </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br></br>
          <br></br>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <label htmlFor="phone">Phone-no </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br></br>
          <br></br>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
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
