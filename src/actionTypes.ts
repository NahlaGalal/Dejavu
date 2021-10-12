import homeActionTypes, * as homeActions from "./actions/HomeActionTypes";
import registerActionTypes, * as registerActions from "./actions/RegisterActionTypes";

export const actionTypes = {
  ...registerActionTypes,
  ...homeActionTypes,
  LOADING: "LOADING",
  API_ERROR: "API_ERROR",
};

export {
  registerActions,
  homeActions
};
