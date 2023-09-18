import React, { useState, useEffect } from "react";
import "./upbutton.css"; // Create a CSS file for styling

function ScrollUpButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button className="scroll-up-button" onClick={scrollToTop}>
        <i className="fas fa-angle-double-up"></i>
      </button>
    )
  );
}

export default ScrollUpButton;
