import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import AppHeader from "./AppHeader";
import Home from './home'

import { listTasks } from "./tasks/actions";
import tasks from '../util/_DATA';


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
            <Col xs={3}>
              <h5 className="mt-4">Menu</h5>
            </Col>
            
            <Col xs={8}>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Col>
            
            {/* <Col xs={3}>
              <h5 className="mt-4 text-center">Team Members</h5>
            </Col> */}
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
