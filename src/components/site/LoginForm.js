import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";


const onFormSubmit = e => {
  e.preventDefault();
  console.log("Submiting login form");
};


const LoginForm = ({ showHeader }) => {
  return(
    <div>
      {
        showHeader ? 
        (<div className="form-header"><h3>Login</h3></div>) : 
        ("")
      }
      <form onSubmit={(e) => onFormSubmit(e)}>
        <Row>
          <Col>
            <div className="form-group">
              <label htmlFor="email">E-mail: </label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="me@example.com"/>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="form-group">
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                placeholder="******"
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-left">
            <Link to="">Forgot Password</Link>
          </Col>
          <Col>
            <div className="form-group text-right">
              <Button type="submit" variant="primary">Sign In</Button>
            </div>
          </Col>
        </Row>
      </form>
    </div>
  )
}

export default LoginForm;