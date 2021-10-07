import React,{Component} from "react";
import {Grid,Paper,Avatar,Button} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@mui/material/Typography';

class Login extends Component {
  render() {

    const paperStyle = { padding: 20, height: '30vh', width: 280, margin: "20px auto" };
    const avatarStyle = { backgroundColor: '#cc9053', margin: 20 };
    const btnstyle = { margin: '20px 0' }
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align='center'>
            <Avatar style={avatarStyle}> <LockOutlinedIcon /></Avatar>
            <h2>Login</h2>
          </Grid>
          <Typography align='center' variant='h5'>
            You are logged out!
          </Typography>
          <Button type='submit' fullWidth variant="contained" style={btnstyle}>Login</Button>
        </Paper>
      </Grid>
    )
  }
}

export default Login;