import { combineReducers } from "redux";
import loading from "./loadingReducer";
import user from "./userReducer";
import home from "./HomeReducer";

export default combineReducers({
  loading,
  user,
  home
});
