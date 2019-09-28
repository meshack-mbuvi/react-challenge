import client from "./client";
export const handleLogin = data => async dispatch => {
  try {
    const {
      data: { accessToken }
    } = await client.post("/personnel/login", data);
    localStorage.setItem("token", accessToken);

    dispatch(setUserToken(accessToken));
  } catch (e) {
    dispatch(setLoginError("Wrong phone or password"));
  }
};

const setUserToken = payload => {
  return {
    payload,
    type: "SET_USER"
  };
};

const setLoginError = payload => {
  return {
    payload,
    type: "LOGIN_ERROR"
  };
};
