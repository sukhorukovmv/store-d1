import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import Details from './components/Details';
import Cart from './components/Cart/';
import ProductList from './components/ProductList';
import Modal from './components/Modal';
import Auth from './components/Auth/Auth'

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/auth" component={Auth} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}
