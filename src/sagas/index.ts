import { all } from "redux-saga/effects";
import { watchRegisterUser } from "./registerSaga";

export default function* rootSaga() {
  yield all([
    watchRegisterUser()
  ]);
}
