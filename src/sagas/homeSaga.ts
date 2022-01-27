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

function* GetAbout() {
  yield helperSagaUnAuth({
    actionType: actionTypes.GET_ABOUT,
    type: "get",
    url: "/about/",
    getResult: (data: any) =>
      data.results.sort((a: any, b: any) => a.order < b.order),
  });
}

export function* watchHomeSaga() {
  yield takeEvery(actionTypes.GET_SLIDERES_SAGA, GetSlider);
  yield takeEvery(actionTypes.GET_ABOUT_SAGA, GetAbout);
}
