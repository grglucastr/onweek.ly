import React from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function AppHeader(props) {
  return (
    <Container>
      <Row>
        <Col>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tasks/">Tasks</Link>
            </li>
            <li>
              <Link to="/add-tasks/">Add Task</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <Button variant="primary">Primary</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AppHeader;
