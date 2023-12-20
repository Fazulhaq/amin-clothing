import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";

import { rootReducer } from "./root-reducer";

// import logger from "redux-logger";

const customLogMiddlewares = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);
  console.log("next state: ", store.getState());
};

const middleWares = [customLogMiddlewares];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, composedEnhancers);
