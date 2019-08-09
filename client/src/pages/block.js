import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function Block() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Block</h1>
            <Link to={'./client'}>
              <button variant="raised">
                Client
            </button>
            </Link>
            <Link to={'./project'}>
              <button variant="raised">
                Project
             </button>
            </Link>
            <Link to={'./report_params'}>
              <button variant="raised">
                Reports
              </button>
            </Link>
            <Link to={'./time_sheet'}>
              <button variant="raised">
                Time Sheets
              </button>
            </Link>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Block;