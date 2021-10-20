enum memoriesActionTypes {
  GET_USER_MEMORIES_SAGA = "GET_USER_MEMORIES_SAGA",
  GET_USER_MEMORIES = "GET_USER_MEMORIES",
  GET_PROFILE_MEMORIES_SAGA = "GET_PROFILE_MEMORIES_SAGA",
  GET_PROFILE_MEMORIES = "GET_PROFILE_MEMORIES"
}

export default memoriesActionTypes;

export interface GetUserMemoriesAction {
  type: memoriesActionTypes.GET_USER_MEMORIES_SAGA;
  token: string;
  username: string;
}

export interface GetProfileMemoriesAction {
  type: memoriesActionTypes.GET_PROFILE_MEMORIES_SAGA;
  token: string;
}
