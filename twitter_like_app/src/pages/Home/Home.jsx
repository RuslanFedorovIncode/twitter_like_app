import React, { Component } from "react";
import './Home.css';
import { Post } from "../../components";
import { connect } from "react-redux";
import { fetchPostsThunk } from "../../redux/actions";

class Home extends Component {

  componentDidMount() {
    this.props.fetchPostsThunk()
  }

  render() {
    return (
      
      <div className='main'>
        <h1>Twitter Like app</h1>
        {this.props.posts.map((post) => {
          return (
            <Post post={post} key={post.id} />
          )
        }
        )}
      </div>

    )
  }
}

const mapStateToProps = (state) =>{
  return{
    posts : state.PostsReducer.posts
  }
}

const mapDispatchToProps = {
  fetchPostsThunk
}

export default connect (mapStateToProps,mapDispatchToProps)(Home);

