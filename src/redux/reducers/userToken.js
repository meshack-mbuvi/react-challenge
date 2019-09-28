import { initialState } from "./initialState";

export const UserToken = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
};
