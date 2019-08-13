import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
const Home = () => {
  return (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Home</h1>
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
            <Link to={'./block'}>
              <button variant="raised">
                Timer Log
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
          <Link to={'./login'}>
            <button variant="raised">
              Login
          </button>
          </Link>
           <Link to={'.signup'}>
             <button variant="raised">
                SignUp
             </button>
          </Link>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
  )
 }
export default Home;