import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Router>
    );
  }
}

export default App;
