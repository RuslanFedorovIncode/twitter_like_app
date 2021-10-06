import React,{Component} from "react";
import './Home.css';
import Post from'../Post/Post'

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
                    <Post post={post} key={post.id}/>
                    )}
                )}
            </div>
        )
    }

}

export default Home;

