// TopVideo.js
import React from 'react';
import backvideo from '../images/back.mp4';
import './topvideo.css';

function TopVideo() {
  return (
    <div className="video-container">
      <video src={backvideo} autoPlay loop muted></video>
      <div className="text-overlay">
        <h1 className="heading">
          Delivering Superior Services and <br />Cutting-Edge IT Solutions
        </h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod urna ac
          
        </p>
        <p className="small-paragraph">
          Ut eu felis justo. Phasellus dignissim purus id purus porttitor, ac finibus
          nunc tincidunt. Sed in suscipit neque.
        </p>
      </div>
    </div>
  );
}

export default TopVideo;
