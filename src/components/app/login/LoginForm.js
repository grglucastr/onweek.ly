import React from "react";


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
       

        
      </div>
    );
  }
}

export default LoginForm;
