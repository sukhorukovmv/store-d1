import React from "react";
import Cart from "./Cart";
import { connect } from "react-redux";
<<<<<<< HEAD
import { clearCart, total, cartIncrementItem, cartDecrementItem, cartRemoveItem} from "../../store/Cart/actions";
=======
import { cartIncrementItem, cartDecrementItem, cartRemoveItem} from "../../store/Cart/actions";
>>>>>>> 0e5a95a85cb25eecf20a82bbf3cc097de11c6c6c

class CartContainer extends React.Component {
  render() {
    return (
      <Cart
        cart={this.props.cart}
        cartIncrementItem={this.props.cartIncrementItem}
        cartDecrementItem={this.props.cartDecrementItem}
        cartRemoveItem={this.props.cartRemoveItem}
<<<<<<< HEAD
        clearCart={this.props.clearCart}
        total={this.props.total}
=======
>>>>>>> 0e5a95a85cb25eecf20a82bbf3cc097de11c6c6c
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
<<<<<<< HEAD
  cartRemoveItem,
  clearCart,
  total
=======
  cartRemoveItem
>>>>>>> 0e5a95a85cb25eecf20a82bbf3cc097de11c6c6c
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
