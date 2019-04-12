import React, { useState } from 'react';
import Tasks from '../tasks';
import TaskForm from '../tasks/TaskForm';
import TaskSearch from '../tasks/TaskSearch';

import { Row, Col, Modal } from 'react-bootstrap';

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return(
    <>
      <Row>
        <Col>
          <h5 className="mt-4">Tasks</h5>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="mt-2, rounded" style={{backgroundColor: '#efefef', padding: '10px'}}>
            <TaskSearch onAddTask={() => setShowModal(true)}/>
          </div>
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

export default Dashboard;