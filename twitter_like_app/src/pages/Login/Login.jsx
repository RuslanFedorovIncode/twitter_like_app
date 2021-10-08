import React, { Component } from "react";
import './Login.css';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


class Login extends Component {
  render() {
    const validationSchema = Yup.object().shape({
      username: Yup.string().email('please enter valid email').required('Required'),
      password: Yup.string().required("Required")
    });
    const onSubmit = (value, props) => {
      setTimeout(() => {
        props.resetForm()
        props.setSubmitting(false)
      }, 2000)

    }
    const initialValues = {
      username: '',
      password: '',
      remember: 'false'
    }
    return (
      <Grid>
        <Paper elevation={10} className="paperStyle">
          <Grid align='center'>
            <Avatar className="avatarStyle"> <LockOutlinedIcon /></Avatar>
            <h2>Login</h2>
          </Grid>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(props) => (
              <Form>
                <Field as={TextField} margin="dense" name='username' label='Username' variant="outlined" placeholder="Enter username" fullWidth helperText={<ErrorMessage name="username" />} />
                <Field as={TextField} margin="dense" name='password' label='Password' variant="outlined" placeholder="Enter password" fullWidth type="password" helperText={<ErrorMessage name="password" />} />
                <FormControlLabel control={<Field as={Checkbox} name='remember' />} label="Remember me" />
                <Field as={Button} type='submit' fullWidth variant="contained" className="btnstyle" disabled={props.isSubmitting} >{props.isSubmitting ? "Loading" : "Login"}</Field>
              </Form>
            )}
          </Formik>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography> Do you have an acount ?
            <Link href="#"> Register</Link>
          </Typography>
        </Paper>
      </Grid>
    )
  }
}

export default Login;