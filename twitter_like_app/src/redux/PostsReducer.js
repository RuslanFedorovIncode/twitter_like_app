import { FETCH_POSTS_SUCCES, DELETE_POST_SUCCES,FETCH_POSTS_FAIL,
SET_LOADING, SET_ADD_FORM, ADD_POST_SUCCES } from "./actions";

const initialState = {
  posts: [],
  error: '',
  isFetching: false,
  setAddFormValue: false
}

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCES: {
      return {
        ...state,
        posts: action.payload
      }
    }
    case FETCH_POSTS_FAIL: {
      return {
        ...state,
        error: action.payload
      }
    }
    case DELETE_POST_SUCCES: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
    case SET_ADD_FORM: {
      return {
        ...state,
        setAddFormValue: !state.setAddFormValue
      }
    }
    case ADD_POST_SUCCES: {
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    }
    default:
      return state;
  }
}

export default PostsReducer;