// import React from 'react';
// import './services.css';

// function Services() {
//   return (
//     <div className="services-container">
//       <h2 className="text-center">Services</h2>
//       <div className="row">
//         <div className="col-md-4">
//           <div className="service-card">
//             <h3>Service 1</h3>
//             <p>Description of Service 1 goes here.</p>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="service-card">
//             <h3>Service 2</h3>
//             <p>Description of Service 2 goes here.</p>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="service-card">
//             <h3>Service 3</h3>
//             <p>Description of Service 3 goes here.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./cards.css";
import Service from "./Service";
import background from "../images/background.jpg";

function Card() {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-around">
        <Col>
          <Service
            title="Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel rutrum eros, tempus congue risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis quis lacinia diam. Nullam viverra bibendum sem, in maximus risus rutrum vel. Sed pharetra lacus eget suscipit vestibulum."
            background={background}
          />
        </Col>
        <Col>
          <Service
            title="Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel rutrum eros, tempus congue risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis quis lacinia diam. Nullam viverra bibendum sem, in maximus risus rutrum vel. Sed pharetra lacus eget suscipit vestibulum."
            background={background}
          />
        </Col>
        <Col>
          <Service
            title="Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel rutrum eros, tempus congue risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis quis lacinia diam. Nullam viverra bibendum sem, in maximus risus rutrum vel. Sed pharetra lacus eget suscipit vestibulum."
            background={background}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
