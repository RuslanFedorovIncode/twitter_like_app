import React, { Component } from "react";
import './Home.css';
import { Post } from "../../components";
import { connect } from "react-redux";
import { addAllPostsActionCreator } from "../../redux/PostsReducer";

class Home extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/posts')
      .then(res => res.json())
      .then(posts => this.props.addAllPosts(posts))
    
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

const mapDispatchToProps = (dispatch) => {
  return{
    addAllPosts : (posts) => {
      dispatch(addAllPostsActionCreator(posts))
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(Home);

