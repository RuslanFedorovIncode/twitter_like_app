import { combineReducers, createStore ,applyMiddleware} from "redux";
import PostsReducer from "./PostsReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
  PostsReducer : PostsReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;