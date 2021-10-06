import React,{Component} from "react";
import { Link } from "react-router-dom";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Button } from "@material-ui/core";





class Navbar extends Component{

    render(){
        return(
                    <AppBar  position='static' color='default'>
                        <Toolbar>
                            <Button color="inherit" component={Link} to="/">Home</Button>
                            <Button color="inherit" component={Link} to="/login">Login</Button>
                            <Button color="inherit" component={Link} to="/register">Register</Button>
                            <Button color="inherit" component={Link} to="/profile_page">Profile_Page</Button>
                        </Toolbar>
                    </AppBar>
                )
    }
}

export default Navbar;
