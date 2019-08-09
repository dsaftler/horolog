import React, { Component } from "react";
import Select from 'react-select';
import Creatable from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import CreateableSingle from "../components/CreateableSingle"
const colourOptions =  [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
// class Project extends Component {
function Project() {
  // handleChange = (newValue: any, actionMeta: any) => {
  //   console.group('Value Changed');
  //   console.log(newValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  // };
  // handleInputChange = (inputValue: any, actionMeta: any) => {
  //   console.group('Input Changed');
  //   console.log(inputValue);
  //   console.log(`action: ${actionMeta.action}`);
  //   console.groupEnd();
  // };
  // render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Project</h1>
            {/* <CreatableSingle
              isClearable
              onChange={this.handleChange}
              onInputChange={this.handleInputChange}
              options={colourOptions}
            /> */}
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
  // }
}

export default Project;