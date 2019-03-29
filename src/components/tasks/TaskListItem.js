import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

import "./Task.css";
import { dateFormat } from "../../util/";

const renderBadgeTaskStatus = statusCode => {
  switch (statusCode) {
    case 1:
      return <Badge variant="secondary">Todo</Badge>;
    case 2:
      return <Badge variant="primary">In Progress</Badge>;
    case 3:
      return <Badge variant="success">Done</Badge>;
    default:
      return "";
  }
};

const renderBadgeTaskType = typeCode => {
  switch (typeCode) {
    case 1:
      return <Badge variant="info">Issue</Badge>;
    case 2:
      return <Badge variant="warning">VOC</Badge>;
    default:
      return "";
  }
};

const renderBadgeTaskDue = expectedEndDate => {
  const today = new Date();

  if(today > expectedEndDate){
    return <Badge variant="danger">Delayed</Badge>;
  }
  return <Badge variant="secondary">On Time</Badge>;
}

const TaskListItem = ({ task, onSelected }) => {
  return (
    <div onClick={() => onSelected(task)} className="mb-4">
      <Container fluid="true" className="task-item">
        <Row>
          <Col xs={12} sm={2} className="d-flex flex-column align-items-center justify-content-center">
            <div className="text-muted mt-1" style={{ height: "30px" }}>
              #{task.id}
            </div>
            <div className="bagde-area">
              {renderBadgeTaskStatus(task.status)}
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <strong className="task-item-info">{task.subject}</strong>
                <p className="text-muted font-italic">
                  {task.description.substr(0, 100)}
                  {task.description.length > 100 ? '...' : ''}
                </p>
              </Col>
            </Row>

            <Row className="text-center">
              <Col>
                <div className="task-item-info-sub border-left d-none d-sm-block">
                  <label>Requester </label>
                  <span className="text-muted">george.l</span>
                </div>
              </Col>
              <Col>
                <div className="task-item-info-sub border-left d-none d-sm-block">
                  <label>Type </label>
                  <div className="bagde-area">
                    {renderBadgeTaskType(task.type)}
                  </div>
                </div>
              </Col>
              <Col>
                <div className="task-item-info-sub border-left d-none d-sm-block">
                  <label>Date Start </label>
                  <span className="text-muted">
                    {dateFormat(task.startDate)}
                  </span>
                </div>
              </Col>
              <Col>
                <div className="task-item-info-sub border-left border-right d-none d-sm-block">
                  <label>Due Date </label>
                  <span className="text-muted">
                  {dateFormat(task.expectedEndDate)}
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={2} className="d-flex align-items-center justify-content-center">
            <div className="task-item-info bagde-area">
                { renderBadgeTaskDue(task.expectedEndDate) }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TaskListItem;
