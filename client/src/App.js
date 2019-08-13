import React from "react";
// import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Select from 'react-select';
import CssBaseline from '@material-ui/core/CssBaseline';
// import LoginForm from './pages/login_form';
// import SignupForm from './pages/signup_form';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Block from './pages/block';
import Client from './pages/client';
import Project from './pages/project';
import Report_Params from './pages/report_params';
import Time_Sheet from './pages/time_sheet';
import NoMatch from './pages/no_match';
import Nav from './components/Nav';
// import Header from './components/Header'
// import logo from "./logo.svg";
// import Button from '@material-ui/core/Button';
import "./App.css";

console.log('app.js');

function App() {
  return (
    
    <Router>
      <CssBaseline />
      <div>
        <Nav />
        <Switch>
          <Route exact path ='/' component =         {Home} />
          <Route exact path = '/login' component =   {Login} />
          <Route exact path = '/signup' component =  {Signup} />
          <Route exact path = '/block' component =   {Block} />
          <Route exact path = '/client' component =  {Client} />
          <Route exact path = '/project' component = {Project} />
          <Route exact path = '/report' component =  {Report_Params} />
          <Route exact path = '/time' component =    {Time_Sheet} />
          <Route component  = {NoMatch} />

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
