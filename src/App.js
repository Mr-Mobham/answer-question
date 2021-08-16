import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Questions from './pages/questions/index';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Switch>
               <Route exact path='/' component={Questions} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;