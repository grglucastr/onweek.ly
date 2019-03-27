import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const TaskListItem = ({task}) => {
  return(
    <>
      <div key={task.id} className="task-list-item">
        <Container fluid="true">
          <Row>
            <Col sm={1}></Col>
            <Col>sadfhakjsdfhjak</Col>
            <Col>adsfasdf</Col>
          </Row>
          
        </Container>
      </div>
    </>
  )
}

export default TaskListItem;