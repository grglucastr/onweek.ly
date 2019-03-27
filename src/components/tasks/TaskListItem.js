import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import "./Task.css"
import { dateFormat } from '../../util/';

const TaskListItem = ({task}) => {
  return(
    <div className="task-item">
      <Container>
        <Row>
          <Col xs={12} sm={1}>
            <span className="task-item-info">{task.status}</span>
          </Col>
          <Col>
            <div>
              <span className="task-item-info">{task.subject}</span>
              
            </div>
          </Col>
          <Col xs={12} sm={1}>
            <span className="task-item-info">{dateFormat(task.expectedEndDate)}</span>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TaskListItem;
