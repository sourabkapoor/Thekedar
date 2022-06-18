import { createStore, combineReducers } from "redux";
import categoryReducer from "./reducers/categoryReducer";

const store = createStore(combineReducers({
  categoryReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store