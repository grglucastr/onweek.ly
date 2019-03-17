import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { deleteTask } from "../actions/tasks";
import TaskDetailInfo from "./TaskDetailInfo";

class TaskDetail extends React.Component {
  state = {
    redirectToHome: false
  };

  delete = taskId => {
    const confirm = window.confirm("Are you  nuts???");
    if (confirm) {
      this.props.dispatch(deleteTask(parseInt(taskId)));
      this.setState({ redirectToHome: true });
    }
  };

  render() {
    const { task } = this.props;
    const { redirectToHome } = this.state;

    if (redirectToHome) {
      return <Redirect to="/" />;
    }

    if (!task) {
      return <h3>Task not found.</h3>;
    }

    return (
      <TaskDetailInfo task={task} />
    );
  }
}

function mapStateToProps(tasks, props) {
  const { id } = props.match.params;
  const task = tasks.filter(x => x.id === parseInt(id));

  return {
    task: task.length > 0 ? task[0] : null
  };
}

export default connect(mapStateToProps)(TaskDetail);
