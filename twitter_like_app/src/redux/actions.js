export const FETCH_POSTS = 'FETCH_POSTS';

export const addAllPostsActionCreator = (posts) => ({type : FETCH_POSTS, posts});

export const fetchPostsThunk = () => {
    return (dispatch) =>{
    fetch(process.env.REACT_APP_URL_PATH+'/posts')
        .then(res => res.json())
        .then(posts => dispatch(addAllPostsActionCreator(posts)))
    }
}