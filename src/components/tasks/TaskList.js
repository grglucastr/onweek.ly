import React, { Component } from "react";
import TaskListItem from "./TaskListItem";
import { connect } from "react-redux";

class TaskList extends Component {
  render() {
    const { tasks } = this.props;

    return (
      <>
        <div className="task-list-container mt-4">
          {tasks.map(task => (
            <TaskListItem
              key={task.id}
              task={task}
              onClick={() => {
                return console.log("sadfasdfasdf");
              }}
            />
          ))}
        </div>
      </>
    );
  }
}

function mapStateToProps(tasks) {
  return { tasks };
}

export default connect(mapStateToProps)(TaskList);
