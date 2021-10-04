import registerActionTypes, * as registerActions from "./actions/RegisterActionTypes";

export const actionTypes = {
  ...registerActionTypes,
  LOADING: "LOADING",
  API_ERROR: "API_ERROR",
};

export {
  registerActions
};
