import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/login';
import Block_Start from './pages/block_start';
import Block_End from './pages/block_end';
import Client from './pages/client';
import Project from './pages/project';
import Report_Params from './pages/report_params';
import Time_Sheet from './pages/time_sheet';
import NoMatch from './pages/no_match';
import Nav from './components/Nav';

import logo from "./logo.svg";
import "./App.css";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path ='/' component={Login} />
          <Route exact path= '/start' component={Block_Start} />
          <Route exact path= '/end' component={Block_End} />
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
