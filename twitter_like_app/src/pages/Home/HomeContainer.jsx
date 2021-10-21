import React, { Component } from "react";
import './Home.css';
import Home from "./Home";
import { connect } from "react-redux";
import { addAllPostsActionCreator } from "../../redux/HomeReducer";

class HomeContainer extends Component {

  componentDidMount() {
    fetch('http://localhost:3001/posts')
      .then(res => res.json())
      .then(posts => this.props.addAllPosts(posts))
    
  }

  render() {
    return (
      <Home posts={this.props.posts}/>
    )
  }

}

let mapStateToProps = (state) =>{
  return{
    posts : state.HomeReducer.posts
  }
}

let mapDispatchToProps = (dispatch) => {
  return{
    addAllPosts : (posts) => {
      dispatch(addAllPostsActionCreator(posts))
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(HomeContainer);

