import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { deleteTask } from "../actions/tasks";

import "./Base.css";

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
      <div>
        <h3>{task.subject}</h3>[<Link to={`/tasks/${task.id}/edit`}>Edit</Link>]
        [
        <a href="#" onClick={() => this.delete(task.id)}>
          Delete
        </a>
        ]
        {task.status === 1 ? (
          <span className="task-status-link">
            [<Link to={`/tasks/${task.id}/edit`}>Start In Progress</Link>]
          </span>
        ) : task.status === 2 ? (
          <span className="task-status-link">
            [<Link to={`/tasks/${task.id}/edit`}>Done</Link>]
          </span>
        ) : (
          <span className="task-status-link">
            [<Link to={`/tasks/${task.id}/edit`}>Reopen Task</Link>]
          </span>
        )}
        <div>
          <p>Date Start: 2019-03-14 </p>
          <p>End Date: 2019-03-22 (Expected)</p>
        </div>
        <p>{task.description}</p>
      </div>
    );
  }
}

function mapStateToProps(tasks, props) {
  const { id } = props.match.params;
  const task = tasks.filter(x => x.id === eval(id));

  return {
    task: task.length > 0 ? task[0] : null
  };
}

export default connect(mapStateToProps)(TaskDetail);
