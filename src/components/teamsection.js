import React from "react";
import "./teamsection.css";
import Shivu from "../images/main.jpg";

const TeamSection = () => {
  return (
    <div className="home-container">
      <div className="profile-card">
        <div className="img">
          <img src="./man.jpg" alt="Profile" />
        </div>
        <div className="caption">
          <h3>Tom Cruise</h3>
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
          <img src={Shivu} alt="Profile" />
        </div>
        <div className="caption">
          <h3>Shivaprasad S Shetty</h3>
          <p>DSATM Student</p>
          <div className="social-links">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
          <img src="./man.jpg" alt="Profile" />
        </div>
        <div className="caption">
          <h3>David Wornar</h3>
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
          <img src="./man.jpg" alt="Profile" />
        </div>
        <div className="caption">
          <h3>David Wornar</h3>
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
          <img src="./man.jpg" alt="Profile" />
        </div>
        <div className="caption">
          <h3>Vin Diesel</h3>
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
