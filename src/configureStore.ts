import { createStore, applyMiddleware, compose } from "redux";
import createLogger from "redux-logger";
import createSaga from "redux-saga";
import cookie from "react-cookies";
import rootSaga from "./sagas";
import reducer from "./reducer";
import { IStore } from "./storeTypes";
import { defaultStore } from "./utils/defaultStore";

export const loadState = () =>
  cookie.load("dajavu")
    ? cookie.load("dejavu")
    : {
        token: "",
        userImage: "",
      };

export const saveState = (state: IStore): void => {
  cookie.save(
    "dejavu",
    {
      token: state.user.token,
      // userImage: state.profile.profilePicture,
    },
    { path: "/" }
  );
};

export const deleteState = () => cookie.remove("dejavu");

const configureStore = () => {
  const sagaMiddleware = createSaga();
  const middlewares: any[] = [sagaMiddleware];
  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger);
  }
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    defaultStore as any,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
