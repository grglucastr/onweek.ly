import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Row, Col, Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import { filterTaskByStatus, filterTaskByTerm, listTasks } from './actions';
import tasks from '../../../util/_DATA';

class TaskSearch extends Component {
  state = {
    term: '',
    status: 0,
    type: 0,
  }

  onStatusChange = selectedStatus => {
    this.setState({status: selectedStatus});
    if(selectedStatus === 0){
      this.props.dispatch(listTasks(tasks));
    }else{
      this.props.dispatch(listTasks(tasks));
      this.props.dispatch(filterTaskByStatus(selectedStatus));
    } 
  }

  onTermChange = e => {
    const term = e.target.value;
    this.setState({ term });

    if(term === ""){
      this.props.dispatch(listTasks(tasks));
    }

    this.props.dispatch(filterTaskByTerm(term));
  }


  render(){
    return (
      <>
        <Row>
          <Col>
            <ToggleButtonGroup
              type="radio"
              name="type"
              onChange={this.onStatusChange}
              defaultValue={this.state.status}>
              <ToggleButton variant="light" value={0}>
                All
              </ToggleButton>
              <ToggleButton variant="light" value={1}>
                To Do
              </ToggleButton>
              <ToggleButton variant="light" value={2}>
                In Progress
              </ToggleButton>
              <ToggleButton variant="light"   value={3}>
                Done
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col className="text-right">
            <Button onClick={() => this.props.onAddTask()}>Add Task</Button>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <input
              className="form-control mt-2"
              placeholder="#Task No., Task Title or Task Requester"
              value={this.state.term}
              onChange={this.onTermChange}
            />
          </Col>
        </Row>
      </>
    )
  }
}

export default connect()(TaskSearch);