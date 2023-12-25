import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [customLogMiddlewares];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, composedEnhancers);

export const persistor = persistStore(store);
