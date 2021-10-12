import { all } from "redux-saga/effects";
import { watchHomeSaga } from "./homeSaga";
import { watchRegisterUser } from "./registerSaga";

export default function* rootSaga() {
  yield all([watchRegisterUser(), watchHomeSaga()]);
}
