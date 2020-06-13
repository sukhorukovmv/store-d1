import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Default from "./components/Default";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList";
import Auth from "./components/Auth/Auth";
import Modal from "./components/Modal";
import { setBooks } from "./actions/books";
import { connect } from "react-redux";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = props => {
    const { books } = props.books;
    const { setBooks } = props;
    const newBooks = [
      {
        id: 0,
        title: "Shopping card" + new Date(),
      },
    ];
    return (
      <React.Fragment>
        <div>
          <h1>{books[0].title}</h1>
          <button onClick={setBooks.bind(App, newBooks)}>Set new book</button>
        </div>
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

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setBooks: books => dispatch(setBooks(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
