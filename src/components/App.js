import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import TaskHome from "./TaskHome";
import TaskForm from "./TaskForm";

import { listTasks } from "../actions/tasks";

const tasks = [
  {
    id: 1,
    subject: "Fix Access Point",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    start_date: "2019-03-12",
    expected_end_date: "2019-03-15",
    status: 1
  },
  {
    id: 2,
    subject: "Ip Connection Problem",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    start_date: "2019-03-11",
    expected_end_date: "2019-03-13",
    status: 2
  },

  {
    id: 3,
    subject: "Add Corp proxy for new PCs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    start_date: "2019-03-12",
    expected_end_date: "2019-03-12",
    status: 2
  },

  {
    id: 4,
    subject: "Fix proxy breaches",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    start_date: "2019-03-12",
    expected_end_date: "2019-03-14",
    status: 3
  }
];

class App extends Component {
  componentDidMount() {
    this.props.dispatch(listTasks(tasks));
  }

  render() {
    return (
      <Router>
        <Fragment>
          <AppHeader />
          <Switch>
            <Route exact path="/" component={TaskHome} />
            <Route exact path="/tasks" component={TaskHome} />
            <Route path="/tasks/add" component={TaskForm} />
          </Switch>
          <AppFooter />
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
