import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import TaskCardsItem from "./TaskCardsItem";

const TaskCards = props => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {props.description} ({props.tasks.length})
        </Card.Title>
        <ListGroup>
          {props.tasks.map(task => (
            <TaskCardsItem key={task.id} task={task} />
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TaskCards;
