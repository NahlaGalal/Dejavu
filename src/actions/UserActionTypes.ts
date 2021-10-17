enum userActionTypes {
  GET_PROFILE_SAGA = "GET_PROFILE_SAGA",
  GET_PROFILE = "GET_PROFILE",
}

export default userActionTypes;

export interface GetProfileAction {
  type: userActionTypes.GET_PROFILE_SAGA;
  token: string;
}
