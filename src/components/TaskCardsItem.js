import React from "react"

import { withRouter } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import TaskDetailInfo from './TaskDetailInfo';



class TaskCardsItem extends React.Component {
  state = {
    showModal: false
  }

  editTask = (taskId) => {
    this.props.history.push(`/tasks/${taskId}/edit`)
  }

  render() {
    const { task }  = this.props;
    return (
      <>
        <ListGroup.Item
          action
          onClick={() => this.setState({showModal: true})}>
          {task.subject}
        </ListGroup.Item>

        <Modal
          size="lg"
          show={this.state.showModal}
          onHide={() => this.setState({showModal: false})}>
          <Modal.Header>
            <strong>Tasks Details</strong>
          </Modal.Header>

          <Modal.Body>
            <TaskDetailInfo 
              task={task} 
              onEditTask={(taskId) => this.editTask(taskId)} />
          </Modal.Body>

          <Modal.Footer>
            <Button 
              variant="secondary" 
              onClick={() => this.setState({showModal: false})}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

      </>
    )
  }
}

export default withRouter(TaskCardsItem);
