function login(id, password) {
  console.log("auth action");

  return (dispatch, getState) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

function logout(authenticated) {
  return (dispatch, getState) => {
    dispatch({ type: "LOGOUT_SUCCESS", payload: { authenticated } });
  };
}

export const authenticationAction = { login, logout };
