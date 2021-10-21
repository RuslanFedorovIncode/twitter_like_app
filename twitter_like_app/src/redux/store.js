import { combineReducers, createStore } from "redux";
import HomeReducer from "./HomeReducer";
import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({
  HomeReducer: HomeReducer
})

export const store = createStore(reducers, composeWithDevTools());
export default store;