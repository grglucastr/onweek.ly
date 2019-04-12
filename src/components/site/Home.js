import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

import LoginForm from './LoginForm';

const Home = () =>  {
  return(
    <Container fluid={true} className="hero-container">
      <Row>
        <Col xs={8}>
          <h2>Your weekly now well managed</h2>
        </Col>

        <Col>
          <Container>
            <Row>
              <Col>
                <LoginForm />
              </Col>
            </Row>

            <Row>
              <Col>
                <h2>Not a member yet?</h2>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button variant="success">Create Account</Button>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;