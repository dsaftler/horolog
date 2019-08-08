import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Block_Start() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Block-Start</h1>

          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Block_Start;