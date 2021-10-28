import { FETCH_POSTS_SUCCES , DELETE_POST_SUCCES , FETCH_POSTS_FAIL, } from "./actions";

const initialState = {
  posts: [],
  error : ''
}

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_SUCCES: {
      return{
        ...state, posts : action.payload
      }
    }
    case DELETE_POST_SUCCES:{
      return{
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      }
    }
    case FETCH_POSTS_FAIL:{
      return{
        ...state,
        error : action.payload
      }
    }
    default:
      return state;
  }
}

export default PostsReducer;