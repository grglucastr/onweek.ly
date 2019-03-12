import React, { Component } from "react";
import { connect } from "react-redux";

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
          {planTasks.map(task => (
            <li key={task.id}>{task.subject}</li>
          ))}
        </ul>

        <p>In Progress</p>
        <ul>
          {progressTasks.map(task => (
            <li key={task.id}>{task.subject}</li>
          ))}
        </ul>

        <p>Done</p>
        <ul>
          {doneTasks.map(task => (
            <li key={task.id}>{task.subject}</li>
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
