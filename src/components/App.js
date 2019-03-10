import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

import Home from './Home'

import TaskNew from './TaskNew'

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tasks" component={TaskNew} />
        </Switch>
        <AppFooter />
      </div>
    );
  }
}

export default App;
