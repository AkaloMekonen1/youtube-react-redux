import userReducer from "./reducers/userReducer";
import siteReducer from "./reducers/siteReducer";
import { createStore, combineReducers } from "redux";

const store = createStore(
  combineReducers({
    siteReducer,
    userReducer,
  })
);

export default store;
