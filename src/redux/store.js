import { createStore, combineReducers  } from "redux";
import categoryReducer from "./reducers/categoryReducer";
import machineReducer from "./reducers/machineReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

export const store = createStore( persistReducer(persistConfig, combineReducers({
  categoryReducer,
  machineReducer
})), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);

export default {store, persistor}
