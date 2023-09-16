
import React from 'react';
import './services.css';

function Services() {
  return (
    <div className="services-container">
      <h2 className="text-center">Services</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Description of Service 1 goes here.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Description of Service 2 goes here.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Description of Service 3 goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
