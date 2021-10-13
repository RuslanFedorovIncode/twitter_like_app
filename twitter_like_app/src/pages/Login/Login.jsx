import React, { Component } from "react";
import './Login.css';
import validationSchema from './validationSchema'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Checkbox,FormControlLabel,Link,Typography ,Grid,Paper, Avatar, Button} from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FieldSample } from "../../components";


const initialValues = {
  username: '',
  password: '',
  remember: 'false'
}

class Login extends Component {
  render() {
    const onSubmit = (value, props) => {
      setTimeout(() => {
        props.resetForm()
        props.setSubmitting(false)
      }, 2000)

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
                <FieldSample
                  name='username'
                  label='Username'
                  placeholder='Enter username'
                  helperText={<ErrorMessage name="username" />} />
                <FieldSample
                  name='password'
                  label='Password'
                  placeholder='Enter password'
                  helperText={<ErrorMessage name="password" />} />
                <FormControlLabel
                  control={<Field as={Checkbox} name='remember' />}
                  label="Remember me" />
                <Field
                  as={Button}
                  type='submit'
                  fullWidth
                  variant="contained"
                  className="btnstyle"
                  disabled={props.isSubmitting} >{props.isSubmitting ? "Loading" : "Login"}</Field>
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