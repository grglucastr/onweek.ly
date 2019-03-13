import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addTask, editTask } from "../actions/tasks";
import "./Base.css";

class AddTask extends React.Component {
  state = {
    task: this.props.task ? this.props.task : this.initialTask(),
    redirectToHome: false,
    isEditing: this.props.task ? true : false
  };

  componentDidMount() {
    const { id: taskId } = this.props.match.params;

    console.log("taskid", taskId);
  }

  initialTask() {
    return {
      id: Math.floor(Math.random() * 100) + 5,
      subject: "",
      description: "",
      requester: "",
      type: "",
      status: "",
      startDate: "",
      expectedEndDate: "",
      remark: ""
    };
  }

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      ...state,
      task: {
        ...state.task,
        [name]: isNaN(value) ? value : eval(value)
      }
    }));
  };

  formSubmit = e => {
    e.preventDefault();

    if (this.state.isEditing) {
      this.props.dispatch(editTask(this.state.task));
    } else {
      this.props.dispatch(addTask(this.state.task));
    }

    this.setState({ redirectToHome: true });
  };

  render() {
    return (
      <div className="border-spacing">
        {this.state.redirectToHome ? <Redirect to="/" /> : ""}

        <h3>New Task</h3>
        <form onSubmit={this.formSubmit}>
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              value={this.state.task.subject}
              onChange={this.onInputChange}
              id="subject"
              name="subject"
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              value={this.state.task.description}
              onChange={this.onInputChange}
              id="description"
              name="description"
              cols="30"
              rows="8"
            />
          </div>
          <div>
            <label htmlFor="requester">Requester:</label>
            <input
              type="text"
              value={this.state.task.requester}
              onChange={this.onInputChange}
              id="requester"
              name="requester"
            />
          </div>
          <div>
            <label htmlFor="type-voc">Type:</label>

            <label htmlFor="type-voc">
              <input
                checked={this.state.task.type === 1}
                onChange={this.onInputChange}
                type="radio"
                id="type-voc"
                name="type"
                value="1"
              />
              VOC
            </label>

            <label htmlFor="type-issue">
              <input
                checked={this.state.task.type === 2}
                onChange={this.onInputChange}
                type="radio"
                id="type-issue"
                name="type"
                value="2"
              />
              Issue
            </label>
          </div>

          <div>
            <label htmlFor="status-plan">Current Status:</label>

            <label htmlFor="status-plan">
              <input
                checked={this.state.task.status === 1}
                onChange={this.onInputChange}
                type="radio"
                id="status-plan"
                name="status"
                value="1"
              />{" "}
              Plan
            </label>

            <label htmlFor="status-progress">
              <input
                checked={this.state.task.status === 2}
                onChange={this.onInputChange}
                type="radio"
                id="status-progress"
                name="status"
                value="2"
              />{" "}
              In Progress
            </label>

            <label htmlFor="status-done">
              <input
                checked={this.state.task.status === 3}
                onChange={this.onInputChange}
                type="radio"
                id="status-done"
                name="status"
                value="3"
              />{" "}
              Done
            </label>
          </div>

          <div>
            <label htmlFor="start-date">Start Date:</label>
            <input
              type="text"
              value={this.state.task.startDate}
              onChange={this.onInputChange}
              id="start-date"
              name="startDate"
            />
          </div>

          <div>
            <label htmlFor="expected-end-date">Expected End Date:</label>
            <input
              type="text"
              value={this.state.task.expectedEndDate}
              onChange={this.onInputChange}
              id="expected-end-date"
              name="expectedEndDate"
            />
          </div>

          <div>
            <label htmlFor="remark">Remark:</label>
            <textarea
              value={this.state.task.remark}
              onChange={this.onInputChange}
              id="remark"
              name="remark"
              cols="30"
              rows="8"
            />
          </div>

          <Link to="/">Cancel</Link>

          <button>Save</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(tasks, props) {
  const { id: taskId } = props.match.params;
  let task = {};

  if (taskId) {
    task = tasks.filter(x => x.id === eval(taskId));
  }

  return {
    task: task.length > 0 ? task[0] : null
  };
}

export default connect(mapStateToProps)(AddTask);
