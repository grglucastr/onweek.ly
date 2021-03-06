import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencilAlt,
  faTrashAlt,
  faPlayCircle,
  faCheckCircle,
  faUndoAlt
} from "@fortawesome/free-solid-svg-icons";

import { dateFormat } from "../../../util";

const renderStatusAction = (
  task,
  onTaskInProgress,
  onTaskDone,
  onTaskReopen
) => {
  switch (task.status) {
    case 1:
      return (
        <Button
          size="sm"
          variant="primary"
          onClick={() => onTaskInProgress(task)}
        >
          Start Progress <FontAwesomeIcon icon={faPlayCircle} />
        </Button>
      );
    case 2:
      return (
        <>
          <Button
            size="sm"
            variant="dark"
            className="mr-4"
            onClick={() => onTaskReopen(task)}
          >
            In Plan <FontAwesomeIcon icon={faUndoAlt} />
          </Button>
          <Button size="sm" variant="success" onClick={() => onTaskDone(task)}>
            Done <FontAwesomeIcon icon={faCheckCircle} />
          </Button>
        </>
      );
    case 3:
      return (
        <Button size="sm" variant="dark" onClick={() => onTaskReopen(task)}>
          Reopen Task <FontAwesomeIcon icon={faUndoAlt} />
        </Button>
      );
    default:
      return "";
  }
};

const renderTaskTypeBadge = task => {
  switch (task.type) {
    case 1:
      return (
        <Badge pill variant="warning">
          VOC
        </Badge>
      );
    case 2:
      return (
        <Badge pill variant="danger">
          Issue
        </Badge>
      );

    default:
      return "";
  }
};

const renderTaskStatusBadge = task => {
  switch (task.status) {
    case 1:
      return (
        <Badge pill variant="dark">
          Plan
        </Badge>
      );
    case 2:
      return (
        <Badge pill variant="primary">
          In Progress
        </Badge>
      );
    case 3:
      return (
        <Badge pill variant="success">
          Done
        </Badge>
      );
    default:
      return "";
  }
};

const TaskDetailInfo = ({
  task,
  onEditTask,
  onDeleteTask,
  onTaskInProgress,
  onTaskDone,
  onTaskReopen
}) => {
  return (
    <>
      <Row>
        <Col>
          <h3>{task.subject}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="mb-2">
            <Button
              size="sm"
              title="Edit task information details."
              variant="info"
              style={{ marginRight: "5px" }}
              onClick={() => onEditTask(task.id)}
            >
              <FontAwesomeIcon icon={faPencilAlt} /> Edit Task
            </Button>

            <Button
              size="sm"
              title="Delete this task."
              variant="danger"
              onClick={() => onDeleteTask(task.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt} /> Delete Task
            </Button>
          </div>
        </Col>
        <Col className="text-right">
          {renderStatusAction(task, onTaskInProgress, onTaskDone, onTaskReopen)}
        </Col>
      </Row>
      <Row>
        <Col style={{ padding: "0px" }}>
          <table className="mb-4 mt-4">
            <tbody>
              <tr>
                <td style={{ width: "40px" }}>
                  <strong style={{ fontSize: "12px" }}>Type: </strong>
                </td>
                <td style={{ width: "60px" }}>{renderTaskTypeBadge(task)}</td>
                <td style={{ width: "40px" }}>
                  <strong style={{ fontSize: "12px" }}>Status: </strong>
                </td>
                <td style={{ width: "90px" }}>{renderTaskStatusBadge(task)}</td>
                <td style={{ width: "70px" }}>
                  <strong style={{ fontSize: "12px" }}>Start Date: </strong>
                </td>
                <td style={{ width: "90px" }}>
                  <Badge pill variant="secondary">
                    {dateFormat(task.startDate)}
                  </Badge>
                </td>
                <td style={{ width: "70px" }}>
                  <strong style={{ fontSize: "12px" }}>Due Date: </strong>
                </td>
                <td style={{ width: "80px" }}>
                  <Badge pill variant="secondary">
                    {dateFormat(task.expectedEndDate)}
                  </Badge>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ width: "80%", borderBottom: "1px solid #ccc" }}>
            <strong style={{ fontSize: "12px" }}>Task Description</strong>
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{task.description}</p>
        </Col>
      </Row>
    </>
  );
};

export default TaskDetailInfo;
