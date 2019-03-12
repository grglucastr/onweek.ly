import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

import TaskHome from './TaskHome'
import TaskForm from './TaskForm'

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <Switch>
          <Route exact path="/" component={TaskHome} />
          <Route exact path="/tasks" component={TaskHome} />
          <Route path="/tasks/add" component={TaskForm} />
        </Switch>
        <AppFooter />
      </div>
    );
  }
}

export default App;
