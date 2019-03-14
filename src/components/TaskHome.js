import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import TaskDetail from "./TaskDetail";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component {
  render() {
    const { tasks } = this.props;
    let planTasks = [];
    let progressTasks = [];
    let doneTasks = [];

    if (tasks) {
      planTasks = tasks.filter(x => x.status === 1);
      doneTasks = tasks.filter(x => x.status === 3);
      progressTasks = tasks.filter(x => x.status === 2);
    }

    return (
      <Container>
        <Row>
          <Col>
            <h4 className="text-center">Plan</h4>
          </Col>
          <Col>
            <h4 className="text-center">In Progress</h4>
          </Col>
          <Col>
            <h4 className="text-center">Done</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(tasks) {
  return { tasks };
}

export default connect(mapStateToProps)(Home);

{
  /**
 * 
 * <div>
        <h3>Tasks Listing Home</h3>
        <p>Plan</p>
        <ul>
          {planTasks.map((task, idx) => (
            <li key={idx}>
              <Link to={`/tasks/${task.id}`}>{task.subject}</Link>
            </li>
          ))}
        </ul>

        <p>In Progress</p>
        <ul>
          {progressTasks.map((task, idx) => (
            <li key={idx}>
              <Link to={`/tasks/${task.id}`}>{task.subject}</Link>
            </li>
          ))}
        </ul>

        <p>Done</p>
        <ul>
          {doneTasks.map((task, idx) => (
            <li key={idx}>
              <Link to={`/tasks/${task.id}`}>{task.subject}</Link>
            </li>
          ))}
        </ul>
      </div>
 * 
 */
}
