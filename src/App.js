import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./components/Modal";
import RouterAdmin from "./RouterAdmin";

export default function App() {
  return (
    
    <React.Fragment>
      <RouterAdmin />
      <Modal />
    </React.Fragment>
  );
}
