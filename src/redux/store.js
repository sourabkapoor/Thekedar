import { createStore, combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";
import machineReducer from "./reducers/machineReducer";

const store = createStore(combineReducers({
  categoryReducer,
  machineReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store