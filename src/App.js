import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Questions from './pages/questions/index';
import Header from './parts/Header';
import './App.scss';
import SingleQuestion from './pages/questions/single/index';


class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <Header></Header>
          <Switch>
               <Route exact path='' component={Questions} />
               <Route  path='/question/:id' component={SingleQuestion} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;