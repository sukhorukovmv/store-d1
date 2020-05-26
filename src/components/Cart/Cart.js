import React from "react";
import Title from "../Title";
import CartColumnns from "./CartColumns.js";
import EmptyCart from "./EmptyCart.js";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default class Cart extends React.Component {
 // constructor(props) {
 //   super(props);
 //   this.onEmailChange = this.onEmailChange.bind(this);
 //   this.onPasswordChange = this.onPasswordChange.bind(this);
 // }
 // onEmailChange(event) {
 //   this.props.setEmailText(event.target.value);
 // }

//  onPasswordChange(event) {
//    this.props.setPasswordText(event.target.value);
//  }
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = this.props;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="ваша" title="корзина" />;
                  <CartColumnns />;
                  <CartList value={this.props} />;
                  <CartTotals value={this.props} />;
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}
/*
import React from "react";

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }
  onEmailChange(event) {
    this.props.setEmailText(event.target.value);
  }

  onPasswordChange(event) {
    this.props.setPasswordText(event.target.value);
  }

  render() {
    return (
      <form className="form-signin">
        <h2 className="form-signin-heading"> Please sign in </h2>
        <input
          type="text"
          name="login"
          autoComplete="off"
          className="form-control"
          placeholder="Email address"
          value={this.props.email}
          onChange={this.onEmailChange}
        />
        <input
          type="password"
          name="password"
          autoComplete="off"
          className="form-control"
          placeholder="Password"
          value={this.props.password}
          onChange={this.onPasswordChange}
        />
        <button className="btn btn-lg btn-primary btn-block" type="button">
          {" "}
          Sign in{" "}
        </button>
      </form>
    );
  }
}
*/