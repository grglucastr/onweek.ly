import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import TaskNew from './TaskNew'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tasks" component={TaskNew} />
        </Switch>
      </div>
    );
  }
}

export default App;
