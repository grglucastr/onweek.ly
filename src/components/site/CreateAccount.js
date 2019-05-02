import React, { useState } from "react";

import "./styles.css";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const onSubmitForm = e => {
    e.preventDefault();
    const userAccount = {
      name,
      email,
      pass,
      passConfirm
    };

    console.log(userAccount);
  };

  return (
    <div className="create-account-grid">
      <div className="form-item">
        <h2>Create Account</h2>
        <form onSubmit={e => onSubmitForm(e)}>
          <div className="form-group">
            <label htmlFor="name"> Name: </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email"> E-mail: </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="me@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password"> Password: </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="*********"
              value={pass}
              onChange={e => setPass(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password"> Confirm Password: </label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              placeholder="*******"
              value={passConfirm}
              onChange={e => setPassConfirm(e.target.value)}
            />
          </div>

          <div className="form-group text-right">
            <button className="btn btn-primary mt-4">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
