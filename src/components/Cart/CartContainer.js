import React from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
import { cartIncrementItem, cartDecrementItem, cartRemoveItem} from "../../store/Cart/actions";

class CartContainer extends React.Component {
  render() {
    return (
      <Cart
        cart={this.props.cart}
        cartIncrementItem={this.props.cartIncrementItem}
        cartDecrementItem={this.props.cartDecrementItem}
        cartRemoveItem={this.props.cartRemoveItem}
      ></Cart>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.cart.value,
    cart: state.cart.cart
  };
};

const mapDispatchToProps = {
  cartIncrementItem,
  cartDecrementItem,
  cartRemoveItem
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
