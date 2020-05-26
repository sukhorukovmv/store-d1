export const CART_INCREMENT = 'CART_INCREMENT';
export const CART_DECREMENT = 'CART_DECREMENT';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';

export const cartIncrementItem = (value) => ({
    type: CART_INCREMENT,
    payload: value
}) 

export const cartDecrementItem = (value) => ({
    type: CART_DECREMENT,
    payload: value 
}) 

export const cartRemoveItem = (value) => ({
    type: CART_DECREMENT,
    payload: value 
}) 
   // const { increment, decrement, removeItem } = value;