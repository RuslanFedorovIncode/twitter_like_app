import React,{Component} from "react";
import styles from './EditPostTitle.module.css';
import EditIcon from '@mui/icons-material/Edit';
import { Avatar } from "@mui/material";

class EditPostTitle extends Component {
  render() {
    return (
      <>
      <Avatar className={styles.avatar}><EditIcon/></Avatar>
      <div className={styles.title}>Edit post</div>
      </>
    )
  }
}

export default EditPostTitle;