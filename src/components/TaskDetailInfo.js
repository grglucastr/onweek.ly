import React from "react";
import { Link } from "react-router-dom";

const TaskDetailInfo = ({ task }) => {

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

export default TaskDetailInfo