import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { useReportForm } from './CustomHooks'

 const Report = () => {
    const reportform = () => { alert(`Report Form`) }
    const { inputs, handleInputChange, handleSubmit } = useReportForm(reportform);
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <Link to={'/'}>
              <button variant="raised">
                Home
                </button>
            </Link>    
            <h1>Report</h1>
            <form action='queries/report' method='GET'>
              <div>
                <label>select client(s)</label>
              </div>
              <div>
                <div>
                  <label>select projects(s)</label>
                </div>
              </div>
              <div>
                <label>calendar start date</label>
              </div>
              <div>
                <label>calendar end date</label>
              </div>
              <div>
                <label>include DEV</label>
              </div>
              <div>
                <label>include O&E</label>
              </div>
              <div>
                <label>include submitted</label>
              </div>
              <div>
                <label>include booked</label>
              </div>
              <button type='submit'>Report</button>
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}
export default Report