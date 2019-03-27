import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AppHeader from "./AppHeader";
import TaskDetail from "./TaskDetail";
import TaskForm from "./TaskForm";
import TaskHome from "./TaskHome";
import TaskList from './tasks/TaskList';

import { listTasks } from "../actions/tasks";


const tasks = [
  {
    id: 1,
    subject: "Fix Access Point",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    requester: "ramon.c",
    startDate: new Date("2019-03-12"),
    expectedEndDate: new Date("2019-03-14"),
    remark: "",
    status: 1,
    type: 2,
  },
  {
    id: 2,
    subject: "Ip Connection Problem",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    startDate: new Date("2019-03-11"),
    expectedEndDate: new Date("2019-03-13"),
    status: 2,
    type: 2,
  },

  {
    id: 3,
    subject: "Add Corp proxy for new PCs",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    startDate: new Date("2019-03-12"),
    expectedEndDate: new Date("2019-03-12"),
    status: 2,
    type: 1,
  },

  {
    id: 4,
    subject: "Fix proxy breaches",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    startDate: new Date("2019-03-12"),
    expectedEndDate: new Date("2019-03-14"),
    status: 3,
    type: 1,
  }
];

class App extends Component {
  componentDidMount() {
    this.props.dispatch(listTasks(tasks));
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Row>
            <Col>
              <AppHeader />
            </Col>
          </Row>

          <Row>
            <Col>
              <Switch>
                <Route exact path="/" component={TaskList} />
                <Route exact path="/tasks" component={TaskHome} />
                <Route path="/add-tasks" component={TaskForm} />
                <Route exact path="/tasks/:id" component={TaskDetail} />
                <Route exact path="/tasks/:id/edit" component={TaskForm} />
              </Switch>
            </Col>
          </Row>

          <Row>
            <Col>{/*<AppFooter />*/}</Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default connect()(App);
