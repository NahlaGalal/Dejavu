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
              Authorization: `Token ${newToken}`,
              Accept: "application/json",
              "Content-Type": "application/json;charset=UTF-8",
              ...headers,
            },
          })
        : axios[type](url, {
            headers: {
              Authorization: `Token ${token}`,
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
  } catch (err: any) {
    const errors = err.response.data;
    const status = err.response.status;

    yield put({
      type: actionTypes.LOADING,
      payload: false,
    });

    if (status === 400) {
      yield put({
        type: actionType,
        payload: {},
        errors,
        isFailed: true,
      });
    }
    if (status >= 400) {
      yield put({
        type: actionTypes.API_ERROR,
        payload: status,
        isFailed: true,
      });
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
  } catch (err: any) {
    const errors = err.response.data;
    const status = err.response.status;

    yield put({
      type: actionTypes.LOADING,
      payload: false,
    });

    if (status === 400) {
      yield put({
        type: actionType,
        payload: {},
        errors,
        isFailed: true,
      });
    }
    if (status >= 400) {
      yield put({
        type: actionTypes.API_ERROR,
        payload: status,
        isFailed: true,
      });
    }
  }
}
