const ADD_ALL_POSTS = 'ADD_ALL_POSTS';

const initialState = {
  posts: []
}

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_POSTS: {
      return{
        ...state, posts : action.posts
      }
    }
    default:
      return state;
  }
}

export const addAllPostsActionCreator = (posts) => ({type : ADD_ALL_POSTS, posts});
export default HomeReducer;