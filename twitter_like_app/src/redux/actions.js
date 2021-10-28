import { api } from "../Api";

export const FETCH_POSTS_SUCCES = 'FETCH_POSTS_SUCCES';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const DELETE_POST_SUCCES = 'DELETE_POST_SUCCES';


export const fetchPostsSuccesAC = (payload) => ({ type: FETCH_POSTS_SUCCES,payload });
export const fetchPostsFailAC = (payload) => ({ type: FETCH_POSTS_FAIL, payload });
export const deletePostSuccesAC = (payload) => ({type: DELETE_POST_SUCCES, payload});


export const fetchPostsThunk = () => (dispatch) => {
  api.get('/posts')
    .then(posts => dispatch(fetchPostsSuccesAC(posts)))
    .catch(error => dispatch(fetchPostsFailAC(error.message)))
}

export const deletePostThunk = (id) => (dispatch) => {
  api.delete('/posts', id)
    .then(dispatch(deletePostSuccesAC(id)))
    .catch(error => dispatch(fetchPostsFailAC(error.message)))
}


