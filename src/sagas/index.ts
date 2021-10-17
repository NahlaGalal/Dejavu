import { all } from "redux-saga/effects";
import { watchHomeSaga } from "./homeSaga";
import { watchRegisterUser } from "./registerSaga";
import { watchUserSaga } from "./userSaga";

export default function* rootSaga() {
  yield all([watchRegisterUser(), watchHomeSaga(), watchUserSaga()]);
}
