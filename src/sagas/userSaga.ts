import { takeEvery } from "redux-saga/effects";
import { actionTypes, userActions } from "../actionTypes";
import { helperSaga } from "./mainSaga";

function* GetProfile({ token }: userActions.GetProfileAction) {
  yield helperSaga({
    actionType: actionTypes.GET_PROFILE,
    token,
    type: "get",
    url: `/users/me/`,
  });
}

export function* watchUserSaga() {
  yield takeEvery(actionTypes.GET_PROFILE_SAGA, GetProfile);
}
