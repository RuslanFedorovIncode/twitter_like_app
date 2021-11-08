import {
  SET_LOADING, FETCH_POSTS_SUCCES, FETCH_POSTS_FAIL, DELETE_POST_SUCCES,
  DELETE_POST_FAIL, ADD_POST_SUCCES, ADD_POST_FAIL, EDIT_POST_SUCCES, EDIT_POST_FAIL
} from "./actions";

const initialState = {
  posts: [],
  error: '',
  isFetching: false
}

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isFetching: action.payload
      }
    }
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
    case DELETE_POST_FAIL: {
      return {
        ...state,
        error: action.payload
      }
    }
    case ADD_POST_SUCCES: {
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    }
    case ADD_POST_FAIL: {
      return {
        ...state,
        error: action.payload
      }
    }
    case EDIT_POST_SUCCES: {
      return {
        ...state,
        posts: state.posts.map((el) => {
          if (el.id === action.payload.id) {
            return action.payload
          }
          return el
        })
      }
    }
    case EDIT_POST_FAIL: {
      return {
        ...state,
        error: action.payload
      }
    }
    default:
      return state;
  }
}

export default PostsReducer;