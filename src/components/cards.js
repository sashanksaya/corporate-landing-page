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


// import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// import "./cards.css";
// import Service from "./Service";
// import background from "../images/background.jpg";

// function Card() {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <Service
//             title="Service"
//             description="Lorem Ipsum"
//             background={background}
//           />
//         </Col>
//         <Col>
//           <Service
//             title="Service"
//             description="Lorem Ipsum"
//             background={background}
//           />
//         </Col>
//         <Col>
//           <Service
//             title="Service"
//             description="Lorem Ipsum"
//             background={background}
//           />
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Card;

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
      <Row className="justify-content-around">
        <Col>
          <Service
            title="Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut est odio. Nam eget pellentesque turpis, consectetur suscipit mi. Quisque lacinia feugiat ullamcorper. Fusce posuere libero dignissim sapien porta lacinia. Curabitur a dictum lectus, eget ultricies elit. In accumsan ex non purus mattis, eu hendrerit nibh mattis."
            background={background}
          />
        </Col>
        <Col>
          <Service
            title="Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut est odio. Nam eget pellentesque turpis, consectetur suscipit mi. Quisque lacinia feugiat ullamcorper. Fusce posuere libero dignissim sapien porta lacinia. Curabitur a dictum lectus, eget ultricies elit. In accumsan ex non purus mattis, eu hendrerit nibh mattis."
            background={background}
          />
        </Col>
        <Col>
          <Service
            title="Service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut est odio. Nam eget pellentesque turpis, consectetur suscipit mi. Quisque lacinia feugiat ullamcorper. Fusce posuere libero dignissim sapien porta lacinia. Curabitur a dictum lectus, eget ultricies elit. In accumsan ex non purus mattis, eu hendrerit nibh mattis."
            background={background}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Card;
