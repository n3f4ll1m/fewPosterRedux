import {
  FETCH_ALL,
  FETCH_ONE,
  LOGIN,
  LOGIN_HANDLE,
  LOGOUT,
  PASSWORD_HANDLE,
  WRONG
} from "./actionTypes";

export const loginAction = () => {
  return { type: LOGIN };
};
export const wrongAction = () => {
  return { type: WRONG };
};
export const logoutAction = () => {
  return { type: LOGOUT };
};

export const loginHandleAction = (payload) => {
  return { type: LOGIN_HANDLE, payload: payload };
};
export const passwordHandleAction = (payload) => {
  return { type: PASSWORD_HANDLE, payload: payload };
};

export const fetchAction = (payload) => {
  return { type: FETCH_ALL, payload: payload };
};
export const fetchOneAction = (payload) => {
  return { type: FETCH_ONE, payload: payload };
};

export const fetchData = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => dispatch(fetchAction(json)));
  };
};
export const fetchOne = (index) => {
  const path = "https://jsonplaceholder.typicode.com/posts/" + index;
  return (dispatch) => {
    fetch(path)
      .then((response) => response.json())
      .then((json) => dispatch(fetchOneAction(json)));
  };
};
