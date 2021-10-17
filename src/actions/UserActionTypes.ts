enum userActionTypes {
  GET_PROFILE_SAGA = "GET_PROFILE_SAGA",
  GET_PROFILE = "GET_PROFILE",
  GET_USER_SAGA = "GET_USER_SAGA",
  GET_USER = "GET_USER"
}

export default userActionTypes;

export interface GetProfileAction {
  type: userActionTypes.GET_PROFILE_SAGA;
  token: string;
}

export interface GetUserAction {
  type: userActionTypes.GET_USER_SAGA;
  token: string;
  username: string;
}
