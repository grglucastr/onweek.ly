import React from "react"

import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import TaskDetailInfo from './TaskDetailInfo';



class TaskCardsItem extends React.Component {
  state = {
    showModal: false
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
          show={this.state.showModal}
          onHide={() => this.setState({showModal: false})}>
          <Modal.Header>
            <strong>Tasks Details</strong>
          </Modal.Header>

          <Modal.Body>
            <TaskDetailInfo task={task}  />
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

export default TaskCardsItem;
