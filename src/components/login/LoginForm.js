import React from 'react';

class LoginForm extends React.Component {

  state = {
    email:'',
    password: ''
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submiting login form');
    console.log('this.state :', this.state);
  }

  onValueChange = (e) => {

    const { name, value } = e.target;
    this.setState(state => ({
      ...state,
      [name]:value
    }));
  }

  render(){
    return(
      <div className="form-container">
        <div className="form-header">
          <h3>Login</h3>
        </div>

        <form onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail: </label>
            <input type="text" 
                   className="form-control" 
                   name="email" 
                   id="email"  
                   placeholder="me@example.com"
                   onChange={this.onValueChange}
                   value={this.state.email}
                   />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="password" 
                   className="form-control"
                   name="password"
                   id="password"
                   placeholder="******"
                   onChange={this.onValueChange}
                   value={this.state.password}
                   />
          </div>

          <div className="form-group text-right">
            <button className="btn btn-primary">Sign In</button>
          </div>

        </form>
      </div>
      
    )
  }

}

export default LoginForm;