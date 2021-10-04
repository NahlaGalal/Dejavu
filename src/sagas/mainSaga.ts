import { put, call } from "redux-saga/effects";
import { actionTypes } from "../actionTypes";
import axios from "../utils/axiosInstance";

export function* helperSaga({
  token,
  url,
  data,
  type,
  actionType,
  getResult,
  headers = {},
}: {
  token: string;
  url: string;
  type: "put" | "post" | "get" | "delete";
  data?: any;
  actionType: string;
  getResult?: (data: any) => any;
  headers?: { [key: string]: string };
}) {
  let newToken = token;

  yield put({
    type: actionTypes.LOADING,
    payload: true,
  });

  try {
    const res: { data: any } = yield call(() =>
      type === "post" || type === "put"
        ? axios[type](url, data, {
            headers: {
              Authorization: `Bearer ${newToken}`,
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
              ...headers,
            },
          })
        : axios[type](url, {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
              ...headers,
            },
          })
    );

    const payload = getResult ? getResult(res.data) : res.data;

    yield put({
      type: actionType,
      payload,
      isFailed: false,
    });
    yield put({
      type: actionTypes.LOADING,
      payload: false,
    });
    return payload;
  } catch (err) {
    if (err.response) {
      let { statusCode, errors } = err.response.data;

      yield put({
        type: actionTypes.LOADING,
        payload: false,
      });

      if (statusCode === 400) {
        yield put({
          type: actionType,
          payload: errors,
          isFailed: true,
        });
      }
      if (statusCode >= 400 && statusCode !== 422) {
        yield put({
          type: actionTypes.API_ERROR,
          payload: statusCode,
          isFailed: true,
        });
      }
    }
  }
}

export function* helperSagaUnAuth({
  url,
  data,
  type,
  actionType,
  getResult,
  headers = {},
}: {
  url: string;
  type: "put" | "post" | "get" | "delete";
  data?: any;
  actionType: string;
  getResult?: (data: any) => any;
  headers?: { [key: string]: string };
}) {
  yield put({
    type: actionTypes.LOADING,
    payload: true,
  });

  try {
    const res: { data: any } = yield call(() =>
      type === "post" || type === "put"
        ? axios[type](url, data, {
            headers: {
              Accept: "application/json",
              ...headers,
            },
          })
        : axios[type](url, {
            headers: {
              Accept: "application/json",
              ...headers,
            },
          })
    );

    const payload = getResult ? getResult(res.data) : res.data;

    yield put({
      type: actionType,
      payload,
      isFailed: false,
    });
    yield put({
      type: actionTypes.LOADING,
      payload: false,
    });
    return payload;
  } catch (err) {
    let { statusCode, errors } = err.response.data;
    yield put({
      type: actionTypes.LOADING,
      payload: false,
    });

    if (statusCode === 400) {
      yield put({
        type: actionType,
        payload: errors,
        isFailed: true,
      });
    }
    if (statusCode >= 400) {
      yield put({
        type: actionTypes.API_ERROR,
        payload: statusCode,
        isFailed: true,
      });
    }
  }
}
