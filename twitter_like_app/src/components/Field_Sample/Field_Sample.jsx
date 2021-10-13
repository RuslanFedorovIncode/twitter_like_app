import React, { Component } from "react";
import {TextField} from '@mui/material';
import { Field} from 'formik';


class Field_Sample extends Component {
  render() {
    return (
      <Field
        as={TextField}
        margin="dense"
        variant="outlined"
        fullWidth
        {...this.props}
      />

    )
  }
}

export default Field_Sample;
