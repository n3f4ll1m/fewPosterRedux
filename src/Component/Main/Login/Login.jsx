import "./Login.scss";
import { NavLink, useHistory } from "react-router-dom";

import { useDispatch, useSelector, connect } from "react-redux";
import {
  loginAction,
  loginHandleAction,
  wrongAction,
  passwordHandleAction
} from "../../../store/actions/action";

function Login(props) {
  const errorText = useSelector((state) => state.login.errorText);
  const userLogin = useSelector((state) => state.login.login);
  const userPass = useSelector((state) => state.login.password);
  const dispatch = useDispatch();
  const history = useHistory();

  const checkData = () => {
    if (userLogin === "admin" && userPass === "admin") {
      dispatch(loginAction());
      history.push("/");
    } else {
      dispatch(wrongAction());
    }
  };

  const loginInputHandler = (event) => {
    dispatch(loginHandleAction(event.target.value));
  };

  const passwordInputHandler = (event) => {
    dispatch(passwordHandleAction(event.target.value));
  };

  return (
    <form className="Login Form">
      <span>LOGIN</span>
      <input
        name="Login"
        onChange={loginInputHandler}
        type="text"
        placeholder="Login"
        value={userLogin}
      />
      <input
        name="Password"
        onChange={passwordInputHandler}
        type="password"
        placeholder="Password"
        value={userPass}
      />
      <div className="ErrorText">{errorText}</div>
      <button type="button" onClick={checkData}>
        Sign In
      </button>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </form>
  );
}

export default connect()(Login);
