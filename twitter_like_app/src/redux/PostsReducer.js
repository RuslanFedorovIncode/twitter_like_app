import { FETCH_POSTS , DELETE_POST , CANT_FETCH} from "./actions";

const initialState = {
  posts: [],
  errors : null,
}

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return{
        ...state, posts : action.posts
      }
    }
    case DELETE_POST:{
      return{
        ...state,
        posts: state.posts.filter(post => post.id !== action.id)
      }
    }
    case CANT_FETCH:{
      
      return{
        ...state,
        errors : [
          {
            "title": action.error,
            "id" : 1
          }
        ]
      }
    }
    default:
      return state;
  }
}

export default PostsReducer;