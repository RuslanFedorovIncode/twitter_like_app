import React, { Component } from "react";
import styles from './ModalWindow.module.css'
import { Dialog, DialogTitle, DialogContent, Button, Avatar } from '@mui/material';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import CloseIcon from '@mui/icons-material/Close';
import validationSchema from './validationSchema'
import { Formik, Form, ErrorMessage } from 'formik';
import { FieldSample } from "../../components";

const initialValues = {
  title: '',
  body: ''
}

class ModalWindow extends Component {

  onSubmitHandler = (values, { resetForm }) => {
    this.props.addPostThunk(values)
    resetForm()
  }
  render() {
    return (
      <Dialog
        open={true}
        onClose={this.props.onStateChange}>
        <CloseIcon
          className={styles.closeIcon}
          onClick={this.props.onStateChange} />
        <Avatar className={styles.avatar}><AddToPhotosIcon /></Avatar>
        <DialogTitle
          id="form_addPost"
          className={styles.dialogTitle}
        >Add New Post</DialogTitle>
        <DialogContent className={styles.dialogContent}>
          <Formik
            initialValues={initialValues}
            onSubmit={this.onSubmitHandler}
            validationSchema={validationSchema}>
            {(props) => (
              <Form>
                <FieldSample
                  name='title'
                  label='Title'
                  placeholder='Write Title'
                  helperText={<ErrorMessage name="title" />} />
                <FieldSample
                  name='body'
                  label='Text'
                  placeholder='Write Text'
                  helperText={<ErrorMessage name="body" />} />
                <Button
                  variant='contained'
                  type='submit'>
                  ADD POST
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    )
  }
}

export default ModalWindow;