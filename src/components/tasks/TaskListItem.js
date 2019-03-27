import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";

import "./Task.css";
import { dateFormat } from "../../util/";

const renderBadgeTaskStatus = statusCode => {
  switch (statusCode) {
    case 1:
      return <Badge variant="primary">Todo</Badge>;
    case 2:
      return <Badge variant="success">In Progress</Badge>;
    case 3:
      return <Badge variant="dark">Done</Badge>;
    default:
      return "";
  }
};

const renderBadgeTaskType = typeCode => {
  switch (typeCode) {
    case 1:
      return <Badge variant="danger">Issue</Badge>;
    case 2:
      return <Badge variant="warning">VOC</Badge>;
    default:
      return "";
  }
};

const TaskListItem = ({ task }) => {
  return (
    <div>
      <Container className="task-item">
        <Row>
          <Col xs={12} sm={2} className="p-0">
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
              </Col>
            </Row>

            <Row>
              <Col>
                <div className="task-item-info-sub">
                  <label for="">Requester: </label>
                  <span class="text-muted">george.l</span>
                </div>
              </Col>
              <Col>
                <div className="task-item-info-sub">
                  <label for="">Type: </label>
                  <div className="bagde-area">
                    {renderBadgeTaskType(task.type)}
                  </div>
                </div>
              </Col>
              <Col>
                <div className="task-item-info-sub">
                  <label for="">Date Inserted: </label>
                  <span class="text-muted">{dateFormat(task.startDate)}</span>
                </div>
              </Col>
              <Col>
                <div className="task-item-info-sub">
                  <label for="">Plan Date Start: </label>
                  <span class="text-muted">{dateFormat(task.startDate)}</span>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={2}>
            <div className="task-item-info bagde-area">
              <Badge variant="secondary" className="mt-3">
                {dateFormat(task.expectedEndDate)}
              </Badge>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TaskListItem;
