import React, { Component } from "react";
import styles from './ModalWindow.module.css'
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';


class ModalWindow extends Component {

  render() {
    const { children, onClose, title } = this.props
    return (
      <Dialog
        open={true}
        onClose={onClose}>
        <CloseIcon
            className={styles.closeIcon}
            onClick={onClose} /> 
        <DialogTitle>
          {title}
        </DialogTitle>
        <DialogContent className={styles.dialogContent}>
          {children}
        </DialogContent>
      </Dialog>
    )
  }
}

export default ModalWindow;