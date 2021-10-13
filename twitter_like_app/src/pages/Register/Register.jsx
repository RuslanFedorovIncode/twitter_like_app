import React, { Component } from "react";
import "./Register.css"
import { Grid, Paper, Avatar, Typography, TextField, Button, FormHelperText } from "@material-ui/core";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Checkbox } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import validationSchema from "./validationSchema";
import { FieldSample } from "../../components";

const initialValues = {
  name: '',
  email: '',
  gender: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  termsAndConditions: 'false',
};

class Register extends Component {
  render() {
    const onSubmit = (values, props) => {
      console.log(values);
      console.log(props);
      setTimeout(() => {
        props.resetForm()
        props.setSubmitting(false)
      }, 2000)
    };

    return (
      <Grid>
        <Paper elevation={10} className="paperstyle">
          <Grid align='center'>
            <Avatar className="avatarstyle">
              <AddCircleOutlineIcon />
            </Avatar>
            <h2>Register</h2>
            <Typography variant='caption'>
              Please fill this form to create an acount!
            </Typography>
          </Grid>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props) => (
              <Form>
                <FieldSample
                  name='name'
                  label='Name'
                  placeholder="Enter your name"
                  helperText={<ErrorMessage name='name' />} />
                <FieldSample
                  name='email'
                  label='Email'
                  placeholder="Enter your email"
                  helperText={<ErrorMessage name='email' />} />
                <FormControl component="fieldset" >
                  <FormLabel component="legend">Gender</FormLabel>
                  <Field
                    as={RadioGroup}
                    aria-label="gender"
                    name="gender"
                    style={{ display: 'initial' }} >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </Field>
                </FormControl>
                <FormHelperText><ErrorMessage name='gender' /></FormHelperText>
                <FieldSample
                  label='Phone Number'
                  name='phoneNumber'
                  placeholder="Enter your phone number"
                  helperText={<ErrorMessage name='phoneNumber' />} />
                <FieldSample
                  label='Password'
                  type='password'
                  name='password'
                  placeholder="Enter your password"
                  helperText={<ErrorMessage name='password' />} />
                <FieldSample
                  label='Confirm Password'
                  type='password'
                  name='confirmPassword'
                  placeholder="Confirm your password"
                  helperText={<ErrorMessage name='confirmPassword' />} />
                <FormControlLabel
                  control={<Field as={Checkbox} name="termsAndConditions" />}
                  label="I accept the terms and conditions."
                  name='termsAndConditions' />
                <FormHelperText><ErrorMessage name='termsAndConditions' /></FormHelperText>
                <Button
                  type='submit'
                  variant='contained'
                  disabled={props.isSubmitting}
                  color='primary'>{props.isSubmitting ? "Loading" : "Register"}</Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    )
  }
}

export default Register;