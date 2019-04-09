import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log("Submiting login form");
    console.log("this.state :", this.state);
  };

  onValueChange = e => {
    const { name, value } = e.target;
    this.setState(state => ({
      ...state,
      [name]: value
    }));
  };

  render() {
    const { showHeader } = this.props;
    return (
      <div className="form-container">
        {showHeader ? (
          <div className="form-header">
            <h3>Login</h3>
          </div>
        ) : (
          ""
        )}

        <form onSubmit={this.onFormSubmit}>
          <Row>
            <Col>
              <div className="form-group">
                <label htmlFor="email">E-mail: </label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="me@example.com"
                  onChange={this.onValueChange}
                  value={this.state.email}
                />
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
                  onChange={this.onValueChange}
                  value={this.state.password}
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
                <Button variant="primary">Sign In</Button>
              </div>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default LoginForm;
