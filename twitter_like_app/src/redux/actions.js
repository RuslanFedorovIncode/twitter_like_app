import { api } from "../Api";

export const FETCH_POSTS = 'FETCH_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const CANT_FETCH = 'CANT_FETCH';

export const addAllPostsActionCreator = (posts) => ({ type: FETCH_POSTS, posts });
export const deletePostActionCreator = (id) => ({type: DELETE_POST, id});
export const cantFetchPostActionCreator = (error) =>({type: CANT_FETCH, error})



export const fetchPostsThunk = () => {
  return (dispatch) => {
    api.get('/posts')
        .then(posts => dispatch(addAllPostsActionCreator(posts)))
        .catch(error => dispatch(cantFetchPostActionCreator(error.message)))
  }
}

export const deletePostThunk = (id) => {
  return (dispatch) => {
    api.delete('/posts', id)
    .then(dispatch(deletePostActionCreator(id)))
    .catch(error => dispatch(cantFetchPostActionCreator(error.message)))
  }
}

