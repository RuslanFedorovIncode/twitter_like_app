import React, { Component } from "react";
import './Home.css';
import { Post, PostError } from "../../components";
import { connect } from "react-redux";
import { fetchPostsThunk, deletePostThunk } from "../../redux/actions";

class Home extends Component {

  componentDidMount() {
    this.props.fetchPostsThunk()
  }

  render() {
    return (
      <div className='main'>
        <h1>Twitter Like app</h1>
        {
          this.props.errors === null
            ?
            this.props.posts.map((post) => {
              return (
                <Post
                  post={post}
                  key={post.id}
                  id={post.id}
                  deletePostThunk={this.props.deletePostThunk} />
              )
            })
            :
            this.props.errors.map((post) => {
              return (
                <PostError
                  post={post}
                  key={post.id} />
              )
            })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostsReducer.posts,
    errors: state.PostsReducer.errors,
  }
}

const mapDispatchToProps = {
  fetchPostsThunk,
  deletePostThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

