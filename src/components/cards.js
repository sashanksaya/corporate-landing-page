import React from "react";
import "./cards.css"; // Import your CSS file
import cs from "../images/cs.jpg";
import fo from "../images/fo.jpg";
import po from "../images/po.jpg";
import io from "../images/istm.jpg";
import co from "../images/cloud.jpg";
import hr from "../images/hr.jpg";

import { Row, Col } from "react-bootstrap";
import Service from "./Service";

function Card(props) {
  return (
    <>
      <Row className="d-flex justify-content-around">
        <Col>
          <Service
            title="Customer Service"
            description="Manage email support, live chat, knowledge base, phone, and whatsapp support - right from Gmail."
            background={cs}
          />
        </Col>
        <Col>
          <Service
            title="People Operations"
            description="Be there for your employees at all times. Provide accurate responses to queries related to payroll, company policies, benefits, and more."
            background={po}
          />
        </Col>
        <Col>
          <Service
            title="Finance Operations"
            description="Collaborate on invoices, cash collection requests, bookkeeping queries, and more, to ensure company operations run smoothly."
            background={fo}
          />
        </Col>
        <Col>
          <Service
            title="ISTM"
            description="Turn your Gmail into an easy-to-use IT helpdesk that scales with your business. Resolve queries faster and ensure a hassle-free employee experience."
            background={io}
          />
        </Col>
        <Col>
          <Service
            title="Cloud Computing Solutions:"
            description="Offering cloud-based services, such as infrastructure as a service (IaaS), platform as a service (PaaS), and software as a service (SaaS) to enhance scalability and flexibility."
            background={co}
          />
        </Col>
        <Col>
          <Service
            title="Human Resource"
            description="Our HR services cover payroll, talent acquisition, benefits, and compliance support. We streamline workforce management, boost employee satisfaction, and provide technology-driven solutions and expert guidance."
            background={hr}
          />
        </Col>
      </Row>
    </>
  );
}

export default Card;
