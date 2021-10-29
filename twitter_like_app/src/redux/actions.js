import { api } from "../Api";

export const FETCH_POSTS_SUCCES = 'FETCH_POSTS_SUCCES';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const DELETE_POST_SUCCES = 'DELETE_POST_SUCCES';
export const SET_LOADING = 'SET_LOADING';


export const fetchPostsSucces = (payload) => ({ type: FETCH_POSTS_SUCCES,payload });
export const fetchPostsFail = (payload) => ({ type: FETCH_POSTS_FAIL, payload });
export const deletePostSucces = (payload) => ({type: DELETE_POST_SUCCES, payload});
export const setLoading = (payload) => ({type: SET_LOADING, payload});


export const fetchPostsThunk = () => (dispatch) => {
  dispatch(setLoading(true))
  api.get('/posts')
    .then(posts => {
      dispatch(fetchPostsSucces(posts));
      dispatch(setLoading(false));
    })
    .catch(error => {
      dispatch(fetchPostsFail(error.message));
      dispatch(setLoading(false));
    })
    
  
}

export const deletePostThunk = (id) => (dispatch) => {
  api.delete('/posts', id)
    .then(dispatch(deletePostSucces(id)))
    .catch(error => dispatch(fetchPostsFail(error.message)))
}


