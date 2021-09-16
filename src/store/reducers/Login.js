const initialState = {
  isLogedIn: false,
  errorText: ""
};
export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, errorText: "", isLogedIn: true };
    case "WRONG":
      return { ...state, errorText: "Wrong Login or Password" };
    default:
      return state;
  }
}
