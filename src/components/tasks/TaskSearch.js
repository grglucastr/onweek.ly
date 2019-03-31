import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Row, Col, Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import { filterTaskByStatus, filterTaskByType, listTasks } from './actions';
import tasks from '../../util/_DATA';

class TaskSearch extends Component {
  state = {
    term: '',
    status: 1,
    type:1,
  }

  onTypeChange = selectedType => {
    this.setState({status: selectedType});
    if(selectedType === 0){
      this.props.dispatch(listTasks(tasks));
    }else{
      this.props.dispatch(filterTaskByType(selectedType));
    } 
  }

  onStatusChange = selectedStatus => {
    this.setState({status: selectedStatus});
    if(selectedStatus === 0){
      this.props.dispatch(listTasks(tasks));
    }else{
      this.props.dispatch(filterTaskByStatus(selectedStatus));
    } 
  }


  render(){
    return (
      <>
        <Row>
          <Col sm={3} className="pl-0">
            <ToggleButtonGroup
              type="radio"
              name="type"
              onChange={this.onTypeChange}
              defaultValue={this.state.type}>
              <ToggleButton variant="light"  value={0}>
                All
              </ToggleButton>
              <ToggleButton variant="light"  value={1}>
                VOC
              </ToggleButton>
              <ToggleButton variant="light"   value={2}>
                Issue
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
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
            />
          </Col>
        </Row>
      </>
    )
  }
}

export default connect()(TaskSearch);