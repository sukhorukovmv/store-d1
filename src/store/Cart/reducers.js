//import { AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT } from "./actions";
import { CART_DECREMENT, CART_INCREMENT, CART_REMOVE_ITEM, CLEAR_CART, TOTAL } from "./actions";
const defualtState = {
  cart: [
    {
      productId: 1,
      productCount: 1,
    },
    {
      productId: 2,
      productCount: 1,
    },
  ],
  cartTotal: 0,
};

const increment = (cart, id) => {
  let index = cart.findIndex((item) => item.productId === id);
  cart[index].productCount += 1;
  return cart;
};

const removeItem = (cart, id) => {
  return cart.filter((item) => item.productId !== id);
};

const decrement = (cart, id) => {
  let index = cart.findIndex((item) => item.productId === id);
  cart[index].productCount -= 1;
  if (cart[index].productCount <= 0) {
    return removeItem(cart, id);
  }
  return cart;
};

export const cartReducer = (state = defualtState, action) => {
  switch (action.type) {
    case CART_INCREMENT:
      return {
        ...state,
        cart: [...increment(state.cart, action.payload)],
      };
    case CART_DECREMENT:
      return {
        ...state,
        cart: [...decrement(state.cart, action.payload)],
      };
    case CART_REMOVE_ITEM: {
      return {
        ...state,
        cart: [...removeItem(state.cart, action.payload)],
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    case TOTAL: { return {
        ...state,
        cartTotal: 100,
      };
    }
    default:
      return state;
  }
};
