
import React from 'react';
import './cards.css'; // Import your CSS file

function Card(props) {
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

