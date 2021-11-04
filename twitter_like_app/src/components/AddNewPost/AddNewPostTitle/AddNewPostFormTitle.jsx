import React,{Component} from "react";
import { Avatar } from "@mui/material";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import styles from './AddNewPostFormTitle.module.css'

class AddNewPostFormTitle extends Component{
  render(){
    return(
      <>
      <Avatar className={styles.avatar}><AddToPhotosIcon /></Avatar>
      <div className={styles.title}>Title</div>
      </>
    )
  }
}

export default AddNewPostFormTitle;