import "./Login.scss";
import { NavLink, withRouter } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";

function Login(props) {
  const data = {};
  const errorText = useSelector((state) => state.login.errorText);
  const dispatch = useDispatch();
  let checkData = () => {
    if (data.Login === "admin" && data.Password === "admin") {
      dispatch({ type: "LOGIN" });
      props.history.push("/");
    } else {
      //console.log("Whats wrong");
      dispatch({ type: "WRONG" });
    }
    console.log(props);
  };
  let inputHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    data[name] = value;
  };
  return (
    <form className="Login Form">
      <span>LOGIN</span>
      <input
        name="Login"
        onChange={inputHandler}
        type="text"
        placeholder="Login"
      />
      <input
        name="Password"
        onChange={inputHandler}
        type="password"
        placeholder="Password"
      />
      <div className="ErrorText">{errorText}</div>
      <button type="button" onClick={checkData}>
        Sign In
      </button>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </form>
  );
}

export default connect()(withRouter(Login));
