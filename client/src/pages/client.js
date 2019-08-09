import React, { Component } from "react";
import Select from 'react-select';
// import Creatable from 'react-select/creatable';
// import makeAnimated from 'react-select/animated';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
class Client extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        isMulti
        name='client'
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}
// function Client() {
//   return (
//     <Container fluid>
//       <Row>
//         <Col size="md-12">
//           <Jumbotron>
//             <h1>Client</h1>

//           </Jumbotron>

//         </Col>
//       </Row>

//     </Container>
//   );
// }

export default Client;