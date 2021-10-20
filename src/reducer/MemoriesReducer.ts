import { actionTypes } from "../actionTypes";
import { IMemories } from "../storeTypes";

interface Iaction {
  type: string;
  isFailed: boolean;
  payload: any;
  errors: any;
}

const memories = (state: IMemories, action: Iaction) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_MEMORIES:
    case actionTypes.GET_USER_MEMORIES:
      return {
        ...state,
        count: action.isFailed ? state.count : action.payload.count,
        next: action.isFailed ? state.next : action.payload.next,
        previous: action.isFailed ? state.previous : action.payload.previous,
        results: action.isFailed ? state.results : action.payload.results,
        errors: !action.isFailed ? [] : action.errors,
      };
    default:
      return {
        ...state,
        errors: [],
      };
  }
};

export default memories;
