import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import CreateAccount from "./CreateAccount";
import Home from "./Home";

import "./styles.css";

const index = () => {
  return (
    <Router>
      <div style={{ height: "100%" }}>
        <SiteHeader />
        <section className="site-main-section">
          <Route exact path="/" component={Home} />
          <Route path="/create-account" component={CreateAccount} />
        </section>
      </div>
    </Router>
  );
};

export default index;
