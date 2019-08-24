import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";

import { useTimeSheetForm } from './CustomHooks'

const TimeSheet = () => {
  const timesheet = () => { alert(`Time Sheet}`) }
  // const { inputs, handleInputChange, handleSubmit } = useTimeSheetForm(timesheet);

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
            <h1>Time Sheet</h1>
            <form action='queries/timesheet' method='GET'>
            <div>
                <label>calendar start date</label>
              </div>
              <div>
                <label>calendar end date</label>
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

export default TimeSheet;
