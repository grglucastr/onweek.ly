import React from "react";
import Login from "../login";

import { Link  } from 'react-router-dom';

import { Row, Col, Button } from "react-bootstrap";

import "./Home.css";

const Home = () => {
  return (
    <div className="panel">
      <Row>
        <Col sm={8}>
          <div className="panel-welcome-side">


          </div>
        </Col>

        <Col>
          <Row>
            <Col>
              <div style={{ padding: "5px", width: "80%" }}>
                <h3 className="text-center">Have an Account?</h3>
                <Login showHeader={false} />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div style={{ padding: "5px", width: "80%", textAlign: 'center' }}>
                <h3 className="text-center">Not a member yet?</h3>
                <Button variant="success" className="btn-sign-up">
                  Sign Up
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
