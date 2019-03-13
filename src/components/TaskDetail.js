import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./Base.css";

class TaskDetail extends React.Component {
  render() {
    const { task } = this.props;

    if (!task) {
      return <h3>Task not found.</h3>;
    }

    return (
      <div>
        <h3>{task.subject}</h3>[<Link to={`/tasks/${task.id}/edit`}>Edit</Link>]
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
