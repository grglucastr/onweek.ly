import React, { Component } from "react";
import TaskListItem from "./TaskListItem";
import { connect } from "react-redux";

import {Modal, Button} from 'react-bootstrap';
import TaskDetailInfo from './TaskDetailInfo';

import { deleteTask } from './actions';

import { Container, Row, Col } from "react-bootstrap";

class TaskList extends Component {

  state = {
    task: {},
    showModal: false
  };

  showTaskDetail = (task) =>{
    this.setState(state => ({
      ...state,
      showModal: true,
      task
    }))
  }

  deleteTask = taskId => {
    const proceed = window.confirm('Are you sure you want to delete this task?');
    if( proceed ){
      this.props.dispatch(deleteTask(taskId))
      this.setState({showModal: false});
    }
  }

  render() {
    const { tasks } = this.props;
    const { task } = this.state;

    if(tasks.length === 0) {
      return(
        <div className="task-list-container mt-4">
          <Container fluid="true" className="task-item text-center">
            <Row>
              <Col> {tasks.length} tasks found. </Col>
            </Row>
          </Container>

        </div>
      )
    }

    return (
      <>
        <div className="task-list-container mt-4">
          <div className="text-right text-muted pr-1">
            {tasks.length}
            { tasks.length === 1 ? ' result' : ' results' }
             
          </div>
          {tasks.map(task => (
            <TaskListItem
              key={task.id}
              task={task}
              onSelected={(task) => this.showTaskDetail(task)}
            />
          ))}
        </div>


        <Modal
          size="lg"
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}>
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
              onClick={() => this.setState({ showModal: false })}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

function mapStateToProps(tasks) {
  return { tasks };
}

export default connect(mapStateToProps)(TaskList);
