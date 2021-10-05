import { takeEvery } from "redux-saga/effects";
import { actionTypes, registerActions } from "../actionTypes";
import { helperSagaUnAuth } from "./mainSaga";

function* LoginUser({ data }: registerActions.LoginAction) {
  yield helperSagaUnAuth({
    actionType: actionTypes.LOGIN_USER,
    type: "post",
    url: "/login/",
    data,
  });
}

export function* watchRegisterUser() {
  yield takeEvery(actionTypes.LOGIN_USER_SAGA, LoginUser);
}
