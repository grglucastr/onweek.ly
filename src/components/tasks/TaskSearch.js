import React, { Component } from 'react'
import {Row, Col, Button, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'

class TaskSearch extends Component {
  state = {
    term: '',
  }

  render(){
    return (
      <>
        <Row>
          <Col sm={3} className="pl-0">
            <ToggleButtonGroup
              type="radio"
              name="type"
              defaultValue={1}>
              <ToggleButton variant="light"  value={1}>
                All
              </ToggleButton>
              <ToggleButton variant="light" value={2}>
                VOC
              </ToggleButton>
              <ToggleButton variant="light"  value={3}>
                Issue
              </ToggleButton>
            </ToggleButtonGroup>
          </Col>
          <Col>
            <ToggleButtonGroup
              type="radio"
              name="type"
              defaultValue={1}>
              <ToggleButton variant="light" value={1}>
                All
              </ToggleButton>
              <ToggleButton variant="light" value={2}>
                To Do
              </ToggleButton>
              <ToggleButton variant="light" value={3}>
                In Progress
              </ToggleButton>
              <ToggleButton variant="light"   value={4}>
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

export default TaskSearch;