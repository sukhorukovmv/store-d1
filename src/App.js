import React from "react";
//import { Switch, Route, Router } from "react-router-dom";
import { createStore } from "redux";
import { rootReducer } from "./store/reducers";
import { Provider } from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./components/Modal";
//import RouterAdmin from "./RouterAdmin";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import Details from "./components/Details";
import CartContainer from "./components/Cart/CartContainer";
import ProductList from "./components/ProductList";
import AuthContainer from "./components/Auth/AuthContainer";
import Test from "./components/Redux/Test";

const store = createStore(rootReducer);

export default function App(props) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={CartContainer} />
          <Route path="/auth" component={AuthContainer} />
          <Route path="/test" component={Test} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </Provider>
    </React.Fragment>
  );
}
