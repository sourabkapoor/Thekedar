import { createStore, combineReducers } from "redux";
import machineReducer from "./reducers/machinesReducers";

const store = createStore(combineReducers({
  machineReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store