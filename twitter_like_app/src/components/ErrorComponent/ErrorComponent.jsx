import React, { Component } from "react";
import styles from './ErrorComponent.module.css';
import ErrorIcon from '@mui/icons-material/Error';


class ErrorComponent extends Component {
  render() {
    return (
      <div className={styles.post} >
        <div className={styles.wrapper}>
          <div className={styles.wrapper_child}><div>
            <ErrorIcon sx={{ color: '#FF0000', fontSize: 40 }} />
          </div></div>
          <div className={styles.wrapper_child}>
            <div className={styles.post_title}>{this.props.error}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ErrorComponent;