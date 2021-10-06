import React,{Component} from "react";
import "./Post.css"

class Post extends Component{

    render(){
        
        const {post: {title, likes, body}} = this.props
        return(
            
            <div className='post' >
                <div className="post_title">{title}</div>
                <div className='likes'>💚{likes}</div>
                <div className='post_body'>{body}</div>
            </div>
        )
    }
}

export default Post;