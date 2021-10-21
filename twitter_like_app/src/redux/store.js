import { combineReducers, createStore } from "redux";
import PostsReducer from "./PostsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  PostsReducer : PostsReducer
})

export const store = createStore(reducers, composeWithDevTools());
export default store;