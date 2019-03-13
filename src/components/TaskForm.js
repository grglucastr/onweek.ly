import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addTask } from "../actions/tasks";
import "./Base.css";

class AddTask extends React.Component {
  state = {
    task: {
      subject: "",
      description: "",
      requester: "",
      type: "",
      status: "",
      startDate: "",
      expectedEndDate: "",
      remark: ""
    },
    redirectToHome: false
  };

  onInputChange = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      ...state,
      task: {
        ...state.task,
        id: Math.floor(Math.random() * 100) + 5,
        [name]: isNaN(value) ? value : eval(value)
      }
    }));
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.dispatch(addTask(this.state.task));
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
              value={this.state.task.startDate}
              onChange={this.onInputChange}
              id="start-date"
              name="startDate"
            />
          </div>

          <div>
            <label htmlFor="expected-end-date">Expected End Date:</label>
            <input
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

export default connect()(AddTask);
