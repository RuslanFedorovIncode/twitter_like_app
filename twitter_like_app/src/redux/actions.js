const FETCH_POSTS = 'FETCH_POSTS';

export const addAllPostsActionCreator = (posts) => ({type : FETCH_POSTS, posts});