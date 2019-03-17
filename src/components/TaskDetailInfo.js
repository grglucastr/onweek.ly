import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt, faPlayCircle, faCheckCircle, faUndoAlt } from "@fortawesome/free-solid-svg-icons";


const renderStatusAction = (task) => {
  switch (task.status) {
    case 1:
      return (
        <Button
          size="sm"
          variant="primary"
          onClick={() => console.log('add action to start the progress')}>
            Start Progress <FontAwesomeIcon icon={faPlayCircle} />
        </Button>
        )

    case 2:
      return (
        <Button
          size="sm"
          variant="success"
          onClick={() => console.log('add action to start the progress')}>
            Done <FontAwesomeIcon icon={faCheckCircle} />
        </Button>
      )

    case 3:
      return (
        <Button
          size="sm"
          variant="dark"
          onClick={() => console.log('add action to start the progress')}>
            Reopen Task <FontAwesomeIcon icon={faUndoAlt} />
        </Button>
      )
    
    default:
        return "";
  }
}

const TaskDetailInfo = ({ task, onEditTask }) => {
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
              style={{marginRight: '5px'}}
              onClick={() => onEditTask(task.id)}>
               <FontAwesomeIcon icon={ faPencilAlt } />
            </Button>

            <Button
              size="sm" 
              title="Delete this task."
              variant="danger"
              onClick={() => console.log('delete action')}>
               <FontAwesomeIcon icon={ faTrashAlt } />
            </Button>

          </div>
        </Col>

        <Col className="text-right">
          {renderStatusAction(task)}
        </Col>
      </Row>

      <Row>
        <Col sm={4} style={{ padding: '0px' }}>
          <table className="mb-2">
            <tbody>
              <tr>
                <td><strong style={{ fontSize: '12px' }}>Start Date: </strong></td>
                <td><strong style={{ fontSize: '12px' }}>Due Date: </strong></td>
              </tr>
              <tr>
                <td><Badge pill variant="secondary">{task.startDate}</Badge></td>
                <td><Badge pill variant="secondary">{task.expectedEndDate}</Badge></td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>

      <Row>
        <Col>
          <p style={{width:'80%', borderBottom:'1px solid #ccc'}}>
            <strong style={{ fontSize: '12px' }}>Task Description</strong>
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

}

export default TaskDetailInfo