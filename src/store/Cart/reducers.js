//import { AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT } from "./actions";
import { CART_DECREMENT, CART_INCREMENT, CART_REMOVE_ITEM } from "./actions";
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
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === id) {
      cart[i].productCount += 1;
    }
  }
};

export const cartReducer = (state = defualtState, action) => {
  switch (action.type) {
    case CART_INCREMENT: {
      let cart = [...state.cart];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].productId === action.payload) {
          cart[i].productCount += 1;
        }
        console.log(cart[i]);
      }
      increment(...state.cart, action.payload);
      return {
        ...state,
        cart: [...cart],
      };
    }
    case CART_DECREMENT: {
      let cart = [...state.cart];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].productId === action.payload) {
          cart[i].productCount -= 1;
        }
        console.log(cart[i]);
      }
      return {
        ...state,
        cart: [...cart],
      };
    }
    case CART_REMOVE_ITEM: {
      let cart = [...state.cart];
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].productId === action.payload) {
          cart[i].productCount -= 1;
        }
        console.log(cart[i]);
      }
      return {
        ...state,
        cart: [...cart],
      };
    }
    default:
      return state;
  }
};
