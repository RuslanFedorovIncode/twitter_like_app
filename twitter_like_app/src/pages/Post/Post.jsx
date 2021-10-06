import React,{Component} from "react";
import "./Post.css"

class Post extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div className='post' >
                <div className="post_title">{this.props.post['title']}</div>
                <div className='likes'>💚{this.props.post['likes']}</div>
                <div className='post_body'>{this.props.post['body']}</div>
            </div>
        )
    }
}

export default Post;