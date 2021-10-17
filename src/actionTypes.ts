import homeActionTypes, * as homeActions from "./actions/HomeActionTypes";
import registerActionTypes, * as registerActions from "./actions/RegisterActionTypes";
import userActionTypes, * as userActions from "./actions/UserActionTypes";

export const actionTypes = {
  ...registerActionTypes,
  ...homeActionTypes,
  ...userActionTypes,
  LOADING: "LOADING",
  API_ERROR: "API_ERROR",
};

export {
  registerActions,
  homeActions,
  userActions
};
