import React from "react";

import { Row, Col, Container, Button } from "react-bootstrap";

class SignupForm extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h3>Create an Account</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <form id="sign-up-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="text"
                  placeholder="me@example.com"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <Button variant="primary">Sign Up</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignupForm;
