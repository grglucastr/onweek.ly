import React, { useState } from 'react';
import Login from '../login';

import { Row, Col, Modal, Button } from 'react-bootstrap';

const Home = () => {
  return(
    <>
      <Row>
        <Col sm={8}>
          <h2>Welcome Side</h2>
        </Col>
        
        <Col>
          <Row>
            <Col>
              <div style={{padding:'5px', width: '80%'}}>
                <h3 className="text-center">Have an Account?</h3>
                <Login showHeader={false}/>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div style={{padding:'5px', width: '80%'}}>
                <h3 className="text-center">Not a member yet?</h3>
                <Button variant="success" style={{display: 'block', width:'60%', margin:'auto', marginTop:'2em'}}>Sign In</Button>
              </div>
            </Col>
          </Row>


          
        </Col>
      </Row>
    </> 
  )
}

export default Home;