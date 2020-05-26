//import {ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME} from './actionsConst';
import { combineReducers } from "redux";
import { authReducer } from "./Auth/reducers";
import { cartReducer } from "./Cart/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer
});

/* const initialState = {
  firstName: "Oleg",
  secondName: "Pavlov",
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload };
  }
  return state;
}; */
