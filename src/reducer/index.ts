import { combineReducers } from "redux";
import loading from "./loadingReducer";
import user from "./userReducer";

export default combineReducers({
  loading,
  user
});
