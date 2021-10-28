import React, { Component } from "react";
import './Home.css';
import { Post, ErrorComponent} from "../../components";
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
          this.props.error === ''
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
            <ErrorComponent
              error={this.props.error} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostsReducer.posts,
    error: state.PostsReducer.error
  }
}

const mapDispatchToProps = {
  fetchPostsThunk,
  deletePostThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

