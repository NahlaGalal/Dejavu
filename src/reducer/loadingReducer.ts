import { actionTypes } from "../actionTypes";

interface Iaction {
  type: string;
  payload: boolean;
}

const loading = (state: boolean = false, action: Iaction) =>
  action.type === actionTypes.LOADING ? action.payload : state;

export default loading;
