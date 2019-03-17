import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addTask, editTask } from "../actions/tasks";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddTask extends React.Component {
  state = {
    task: this.props.task ? this.props.task : this.initialTask(),
    redirectToHome: false,
    isEditing: this.props.task ? true : false
  };

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
        [name]: isNaN(value) ? value : parseInt(value)
      }
    }));
  };

  handleStartDateChange = (e) => {
    this.setState(state => ({
      ...state,
      task: {
        ...state.task,
        startDate: e
      }
    }));
  }

  handleEndDateChange = (e) => {
    this.setState(state => ({
      ...state,
      task: {
        ...state.task,
        expectedEndDate: e
      }
    }));
  }

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
      <Row>
        <Col>
          <div style={{ padding: 10 }}>
            {this.state.redirectToHome ? <Redirect to="/" /> : ""}

            <Form
              onSubmit={this.formSubmit}
              style={{ width: "85%", marginTop: "20px", marginLeft: "15px" }}
            >
              <h3>Task Info Details</h3>
              <Form.Group>
                <Form.Label htmlFor="subject">Subject:</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.task.subject}
                  onChange={this.onInputChange}
                  id="subject"
                  name="subject"
                  placeholder="Fix Access Point"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="description">Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  value={this.state.task.description}
                  onChange={this.onInputChange}
                  id="description"
                  name="description"
                  cols="30"
                  rows="4"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="requester">Requester:</Form.Label>
                <Form.Control
                  id="requester"
                  name="requester"
                  maxLength={15}
                  style={{ width: "30%" }}
                  value={this.state.task.requester}
                  onChange={this.onInputChange}
                />
                <Form.Text>Employee No. or MySingle ID</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="type-voc">Type:</Form.Label>
                <div>
                  <ToggleButtonGroup type="radio" name="type" defaultValue={1}>
                    <ToggleButton onChange={this.onInputChange} value={1}>
                      VOC
                    </ToggleButton>
                    <ToggleButton onChange={this.onInputChange} value={2}>
                      Issue
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="status-plan">Current Status:</Form.Label>
                <div>
                  <ToggleButtonGroup
                    type="radio"
                    name="status"
                    id="status-plan"
                    defaultValue={1}
                  >
                    <ToggleButton onChange={this.onInputChange} value={1}>
                      Plan
                    </ToggleButton>
                    <ToggleButton onChange={this.onInputChange} value={2}>
                      In Progress
                    </ToggleButton>
                    <ToggleButton onChange={this.onInputChange} value={3}>
                      Done
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="start-date">Start Date:</Form.Label>
                <div>
                  <DatePicker
                    id="start-date"
                    name="startDate"
                    type="text"
                    className="form-control"
                    dateFormat="yyyy-MM-dd"
                    selected={this.state.task.startDate}
                    onChange={this.handleStartDateChange}
                  />
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="expected-end-date">Expected End Date:</Form.Label>
                <div>
                  <DatePicker
                    id="expected-end-date"
                    name="expectedEndDate"
                    type="text"
                    className="form-control"
                    dateFormat="yyyy-MM-dd"
                    selected={this.state.task.expectedEndDate}
                    onChange={this.handleEndDateChange}
                  />
                </div>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="remark">Remark:</Form.Label>
                <Form.Control
                  as="textarea"
                  value={this.state.task.remark}
                  onChange={this.onInputChange}
                  id="remark"
                  name="remark"
                  cols="30"
                  rows="4"
                />
              </Form.Group>

              <Row>
                <Col>
                  <Button
                    variant="secondary"
                    onClick={() => this.props.history.push("/")}
                  >
                    Cancel
                  </Button>
                </Col>

                <Col style={{ textAlign: "right" }}>
                  <Button variant="primary">Save</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
        <Col>&nbsp;</Col>
      </Row>
    );
  }
}

function mapStateToProps(tasks, props) {
  const { id: taskId } = props.match.params;
  let task = {};

  if (taskId) {
    task = tasks.filter(x => x.id === parseInt(taskId));
  }

  return {
    task: task.length > 0 ? task[0] : null
  };
}

export default connect(mapStateToProps)(AddTask);
