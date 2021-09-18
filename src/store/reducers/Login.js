import {
  LOGIN,
  LOGIN_HANDLE,
  LOGOUT,
  PASSWORD_HANDLE,
  WRONG
} from "../actions/actionTypes";

const initialState = {
  isLogedIn: false,
  errorText: "",
  login: "",
  password: ""
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return { ...state, errorText: "", isLogedIn: true };
    case LOGOUT:
      return { ...state, errorText: "", isLogedIn: false };
    case LOGIN_HANDLE:
      return { ...state, login: action.payload };
    case PASSWORD_HANDLE:
      return { ...state, password: action.payload };
    case WRONG:
      return { ...state, errorText: "Wrong Login or Password" };

    default:
      return state;
  }
}
