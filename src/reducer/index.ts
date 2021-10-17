import { combineReducers } from "redux";
import loading from "./loadingReducer";
import user from "./registerReducer";
import home from "./HomeReducer";
import users from "./usersReducer";

export default combineReducers({
  loading,
  user,
  home,
  users
});
