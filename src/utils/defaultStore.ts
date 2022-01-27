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
    about: [],
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
      cover: "",
    },
    user: {
      id: "",
      username: "",
      first_name: "",
      last_name: "",
      avatar: "",
      bio: "",
      cover: "",
    },
    errors: [],
  },
  memories: {
    count: 0,
    next: "",
    previous: "",
    results: [],
  },
  loading: false,
};
