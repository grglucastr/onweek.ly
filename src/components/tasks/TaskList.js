import React, { Component } from "react";
import TaskListItem from "./TaskListItem";
import { connect } from "react-redux";

class TaskList extends Component {

  callThisAction = (task) =>{
    console.log(`Task selected ${task.id}`);
  }

  render() {
    const { tasks } = this.props;

    return (
      <>
        <div className="task-list-container mt-4">
          {tasks.map(task => (
            <TaskListItem
              key={task.id}
              task={task}
              onSelected={(task) => this.callThisAction(task)}
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
