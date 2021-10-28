import { api } from "../Api";

export const FETCH_POSTS_SUCCES = 'FETCH_POSTS_SUCCES';
export const DELETE_POST_SUCCES = 'DELETE_POST_SUCCES';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';

export const addAllPostsActionCreator = (payload) => ({ type: FETCH_POSTS_SUCCES,payload });
export const deletePostActionCreator = (payload) => ({type: DELETE_POST_SUCCES, payload});
export const cantFetchPostActionCreator = (payload) => ({ type: FETCH_POSTS_FAIL, payload });

export const fetchPostsThunk = () => (dispatch) => {
  api.get('/posts')
    .then(posts => dispatch(addAllPostsActionCreator(posts)))
    .catch(error => dispatch(cantFetchPostActionCreator(error.message)))
}

export const deletePostThunk = (id) => (dispatch) => {
  api.delete('/posts', id)
    .then(dispatch(deletePostActionCreator(id)))
    .catch(error => dispatch(cantFetchPostActionCreator(error.message)))
}


