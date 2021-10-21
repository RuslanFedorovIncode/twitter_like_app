import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home ,Login, Profile,Register} from "./pages";
import { PrivateRoute,Navbar } from "./components";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login" component={Login}/>
            
          <Route exact path="/register" component={Register}/>
            
          
          <PrivateRoute exact path='/profile' component={Profile} auth={true}/>
          <Route>
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default Routes;