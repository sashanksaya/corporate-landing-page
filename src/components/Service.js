import React from "react";

const Service = (props) => {
  return (
    <div className="col-md-4" style={{ position: "relative", float: "right" }}>
      <div className="card-container">
        <div className="image-container">
          <img src={props.background} alt="i love you" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3 className="card-text">{props.title}</h3>
          </div>
          <div className="card-body">
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
