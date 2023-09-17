
import React from 'react';
import './cards.css'; // Import your CSS file

function Card(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={props.background} alt="Background" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

