import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import BookmarksHeader from './components/Bookmarks-header';
import Bookmarks from './components/Bookmarks';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <BookmarksHeader />
          <Bookmarks />
        </div>
      </Router>
    );
  }
}

export default App;
