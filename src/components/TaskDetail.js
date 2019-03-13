import React from "react";
import { connect } from "react-redux";

class TaskDetail extends React.Component {
  render() {
    const { task } = this.props;

    if (!task) {
      return <h3>Task not found.</h3>;
    }

    return (
      <div>
        <h3>{task.subject}</h3>
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
