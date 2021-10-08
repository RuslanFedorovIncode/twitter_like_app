import React,{Component} from "react";
import {Grid,Paper,Avatar,Button} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@mui/material/Typography';
import './Login.css';

class Login extends Component {
  
  render() {
    return (
      <Grid>
        <Paper elevation={10} className='paperStyle'>
          <Grid align='center'>
            <Avatar className='avatarStyle'> <LockOutlinedIcon /></Avatar>
            <h2>Login</h2>
          </Grid>
          <Typography align='center' variant='h5'>
            You are logged out!
          </Typography>
          <Button type='submit' fullWidth variant="contained">Login</Button>
        </Paper>
      </Grid>
    )
  }
}

export default Login;