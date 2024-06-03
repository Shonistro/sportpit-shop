import React from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ComponentType<any>;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  path,
  ...rest
}) => {
  const location = useLocation();
  const accessToken = localStorage.getItem('accessToken');

  return (
    <Route
      path={path}
      {...rest}
      element={
        accessToken ? (
          <Component />
        ) : (
          <Navigate
            to={{
              pathname: '/login',
              search: `?redirect=${encodeURIComponent(location.pathname)}`,
            }}
            replace
          />
        )
      }
    />
  );
};

export default PrivateRoute;