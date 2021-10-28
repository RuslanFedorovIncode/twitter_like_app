import React, { Component } from "react";
import styles from'./Post.module.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

class Post extends Component {

  render() {
    
    const { post: { title, likes, body } } = this.props
    return (

      <div className={styles.post} >
        <div className={styles.wrapper}>
          <div className={styles.wrapper_child}><div className={styles.post_title}>{title}</div>
            <div className={styles.likes}>💚{likes}</div>
            <div className={styles.post_body}>{body}</div></div>
          <div className={styles.wrapper_child}><div>
            <Button variant="outlined" onClick={()=>{this.props.deletePostThunk(this.props.id)}} startIcon={<DeleteForeverIcon />}>
              Delete
            </Button>
          </div></div>
        </div>
      </div>
    )
  }
}

export default Post;