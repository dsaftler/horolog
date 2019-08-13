import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Report_Params() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Report Parameters</h1>
            <Link to={'./home'}>
              <button variant="raised">
                Home
                </button>
            </Link>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Report_Params;