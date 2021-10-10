enum registerActionTypes {
  LOGIN_USER_SAGA = "LOGIN_USER_SAGA",
  LOGIN_USER = "LOGIN_USER",
  SIGNUP_USER_SAGA = "SIGNUP_USER_SAGA",
  SIGNUP_USER = "SIGNUP_USER",
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

export interface SignupAction {
  type: registerActionTypes.SIGNUP_USER_SAGA;
  data: {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  };
}