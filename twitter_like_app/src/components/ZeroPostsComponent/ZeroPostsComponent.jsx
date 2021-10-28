import React,{Component} from 'react';
import './ZeroPostsComponent.css'
import ContentPasteOffIcon from '@mui/icons-material/ContentPasteOff';

class ZeroPostsComponents extends Component {
  render(){
    return (
      <div className="zeroPosts">
        <ContentPasteOffIcon sx={{ fontSize : 72 }} />
        <h2>No Posts ...</h2>
      </div>
    );
  }
  
}

export default ZeroPostsComponents;