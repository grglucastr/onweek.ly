import React from "react"
import ListGroup from "react-bootstrap/ListGroup";

const TaskCardsItem = ({task}) => {
  return(
   <>
    <ListGroup.Item action href={`#task_${task.id}`} onClick={() => console.log('I clicked here')}>
      {task.subject}
    </ListGroup.Item>
   </>
  )
}

export default TaskCardsItem;
