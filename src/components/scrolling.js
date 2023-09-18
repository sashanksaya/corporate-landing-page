import React, { useEffect } from "react";
import "./scrolling.css";

function CodingWithRobby() {
  useEffect(() => {
    const copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
  }, []);

  return (
    <div>
      <div className="logos">
        <div className="logos-slide">
          <img src="./logos/3m.svg" alt="3M" />
          <img src="./logos/barstool-store.svg" alt="Barstool Store" />
          <img src="./logos/budweiser.svg" alt="Budweiser" />
          <img src="./logos/buzzfeed.svg" alt="Buzzfeed" />
          <img src="./logos/forbes.svg" alt="Forbes" />
          <img src="./logos/macys.svg" alt="Macy's" />
          <img src="./logos/menshealth.svg" alt="Men's Health" />
          <img src="./logos/mrbeast.svg" alt="MrBeast" />
        </div>
      </div>
    </div>
  );
}

export default CodingWithRobby;
