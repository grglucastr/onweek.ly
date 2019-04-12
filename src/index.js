import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/app";
import taskReducer from "./reducers/tasks";

import "bootstrap/dist/css/bootstrap.css";
import "./Base.css";

import Site from './components/site';

const store = createStore(taskReducer);

const isAuthenticated = false;

ReactDOM.render(
  (isAuthenticated ? <Provider store={store}><App /></Provider> : <Site />),
  document.getElementById("root")
);
