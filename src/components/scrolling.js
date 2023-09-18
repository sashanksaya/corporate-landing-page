import React, { useEffect } from "react";
import "./scrolling.css";
import One from '../images/company1.jpg'
import Two from '../images/company2.jpeg'
import Three from '../images/company3.jpg'
import Four from '../images/company4.jpg'
import Five from '../images/company5.jpeg'
import Six from '../images/company6.jpg'
import Seven from '../images/company7.png'
import Eight from '../images/company8.jpg'
import Nine from '../images/company9.png'
function CodingWithRobby() {
  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <div>
      <div className="logos">
        <div className="logos-slide">
          <img src={One} alt="3M" />
          <img src={Two} alt="Barstool Store" />
          <img src={Three} alt="Budweiser" />
          <img src={Four} alt="Buzzfeed" />
          <img src={Five} alt="Forbes" />
          <img src={Six} alt="Macy's" />
          <img src={Seven} alt="Men's Health" />
          <img src={Eight} alt="MrBeast" />
          <img src={Nine} alt="MrBeast" />
        </div>
      </div>
    </div>
  );
}

export default CodingWithRobby;
