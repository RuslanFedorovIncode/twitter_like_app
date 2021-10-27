import React, { Component } from "react";
import styles from './PostError.module.css';
import ErrorIcon from '@mui/icons-material/Error';


class PostError extends Component {
  render() {
    const { post: { title } } = this.props
    return (
      <div className={styles.post} >
        <div className={styles.wrapper}>
          <div className={styles.wrapper_child}><div>
            <ErrorIcon sx={{ color: '#FF0000', fontSize: 40 }} />
          </div></div>
          <div className={styles.wrapper_child}>
            <div className={styles.post_title}>{title}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostError;