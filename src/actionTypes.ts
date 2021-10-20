import homeActionTypes, * as homeActions from "./actions/HomeActionTypes";
import memoriesActionTypes, * as memoriesActions from "./actions/MemoriesActionTypes";
import registerActionTypes, * as registerActions from "./actions/RegisterActionTypes";
import userActionTypes, * as userActions from "./actions/UserActionTypes";

export const actionTypes = {
  ...registerActionTypes,
  ...homeActionTypes,
  ...userActionTypes,
  ...memoriesActionTypes,
  LOADING: "LOADING",
  API_ERROR: "API_ERROR",
};

export {
  registerActions,
  homeActions,
  userActions,
  memoriesActions
};
