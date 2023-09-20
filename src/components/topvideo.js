// TopVideo.js
import React from "react";
import backvideo from "../images/back.mp4";
import "./topvideo.css";

function TopVideo() {
  return (
    <div className="video-container">
      <video src={backvideo} autoPlay loop muted></video>
      <div className="text-overlay">
        <h1 className="heading">
          Delivering Superior Services and <br />
          Cutting-Edge IT Solutions
        </h1>
        <p className="paragraph">
          Welcome to our company website, where we specialize in delivering
          top-notch services and cutting-edge IT solutions.
        </p>
        <p className="small-paragraph">
          With a relentless commitment to excellence, we empower businesses to
          thrive in the digital age by providing innovative technology solutions
          and unmatched service quality.
        </p>
      </div>
    </div>
  );
}

export default TopVideo;
