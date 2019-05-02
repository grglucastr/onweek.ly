import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

const SiteHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/">
          <Navbar.Brand>OnWeek.ly</Navbar.Brand>
        </Link>
        <Nav className="mr-auto" />
        <Nav>
          <Link to="/">
            <Nav.Link as="span">Home</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <Link to="/">
            <Nav.Link as="span">About</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <Link to="/create-account">
            <Nav.Link as="span">Create Account</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <Link to="/">
            <Nav.Link as="span">Contact Support</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default SiteHeader;
