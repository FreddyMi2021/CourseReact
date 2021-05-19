import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  let admin = JSON.parse(localStorage.getItem('currentAdmin'));

  return (
    <Route
      {...rest}
      render={(props) =>
        admin && admin.authData ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login_page' />
        )
      }
    />
  );
}

export default PrivateRoute;
