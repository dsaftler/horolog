import React, { Component } from "react";
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Select from 'react-select';
import CssBaseline from '@material-ui/core/CssBaseline';
import LoginForm from './pages/login_form';
import SignupForm from './pages/signup_form';
import Login from './pages/login';
import Block from './pages/block';
import Client from './pages/client';
import Project from './pages/project';
import Report_Params from './pages/report_params';
import Time_Sheet from './pages/time_sheet';
import NoMatch from './pages/no_match';
import Nav from './components/Nav';
import Header from './components/Header'
import Home from './components/Home'
import logo from "./logo.svg";
import Button from '@material-ui/core/Button';
import "./App.css";

console.log('app.js');
// app.get('/*', checkAuthentication, function (req, res) {
//   //do something only if user is authenticated
// });
// function checkAuthentication(req, res, next) {
//   if (req.isAuthenticated()) {
//     //req.isAuthenticated() will return true if user is logged in
//     next();
//   } else {
//     res.redirect("/login");
//   }
// }
function App() {
  return (
    
    <Router>
      <CssBaseline />
      <div>
        <Nav />
        <Switch>
          <Route exact path ='/' component={Login} />
          <Route exact path= '/block' component={Block} />
          <Route exact path= '/client' component={Client} />
          <Route exact path= '/project' component={Project} />
          <Route exact path= '/report' component={Report_Params} />
          <Route exact path='/time' component={Time_Sheet} />
          <Route component={NoMatch} />

        </Switch>
      </div>
    </Router>
  );
}


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
