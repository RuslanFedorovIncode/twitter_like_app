import React,{Component} from 'react';
import './Preloader.css'
import CircularProgress from '@mui/material/CircularProgress';

class Preloader extends Component {
  render(){
    return (
      <div className="preloader">
        <CircularProgress color='inherit' size='64px' />
        <h2>{this.props.text}</h2>
      </div>
    );
  }
  
}

export default Preloader;