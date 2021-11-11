import { api } from "../Api";

export const SET_LOADING = 'SET_LOADING';
export const FETCH_POSTS_SUCCES = 'FETCH_POSTS_SUCCES';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const DELETE_POST_SUCCES = 'DELETE_POST_SUCCES';
export const DELETE_POST_FAIL = 'DELETE_POST_FAIL';
export const ADD_POST_SUCCES = 'ADD_POST_SUCCES';
export const ADD_POST_FAIL = 'ADD_POST_FAIL';
export const EDIT_POST_SUCCES = 'EDIT_POST_SUCCES';
export const EDIT_POST_FAIL = 'EDIT_POST_FAIL';


export const setLoading = (payload) => ({ type: SET_LOADING, payload });
export const fetchPostsSucces = (payload) => ({ type: FETCH_POSTS_SUCCES, payload });
export const fetchPostsFail = (payload) => ({ type: FETCH_POSTS_FAIL, payload });
export const deletePostSucces = (payload) => ({ type: DELETE_POST_SUCCES, payload });
export const deletePostFail = (payload) => ({ type: DELETE_POST_FAIL, payload });
export const addPostSucces = (payload) => ({ type: ADD_POST_SUCCES, payload });
export const addPostFail = (payload) => ({ type: ADD_POST_FAIL, payload });
export const editPostSucces = (payload) => ({ type: EDIT_POST_SUCCES, payload });
export const editPostFail = (payload) => ({ type: EDIT_POST_FAIL, payload });

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
    .catch(error => dispatch(deletePostFail(error.message)))
}

export const addPostThunk = (data) => (dispatch) => {
  api.post('/posts', data)
    .then(response => dispatch(addPostSucces(response)))
    .catch(error => dispatch(addPostFail(error.message)))
}

export const editPostThunk = (data) => (dispatch) => {
  api.put('/posts', data)
    .then(response => dispatch(editPostSucces(response)))
    .catch(error => dispatch(editPostFail(error.message)))

}


