let initialState = {
  id: "",
  password: "",
  authenticated: false,
};

function authenticationReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticated: true,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        id: "",
        password: "",
        authenticated: false,
      };
    default:
      return { ...state };
  }
}

export default authenticationReducer;
