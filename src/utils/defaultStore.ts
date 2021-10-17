import { IStore } from "../storeTypes";
import cookie from "react-cookies";

const loadState = () =>
  cookie.load("dejavu")
    ? cookie.load("dejavu")
    : {
        token: "",
        expiration: "",
        refreshToken: "",
        refreshTokenExpiration: "",
        userImage: "",
      };

export const defaultStore: IStore = {
  user: {
    token: loadState().token,
    success: {},
    errors: [],
  },
  home: {
    sliders: [],
    errors: [],
  },
  users: {
    profile: {
      id: "",
      username: "",
      first_name: "",
      last_name: "",
      avatar: "",
      bio: "",
    },
    user: {
      id: "",
      username: "",
      first_name: "",
      last_name: "",
      avatar: "",
      bio: "",
    },
    errors: [],
  },
  loading: false,
};
