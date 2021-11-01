import React, { Component } from "react";
import './Home.css';
import { Post, ErrorComponent, Preloader,ZeroPostsComponent, ModalWindow} from "../../components";
import { connect } from "react-redux";
import { fetchPostsThunk, deletePostThunk ,setAddForm,addPostThunk} from "../../redux/actions";
import Button from '@mui/material/Button';

class Home extends Component {
  componentDidMount() {
    this.props.fetchPostsThunk()
  }
  render() {
    return (
      <div className='main'>
        <h1>Twitter Like app</h1>
        <Button
          variant="contained"
          color = "primary"
          className='buttonAddPost'
          onClick={this.props.setAddForm}>
          {this.props.setAddFormValue ? "CLOSE" : "ADD POST"}
        </Button>
        {this.props.setAddFormValue && <ModalWindow addPostThunk={this.props.addPostThunk} setAddForm={this.props.setAddForm}/>}
        {this.props.isFetching && <Preloader text='Loading posts ...' />}
        {this.props.posts.map((post) => {
          return (
            <Post
              post={post}
              key={post.id}
              id={post.id}
              deletePostThunk={this.props.deletePostThunk} />
          )
        })
        }
        {this.props.error && <ErrorComponent error={this.props.error} /> }
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
    isFetching : state.PostsReducer.isFetching,
    setAddFormValue : state.PostsReducer.setAddFormValue
  }
}

const mapDispatchToProps = {
  fetchPostsThunk,
  deletePostThunk,
  setAddForm,
  addPostThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

