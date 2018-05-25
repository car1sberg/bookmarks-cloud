import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import SettingsPage from './components/SettingsPage';
// import BookmarksHeader from './components/BookmarksHeader';
// import Bookmarks from './components/Bookmarks';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/settings" component={SettingsPage}></Route>
          {/* <BookmarksHeader />
          <Bookmarks /> */}
        </Switch>
      </Router>
    );
  }
}

export default App;
