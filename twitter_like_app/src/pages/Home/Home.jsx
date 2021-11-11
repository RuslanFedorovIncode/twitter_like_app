import React, { Component } from "react";
import './Home.css';
import {
  Post, ErrorComponent, Preloader, ZeroPostsComponent,
  ModalWindow, AddNewPostBody, AddNewPostTitle, EditPostBody, EditPostTitle
} from "../../components";
import { connect } from "react-redux";
import { fetchPostsThunk, deletePostThunk, 
  addPostThunk, editPostThunk } from "../../redux/actions";
import Button from '@mui/material/Button';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenAddPostWindow: false,
      isOpenEditPostWindow: false,
      editPost: {}
    }
    this.onHandleChangePost = this.onHandleChangePost.bind(this);
  }


  setAddPostChangeWindow = () => {
    this.setState({ isOpenAddPostWindow: !this.state.isOpenAddPostWindow })
  }
  setEditPostChangeWindow = () => {
    this.setState({ isOpenEditPostWindow: !this.state.isOpenEditPostWindow })
  }
  getEditPost = (id) => {
    this.setState({ editPost: this.props.posts.find(post => post.id === id) });
    this.setEditPostChangeWindow();

  }
  onHandleChangePost(values) {
    this.props.editPostThunk(values)
  }

  componentDidMount() {
    this.props.fetchPostsThunk();

  }
  render() {
    return (
      <div className='main'>
        <h1>Twitter Like app</h1>
        <Button
          variant="contained"
          color="primary"
          className='buttonAddPost'
          onClick={this.setAddPostChangeWindow}>
          {this.state.isOpenAddPostWindow ? "CLOSE" : "ADD POST"}
        </Button>
        {this.state.isOpenAddPostWindow &&
          <ModalWindow
            title={<AddNewPostTitle />}
            onClose={this.setAddPostChangeWindow}>
            <AddNewPostBody
              addPostThunk={this.props.addPostThunk} />
          </ModalWindow>}
        {this.state.isOpenEditPostWindow &&
          <ModalWindow
            title={<EditPostTitle />}
            onClose={this.setEditPostChangeWindow}>
            <EditPostBody
              editPost={this.state.editPost}
              onHandleChangePost={this.onHandleChangePost} />
          </ModalWindow>
        }
        {this.props.isFetching && <Preloader text='Loading posts ...' />}
        {this.props.posts.map((post) => {
          return (
            <Post
              post={post}
              key={post.id}
              id={post.id}
              deletePostThunk={this.props.deletePostThunk}
              getEditPost={this.getEditPost} />
          )
        })
        }
        {this.props.error && <ErrorComponent error={this.props.error} />}
        {(!this.props.posts.length && !this.props.error && !this.props.isFetching)
          && <ZeroPostsComponent />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostsReducer.posts,
    error: state.PostsReducer.error,
    isFetching: state.PostsReducer.isFetching
  }
}

const mapDispatchToProps = {
  fetchPostsThunk,
  deletePostThunk,
  addPostThunk,
  editPostThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

