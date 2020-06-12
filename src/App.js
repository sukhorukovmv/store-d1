import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList";
import Auth from "./components/Auth/Auth";
import Test from "./components/Redux/Test";
import Modal from "./components/Modal";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App(props) {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/auth" component={Auth} />
        <Route path="/test" component={Test} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}
