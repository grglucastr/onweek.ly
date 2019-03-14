import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./components/App";

import taskReducer from "./reducers/tasks";

import "bootstrap/dist/css/bootstrap.css";
import "./Base.css";

const store = createStore(taskReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
