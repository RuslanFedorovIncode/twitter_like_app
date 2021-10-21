import React, { Component } from "react";
import './Home.css';
import { Post } from "../../components";

class Home extends Component {
  
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

export default Home;

