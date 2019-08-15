import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, FormBtn } from '../components/Form';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { useLoginForm } from './CustomHooks'

const Login = () => {
  const login = () => { alert(`Welcome to Horolog!   Email: ${inputs.email}`) }
  const { inputs, handleInputChange, handleSubmit } = useLoginForm(login);
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
            <h1>Login</h1>
            <form action='/users/login' method='POST'>
             
              <div>
                <label>Email Address</label>
                <input type='email' name='email' onChange={handleInputChange} value={inputs.email} required />
              </div>
              <div>
                <label>Password</label>
                <input type='text' name='password' onChange={handleInputChange} value={inputs.password} />
              </div>

              <button type='submit'>Login</button>
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )


}
export default Login;
// console.log('login.js');
// class Login extends Component {
//   state = {
//     username: '',
//     role: '',
//     id: 0
//   };

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
//   handleFormSubmit = event => {
//     event.preventDefault();
//     // if (this.state.username && this.state.password) {
//     //   username: this.state.username
//     //   // TODO   GET THIS FROM USER TABLE
//     //   // role: this.state.role,
//     //   // id: this.state.id
//     // }
//   };

//   render() {
//     return (
//       <Container fluid>
//         <Row>
//           <Col size = 'md-6'>
//             <Jumbotron>
//             Login form
//             </Jumbotron>
//             <form>
//               <Input 
//                 value = {this.state.username}
//                 onChange = {this.handleInputChange}
//                 name='username'
//                 placeholder='Username (required)'
//               />
//               <Input  
//                 value = {this.state.password}
//                 onChange = {this.handleInputChange}
//                 name='password'
//                 placeholder='Password (required)'
//               />

//               <FormBtn 
//                 disabled={!(this.state.username && this.state.password)}
//                 onClick={this.handleFormSubmit}
//               > 
//                 Submit 
//               </FormBtn>
//             </form>
//           </Col>
//         </Row>
//       </Container>
//     );
//   }