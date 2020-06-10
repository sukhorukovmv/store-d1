export const CART_INCREMENT = 'CART_INCREMENT';
export const CART_DECREMENT = 'CART_DECREMENT';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
<<<<<<< HEAD
export const CLEAR_CART = 'CLEAR_CART';
export const TOTAL = 'TOTAL';
=======
>>>>>>> 0e5a95a85cb25eecf20a82bbf3cc097de11c6c6c

export const cartIncrementItem = (value) => ({
    type: CART_INCREMENT,
    payload: value
}) 

export const cartDecrementItem = (value) => ({
    type: CART_DECREMENT,
    payload: value 
}) 

export const cartRemoveItem = (value) => ({
<<<<<<< HEAD
    type: CART_REMOVE_ITEM,
    payload: value 
}) 

export const clearCart = (value) => ({
    type: CLEAR_CART,
    payload: value 
}) 

export const total = (value) => ({
    type: TOTAL,
=======
    type: CART_DECREMENT,
>>>>>>> 0e5a95a85cb25eecf20a82bbf3cc097de11c6c6c
    payload: value 
}) 
   // const { increment, decrement, removeItem } = value;