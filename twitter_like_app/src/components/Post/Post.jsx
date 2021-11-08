import React, { Component } from "react";
import styles from './Post.module.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';



class Post extends Component {

  render() {
    const { post: { title, likes, body }, deletePostThunk, getEditPost } = this.props
    return (
      <div className={styles.post} >
        <div className={styles.wrapper}>
          <div className={styles.wrapper_child}><div className={styles.post_title}>{title}</div>
            <div className={styles.likes}>💚{likes}</div>
            <div className={styles.post_body}>{body}</div></div>
          <div className={styles.wrapper_child}>
            <Button
              variant="contained"
              className={styles.editButton}
              onClick={() => { getEditPost(this.props.id) }}
              startIcon={<EditIcon />}>
              Edit
            </Button>
            <Button
              variant="contained"
              onClick={() => { deletePostThunk(this.props.id) }}
              startIcon={<DeleteForeverIcon />}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Post;