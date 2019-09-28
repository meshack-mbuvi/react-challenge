import { initialState } from "./initialState";

export const Tasks = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return {
        ...state,
        tasks: action.payload
      };

    default:
      return state;
  }
};
