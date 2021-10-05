enum registerActionTypes {
  LOGIN_USER_SAGA = "LOGIN_USER_SAGA",
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
}

export default registerActionTypes;

export interface LoginAction {
  type: registerActionTypes.LOGIN_USER_SAGA;
  data: {
    username: string;
    password: string;
  };
}
