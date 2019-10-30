import React, { Component } from 'react';
import  Heading  from './components/Heading';

import Home from './pages/Home';
import About from './pages/About';
import Help from './pages/Help';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import './App.css';

class App extends Component { 

  render() {
    return (
      <div className="App">
        <Router>
          <Heading />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/help">
              <Help />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;