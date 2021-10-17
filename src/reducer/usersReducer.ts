import { actionTypes } from "../actionTypes";
import { IUsers } from "../storeTypes";

interface Iaction {
  type: string;
  isFailed: boolean;
  payload: any;
  errors: any;
}

const users = (state: IUsers, action: Iaction) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE:
      return {
        ...state,
        profile: action.isFailed ? state.profile : action.payload,
        errors: !action.isFailed ? [] : action.errors,
      };
    default:
      return {
        ...state,
        errors: [],
      };
  }
};

export default users;
