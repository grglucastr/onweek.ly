import React from "react";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import TaskDetailInfo from "./TaskDetailInfo";

import { deleteTask, editTask } from "../actions/tasks";

class TaskCardsItem extends React.Component {
  state = {
    showModal: false
  };

  onTaskDone = task => {
    const newTask = {
      ...task,
      status: 3
    };

    this.props.dispatch(editTask(newTask));
  };

  onTaskInProgress = task => {
    const newTask = {
      ...task,
      status: 2
    };

    this.props.dispatch(editTask(newTask));
  };

  onTaskReopen = task => {
    const newTask = {
      ...task,
      status: 1
    };

    this.props.dispatch(editTask(newTask));
  };

  editTask = taskId => {
    this.props.history.push(`/tasks/${taskId}/edit`);
  };

  deleteTask = taskId => {
    const confirm = window.confirm("Confirm delete this task?");

    if (confirm) {
      this.props.dispatch(deleteTask(taskId));
      this.setState({ showModal: false });
    }
  };

  render() {
    const { task } = this.props;
    return (
      <>
        <ListGroup.Item
          action
          onClick={() => this.setState({ showModal: true })}
        >
          {task.subject}
        </ListGroup.Item>

        <Modal
          size="lg"
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header>
            <strong>Tasks Details</strong>
          </Modal.Header>

          <Modal.Body>
            <TaskDetailInfo
              task={task}
              onEditTask={taskId => this.editTask(taskId)}
              onDeleteTask={taskId => this.deleteTask(taskId)}
              onTaskDone={task => this.onTaskDone(task)}
              onTaskInProgress={() => this.onTaskInProgress(task)}
              onTaskReopen={() => this.onTaskReopen(task)}
            />
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => this.setState({ showModal: false })}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(connect()(TaskCardsItem));
