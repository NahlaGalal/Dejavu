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
    errors: [],
  },
  loading: false,
};
