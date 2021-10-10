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

function* SignupUser({ data }: registerActions.SignupAction) {
  yield helperSagaUnAuth({
    actionType: actionTypes.SIGNUP_USER,
    type: "post",
    url: "/register/",
    data,
  });
}

export function* watchRegisterUser() {
  yield takeEvery(actionTypes.LOGIN_USER_SAGA, LoginUser);
  yield takeEvery(actionTypes.SIGNUP_USER_SAGA, SignupUser);
}
