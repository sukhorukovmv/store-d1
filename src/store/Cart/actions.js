export const CART_INCREMENT = 'CART_INCREMENT';
export const CART_DECREMENT = 'CART_DECREMENT';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const TOTAL = 'TOTAL';

export const cartIncrementItem = (value) => ({
    type: CART_INCREMENT,
    payload: value
}) 

export const cartDecrementItem = (value) => ({
    type: CART_DECREMENT,
    payload: value 
}) 

export const cartRemoveItem = (value) => ({
    type: CART_REMOVE_ITEM,
    payload: value 
}) 

export const clearCart = (value) => ({
    type: CLEAR_CART,
    payload: value 
}) 

export const total = (value) => ({
    type: TOTAL,
    payload: value 
}) 
   // const { increment, decrement, removeItem } = value;