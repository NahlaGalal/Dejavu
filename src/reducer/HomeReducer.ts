import { actionTypes } from "../actionTypes";
import { IHome } from "../storeTypes";

interface Iaction {
  type: string;
  isFailed: boolean;
  payload: any;
  errors: any;
}

const home = (state: IHome, action: Iaction) => {
  switch (action.type) {
    case actionTypes.GET_SLIDERES:
      return {
        ...state,
        sliders: action.isFailed ? state.sliders : action.payload,
        errors: !action.isFailed ? [] : action.errors,
      };
    case actionTypes.GET_ABOUT:
      return {
        ...state,
        about: action.isFailed ? state.about : action.payload,
        errors: !action.isFailed ? [] : action.errors,
      };
    default:
      return {
        ...state,
        errors: [],
      };
  }
};

export default home;
