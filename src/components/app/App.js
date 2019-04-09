import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AppHeader from "./AppHeader";
import Home from "../home";
import Login from "../login";
import Dashboard from "../dashboard/Dashboard";

import { listTasks } from "../tasks/actions";
import tasks from "../../util/_DATA";
import SignupForm from "../signup/SignupForm";

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
                <Route exact path="/" component={Home} />
                <Route path="/sign-up" component={SignupForm} />
              </Switch>
            </Col>
          </Row>

          <Row>
            <Col>asdfasdf{/*<AppFooter />*/}</Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default connect()(App);
