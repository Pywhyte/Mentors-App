import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authContext } from '../context/context';
import { publicRoutes, privateRoutes } from '../router/index';


const AppRouter = () => {
  const { isAuth } = useContext(authContext)

  

  return (
    isAuth
      ?
      <Switch>
        {privateRoutes.map(route =>
          <Route component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path} />
        )}
        {/* <Redirect to="/myprofile" /> */}
      </Switch>
      :
      <Switch>
        {publicRoutes.map(route =>
          <Route component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path} />
        )}
        <Redirect to="/login" />
      </Switch>


  );
};

export default AppRouter;