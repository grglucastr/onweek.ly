import React from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const TasksStatusCard = props => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <ListGroup>
          {props.tasks.map(task => (
            <ListGroup.Item action key={task.id} href="#">
              {task.subject}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TasksStatusCard;
