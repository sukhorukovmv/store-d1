import React from "react";
import Auth from "./Auth";
import { connect } from "react-redux";
import { setPasswordText, setEmailText } from "../../store/Auth/actions";

const AuthContainer = (props) => {
  return (
    <Auth
      email={props.email}
      password={props.password}
      setEmailText={props.setEmailText}
      setPasswordText={setPasswordText}
    ></Auth>
  );
};

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

const mapDispatchToProps = () => {
  return {
    setEmailText,
    setPasswordText,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
