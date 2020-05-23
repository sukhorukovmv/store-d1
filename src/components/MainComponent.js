import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {changeFirstName, changeSecondName} from '../store/actions';

function MainComponent(props) {
  const { firstName, secondName, changeFirstName, changeSecondName } = props;
  return (
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
  );
}

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

export default connect(putStateToProps, putActionsToProps)(MainComponent);
