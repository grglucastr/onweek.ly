import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import LoginForm from './LoginForm';

const Home = () =>  {
  return(
    <Container fluid={true} className="hero-container">
      <Row>
        <Col xs={8} className="d-none d-sm-none d-md-block">
          <h2>Your weekly now well managed</h2>
        </Col>

        <Col>
          <Container>
            <Row>
              <Col>
                <div className="mt-3">
                  <LoginForm  showHeader={true}/>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <h2 className="mt-5 text-center" >Not a member yet?</h2>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <Button variant="success" className="mt-2">Create Account</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;