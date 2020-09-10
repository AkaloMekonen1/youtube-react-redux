import userReducer from "./reducers/userReducer";
import siteReducer from "./reducers/siteReducer";
import { createStore, combineReducers } from "redux";
import thunk from "redux-thunk"

const store = createStore(
  combineReducers({
    siteReducer,
    userReducer,
  })
);

export default store;
