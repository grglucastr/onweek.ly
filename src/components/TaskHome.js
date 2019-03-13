import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import TaskDetail from "./TaskDetail";

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
      <div>
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
    );
  }
}

function mapStateToProps(tasks) {
  return { tasks };
}

export default connect(mapStateToProps)(Home);
