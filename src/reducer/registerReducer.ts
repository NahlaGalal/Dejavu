import { actionTypes } from "../actionTypes";
import { IUser } from "../storeTypes";

interface Iaction {
  type: string;
  isFailed: boolean;
  payload: any;
  errors: any;
}

const user = (state: IUser, action: Iaction) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        token: action.isFailed ? state.token : action.payload.token,
        errors: !action.isFailed ? [] : action.errors,
      };
    case actionTypes.SIGNUP_USER:
      return {
        ...state,
        success: action.isFailed ? {} : { signup: true },
        errors: !action.isFailed ? [] : action.errors,
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        token: "",
        errors: [],
      };
    default:
      return {
        ...state,
        errors: [],
      };
  }
};

export default user;
