import { FETCH_POSTS } from "./actions";


const initialState = {
  posts: []
}

const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS: {
      return{
        ...state, posts : action.posts
      }
    }
    default:
      return state;
  }
}

export default PostsReducer;