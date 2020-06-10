//import { AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT } from "./actions";
<<<<<<< HEAD
import { CART_DECREMENT, CART_INCREMENT, CART_REMOVE_ITEM, CLEAR_CART, TOTAL } from "./actions";
=======
import { CART_DECREMENT, CART_INCREMENT, CART_REMOVE_ITEM } from "./actions";
>>>>>>> 0e5a95a85cb25eecf20a82bbf3cc097de11c6c6c
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
<<<<<<< HEAD
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
=======
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].productId === id) {
      cart[i].productCount += 1;
    }
  }
>>>>>>> 0e5a95a85cb25eecf20a82bbf3cc097de11c6c6c
};

export const cartReducer = (state = defualtState, action) => {
  switch (action.type) {
<<<<<<< HEAD
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
=======
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
>>>>>>> 0e5a95a85cb25eecf20a82bbf3cc097de11c6c6c
      };
    }
    default:
      return state;
  }
};
