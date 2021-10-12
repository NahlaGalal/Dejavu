import { takeEvery } from "redux-saga/effects";
import { actionTypes } from "../actionTypes";
import { helperSagaUnAuth } from "./mainSaga";

function* GetSlider() {
  yield helperSagaUnAuth({
    actionType: actionTypes.GET_SLIDERES,
    type: "get",
    url: `/sliders/`,
    getResult: (data: any) => data.results,
  });
}

export function* watchHomeSaga() {
  yield takeEvery(actionTypes.GET_SLIDERES_SAGA, GetSlider);
}
