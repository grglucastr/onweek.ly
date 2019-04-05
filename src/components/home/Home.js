import React, { useState } from 'react';
import Tasks from '../tasks';
import TaskForm from '../tasks/TaskForm';
import TaskSearch from '../tasks/TaskSearch';

import { Row, Col, Modal, Button } from 'react-bootstrap';

const Home = () => {
  return(
    <>
      <Row>
        <Col sm={8}>
          <h2>Welcome Side</h2>
        </Col>
        
        <Col>
          <h2>SignUp Form</h2>
          <Button variant="primary">Sign In</Button>
        </Col>
      </Row>
    </> 
  )
}

export default Home;