import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => {
      if (auth) return <Component {...props} />;
      if (!auth) return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    }} />
  )
}

export default PrivateRoute;