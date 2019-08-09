import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import { Input, FormBtn } from '../components/Form';
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Button from '@material-ui/core/Button';

// console.log('login.js');
class Login extends Component {
  state = {
    username: '',
    role: '',
    id: 0
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.username && this.state.password) {
    //   username: this.state.username
    //   // TODO   GET THIS FROM USER TABLE
    //   // role: this.state.role,
    //   // id: this.state.id
    // }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size = 'md-6'>
            <Jumbotron>
            Login form
            </Jumbotron>
            <form>
              <Input 
                value = {this.state.username}
                onChange = {this.handleInputChange}
                name='username'
                placeholder='Username (required)'
              />
              <Input  
                value = {this.state.password}
                onChange = {this.handleInputChange}
                name='password'
                placeholder='Password (required)'
              />
              <Button variant="contained" color="primary">
                Hello World
    </Button>
              <FormBtn 
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
              > 
                Submit 
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Login;