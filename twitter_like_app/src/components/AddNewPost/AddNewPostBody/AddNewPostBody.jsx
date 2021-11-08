import React, { Component } from 'react';
import validationSchema from './validationSchema'
import { Formik, Form, ErrorMessage } from 'formik';
import { FieldSample } from '../..';
import { Button } from '@mui/material';

const initialValues = {
  title: '',
  body: ''
}

class AddNewPostBody extends Component {
  
  onSubmitHandler = (values, { resetForm }) => {
    this.props.addPostThunk(values)
    resetForm()
  }
  
  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.onSubmitHandler}
        validationSchema={validationSchema}>
        {() => (
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
    )
  }
}

export default AddNewPostBody;