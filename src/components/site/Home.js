import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="d-none d-sm-none d-md-block bg-pic"> </div>
      <div className="home-container-item">
        <div className="mt-1">
          <LoginForm showHeader={true} />
        </div>
        <div className="mt-5 text-center">
          <h2>Not a member yet?</h2>
          <Link to="/create-account">
            <button className="btn btn-success"> Create Account </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
