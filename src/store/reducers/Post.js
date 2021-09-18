import { FETCH_ALL, FETCH_ONE } from "../actions/actionTypes";

const initialState = {
  respData: [],
  respDataOne: {}
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ONE:
      return { ...state, respDataOne: action.payload };
    case FETCH_ALL: {
      //console.log("STATE", state);
      return { ...state, respData: action.payload };
    }

    default:
      return state;
  }
}
