import React, { Component } from "react";
import { Button } from "@mui/material";
import validationSchema from './validationSchema'
import { Formik, Form, ErrorMessage } from 'formik';
import { FieldSample } from "../..";


class EditPostBody extends Component {
  render() {
    const { editPost: { title, body, id ,likes}, onHandleChangePost } = this.props;
    return (
      <Formik
        initialValues={{
          title: title,
          body: body,
          id: id,
          likes : likes,
        }}
        onSubmit={onHandleChangePost}
        validationSchema={validationSchema}>
        {({ values,
          handleChange,
          handleSubmit, }) => (
          <Form onSubmit={handleSubmit}>
            <FieldSample
              name='title'
              label='Title'
              placeholder='Write Title'
              helperText={<ErrorMessage name="title" />}
              value={values.title}
              onChange={handleChange}
            />
            <FieldSample
              name='body'
              label='Text'
              placeholder='Write Text'
              helperText={<ErrorMessage name="body" />}
              value={values.body}
              onChange={handleChange}
            />
            <Button
              variant='contained'
              type='submit'>
              Edit Post
            </Button>
          </Form>
        )}
      </Formik>
    )
  }
}

export default EditPostBody;