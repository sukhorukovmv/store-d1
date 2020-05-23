import React from "react";
//import { Switch, Route, Router } from "react-router-dom";
import { createStore } from "redux";
import { rootReducer } from "./store/reducers";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./components/Modal";
import RouterAdmin from "./RouterAdmin";

export const store = createStore(rootReducer);

export default function App(props) {
  return (
    <React.Fragment>
      <RouterAdmin />
      <Modal />
    </React.Fragment>
  );
}
