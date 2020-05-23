import React from "react";

//{
//    email, password;
//}

export default function Auth(props) {
  const onEmailChange = (event) => {
      props.setEmailText(event.target.value);
  };
  const onPasswordChange = (event) => {
      props.setPasswordText(event.target.value);
  };
  return (
    <form className="form-signin">
      <h2 className="form-signin-heading"> Please sign in </h2>
      <label for="inputEmail" className="sr-only">
        {" "}
        Email address{" "}
      </label>
      <input
        type="email"
        name="email"
        className="form-control"
        placeholder="Email address"
        value={props.email}
        onChange={onEmailChange}
      />
      <label for="inputPassword" className="sr-only">
        {" "}
        Password
      </label>
      <input
        type="password"
        name="password"
        className="form-control"
        placeholder="Password"
        value={props.password}
        onChange={onPasswordChange}
      />
      <button className="btn btn-lg btn-primary btn-block" type="button">
        {" "}
        Sign in{" "}
      </button>
    </form>
  );
}
