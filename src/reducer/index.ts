import { combineReducers } from "redux";
import loading from "./loadingReducer";
import user from "./registerReducer";
import home from "./HomeReducer";
import users from "./usersReducer";
import memories from "./MemoriesReducer";

export default combineReducers({
  loading,
  user,
  home,
  users,
  memories
});
