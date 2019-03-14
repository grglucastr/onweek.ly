import React from "react";
import { Link, Redirect } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function AppHeader(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>OnWeek.ly</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link as="span">Home</Nav.Link>
          </Link>

          <Link to="/tasks">
            <Nav.Link as="span">Tasks</Nav.Link>
          </Link>

          <Link to="/add-tasks">
            <Nav.Link as="span">Add Task</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default AppHeader;
