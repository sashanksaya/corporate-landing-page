import React from "react";
import "./teamsection.css";
import Saya from "../images/cs.jpg";
import Shivu from "../images/cs.jpg";
import Prithvi from "../images/prithvi.jpg";

const TeamSection = () => {
  return (
    <div className="home-container">
      <div>
        <h2 className="heading"> Our Team</h2>
      </div>
      <div className="profile-card">
        <div className="img">
          <img src={Saya} alt="Profile" />
        </div>
        <div className="caption">
          <h3>ShivaPrasad Shetty</h3>
          <p>Full Stack Developer</p>
          <div className="social-links">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
          <img src={Saya} alt="Profile" />
        </div>
        <div className="caption">
          <h3>Sashank Saya</h3>
          <p>Full Stack Developer</p>
          <div className="social-links">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
          <img src={Saya} alt="Profile" />{" "}
        </div>
        <div className="caption">
          <h3>Tanush T</h3>
          <p>Front End Developer</p>
          <div className="social-links">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
          <img src={Saya} alt="Profile" />{" "}
        </div>
        <div className="caption">
          <h3>Shashank K Murthy</h3>
          <p>Front End Developer</p>
          <div className="social-links">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
          <img className="prithvi" src={Prithvi} alt="Profile" />{" "}
        </div>
        <div className="caption">
          <h3>T Prithvi Charan</h3>
          <p>Back End Developer</p>
          <div className="social-links">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
