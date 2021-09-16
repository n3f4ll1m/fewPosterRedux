import { combineReducers } from "redux";
import postReducer from "./Post";
import loginReducer from "./Login";
export default combineReducers({
  post: postReducer,
  login: loginReducer
});
