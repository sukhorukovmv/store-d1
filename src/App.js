import React from "react";
import { Switch, Route, Router } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./components/Modal";
import RouterAdmin from "./RouterAdmin";

import { createStore, bindActionCreators } from "redux";
import { connect } from "react-redux";

const initialState = {
  firstName: "Oleg",
  secondName: "Pavlov",
};

const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";

const changeFirstName = (newFirstName) => {
  return {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: newFirstName,
  };
};

const changeSecondName = (newSecondName) => {
  return {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: newSecondName,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload };
  }
  return state;
};

export const store = createStore(rootReducer);

export const putStateToProps = (state) => {
  return {
    firstName: state.firstName,
    secondName: state.secondName,
  };
};

export const putActionsToProps = (dispatch) => {
  return {
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch),
  };
};

export default function App(props) {
  const { firstName, secondName, changeFirstName, changeSecondName } = props;
  return (
    <React.Fragment>
      <RouterAdmin />
      <Modal />
      <div>
        <div>
          <input
            type="text"
            value={firstName}
            placeholder="First name"
            onChange={(event) => {
              changeFirstName(event.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            value={secondName}
            placeholder="Second name"
            onChange={(event) => {
              changeSecondName(event.target.value);
            }}
          />
        </div>
        <div>{firstName + " " + secondName}</div>
      </div>
    </React.Fragment>
  );
}
