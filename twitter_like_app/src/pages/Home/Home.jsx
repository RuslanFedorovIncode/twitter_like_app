import React, { Component } from "react";
import './Home.css';
import { Post, ErrorComponent, Preloader,ZeroPostsComponent} from "../../components";
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
        {this.props.isFetching && <Preloader text={'Loading posts ...'} /> }
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
        {this.props.error !== '' && <ErrorComponent error={this.props.error} /> }
        {(!this.props.posts.length && this.props.error === '') && <ZeroPostsComponent />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.PostsReducer.posts,
    error: state.PostsReducer.error,
    isFetching : state.PostsReducer.isFetching
  }
}

const mapDispatchToProps = {
  fetchPostsThunk,
  deletePostThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

