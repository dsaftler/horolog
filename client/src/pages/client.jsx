import React, { Component } from "react";
import Select from 'react-select';
// import Creatable from 'react-select/creatable';
// import makeAnimated from 'react-select/animated';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { useClientForm } from './CustomHooks'
import { useForm } from './CustomHooks'
const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
// class Client extends React.Component {
//   state = {
//     selectedOption: null,
//   };
//   handleChange = selectedOption => {
//     this.setState({ selectedOption });
//     console.log(`Option selected:`, selectedOption);
//   };
//   render() {
//     const { selectedOption } = this.state;

//     return (
//       <Select
//         isMulti
//         name='client'
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={options}
//       />
//     );
//   }
// }
function Client() {
  const client = () => {alert(`Client ${inputs.name} Active: ${inputs.is_active}`)}
  const { inputs, handleInputChange, handleSubmit } = useForm(client);

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
            <h1>Client</h1>
            {/* <form onSubmit={handleSubmit}> */}
            <form action='/client/create' method='POST'>            
            <div>
              <label>Client Name</label>
              <input type='text' name='name' onChange={handleInputChange} value={inputs.name} required />
            </div>
            <div>
              <label>Active: </label>
              {/* //Todo  what is boolean?  how to call the data */}
              <input type="checkbox" name="is_active" onChange={handleInputChange} value={inputs.is_active} />
            </div>
            {/* <Select
              isMulti
              name='client'
              value={selectedOption}
              onChange={handleInputChange}
              options={options}
            /> */}
              <button type='submit'>Save</button>
            </form>
          </Jumbotron>

        </Col>
      </Row>

    </Container>
  );
}

export default Client;