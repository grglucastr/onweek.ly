import React, { useState } from 'react';
import Tasks from '../tasks';
import TaskForm from '../tasks/TaskForm';

import { Button, Row, Col, Modal } from 'react-bootstrap';

const Home = () => {

  const [showModal, setShowModal]  = useState(false);


  return(
    <>
      <Row>
        <Col>
          <h5 className="mt-4">Tasks</h5>
        </Col>

        <Col className="text-right">
          <Button className="mt-4" onClick={() => setShowModal(true)}>Add Task</Button>
        </Col>
      </Row>

      <Tasks/>

      
      <Modal show={showModal}>
        <Modal.Header>
          <strong>Add new Task</strong>
        </Modal.Header>

        <Modal.Body>  
          <TaskForm onDone={() => setShowModal(false)}/>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Home;