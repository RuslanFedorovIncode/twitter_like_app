import React,{Component} from "react";
import './Twitter_like_styles.css'

class Twitter_like extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : []
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/items')
        .then(res => res.json())
        .then(result => this.setState({items : result}))
    }

    render() {

        return (
            <div className='main'>
                <h1>Twitter Like app</h1>
                {this.state.items.map((res) => {
                    return (
                        // <li key={res['id']}>{res['body']}</li>
                        <div className='posts'>
                            <div className="posts_title">{res['title']}</div>
                            <div className='likes'>💚{res['likes']}</div>
                            <div className='posts_body'>{res['body']}</div>
                        </div>
                    )}
                )}
            </div>
        )
    }

}

export default Twitter_like;

