import { takeEvery } from "redux-saga/effects";
import { actionTypes, memoriesActions } from "../actionTypes";
import { helperSaga } from "./mainSaga";

function* GetProfileMemories({ token }: memoriesActions.GetProfileMemoriesAction) {
  yield helperSaga({
    actionType: actionTypes.GET_PROFILE_MEMORIES,
    token,
    type: "get",
    url: `/memories/me/`,
  });
}

function* GetUserMemories({ token, username }: memoriesActions.GetUserMemoriesAction) {
  yield helperSaga({
    actionType: actionTypes.GET_USER_MEMORIES,
    token,
    type: "get",
    url: `/memories/list/${username}/`,
  });
}

export function* watchMemoriesSaga() {
  yield takeEvery(actionTypes.GET_PROFILE_MEMORIES_SAGA, GetProfileMemories);
  yield takeEvery(actionTypes.GET_USER_MEMORIES_SAGA, GetUserMemories);
}
