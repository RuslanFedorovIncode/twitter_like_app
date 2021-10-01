import React,{Component} from "react";
import './Home.css'

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts : []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(result => this.setState({posts : result}))
    }

    render() {

        return (
            <div className='main'>
                <h1>Twitter Like app</h1>
                {this.state.posts.map((post) => {
                    return (
                        
                        <div className='posts' key={post['id']}>
                            <div className="posts_title">{post['title']}</div>
                            <div className='likes'>💚{post['likes']}</div>
                            <div className='posts_body'>{post['body']}</div>
                        </div>
                    
                        
                    
                    )}
                )}
            </div>
        )
    }

}

export default Home;

