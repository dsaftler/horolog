import React from 'react';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import {useSignUpForm} from './CustomHooks'

const Signup = () => {
  const signup = () => {alert(`Welcome to Horolog!  Name: ${inputs.firstname} ${inputs.lastname} Email: ${inputs.email}`)}
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);
  
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Sign Up</h1>
      <form action='users/signup' 
      method='POST'>
      {/* <form action='users/signup/permissions/1'
                method='POST'> */}
      <div>
        <label>First Name</label>
        <input type='text' name='firstname' onChange={handleInputChange} value={inputs.firstname} required />
        <label>Last Name</label>
        <input type='text' name='lastname' onChange={handleInputChange} value={inputs.lastname} required />
      </div>
      <div>
        <label>Email Address</label>
        <input type='email' name='email' onChange={handleInputChange} value={inputs.email} required />
      </div>
      <div>
        <label>Password</label>
        <input type='text' name='password1' onChange={handleInputChange} value={inputs.password1} />
      </div>
      <div>
        <label>Re-enter Password</label>
        <input type='text' name='password2' onChange={handleInputChange} value={inputs.password2} />
      </div>
      <button type='submit'>Sign Up</button>
    </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}
export default Signup