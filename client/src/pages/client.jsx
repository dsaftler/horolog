import React from "react";
// import Select from 'react-select';
// import Creatable from 'react-select/creatable';
// import makeAnimated from 'react-select/animated';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { useClientForm } from './CustomHooks'

function Client() {
  const client = () => {alert(`Client ${inputs.name} Archived: ${inputs.is_archived}`)}
  const { inputs, handleInputChange, handleFormSubmit } = useClientForm(client);
  
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
            {/* <form action='/clients' method='POST'>             */}
            <form onSubmit={handleFormSubmit}>
            <div>
              <label>Client Name</label>
              <input type='text' name='name' onChange={handleInputChange} value={inputs.name} required />
            </div>
            <div>
              <label>Archived ?</label>
              {/* //Todo  what is boolean?  how to call the data */}
                <input type="checkbox" name="is_archived" onChange={handleInputChange} value={inputs.is_archived} />
            </div>

              <button type='submit'>Save</button>
            </form>
          </Jumbotron>

        </Col>
      </Row>

    </Container>
  );
}
export default Client;
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
