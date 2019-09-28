import { combineReducers } from "redux";
import { Tasks } from "./tasks";
import { UserToken } from "./userToken";

export default combineReducers({
  Tasks,
  UserToken
});
