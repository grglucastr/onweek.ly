import React, { Component } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import TaskCards from "./TaskCards";

class Home extends Component {
  render() {
    const { tasks } = this.props;
    let planTasks = [];
    let progressTasks = [];
    let doneTasks = [];

    if (tasks) {
      planTasks = tasks.filter(x => x.status === 1);
      progressTasks = tasks.filter(x => x.status === 2);
      doneTasks = tasks.filter(x => x.status === 3);
    }

    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h3 className="text-center mt-2">Your tasks for this week</h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="pl-2 mt-2">
              <Button
                variant="primary"
                onClick={() => this.props.history.push("/add-tasks")}
              >
                <FontAwesomeIcon icon={faPlusCircle} /> Add Task
              </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="container-status mt-4">
              <div className="container-status-col">
                <TaskCards description="Plan" tasks={planTasks} />
              </div>
              <div className="container-status-col">
                <TaskCards
                  description="In Progress"
                  tasks={progressTasks}
                />
              </div>
              <div className="container-status-col">
                <TaskCards description="Done" tasks={doneTasks} />
              </div>
            </div>
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
