import React, {useState} from 'react';
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
//  import {useSignUpForm} from './CustomHooks'

const Signup = () => {
  const firstname = useFormInput('');
  const lastname  = useFormInput('');
  const email     = useFormInput('');
  const password1 = useFormInput('');
  const password2 = useFormInput('');

  const signup = () => {alert(`Welcome to Horolog!  Name: ${firstname.value} ${lastname.value} Email: ${email.value}`)}
  // const { inputs, handleInputChange, handleSubmit } = useSignUpForm(signup);
  
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Sign Up</h1>
            <form action='/users/signup' method='POST'>
      <div>
        <label>First Name</label>
        <input type='text' {...firstname} required />
        <label>Last Name</label>
        <input type='text'  {...lastname}  required />
      </div>
      <div>
        <label>Email Address</label>
        <input type='email'  {...email} required />
      </div>
      <div>
        <label>Password</label>
        <input type='text' {...password1} required/>
      </div>
      <div>
        <label>Re-enter Password</label>
        <input type='text' {...password2} required/> 
      </div>
      <button type='submit'>Sign Up</button>
    </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
  function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    function handleChange(e) {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    };
  };
}
export default Signup