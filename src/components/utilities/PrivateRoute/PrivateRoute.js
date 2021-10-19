import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect
                    to={{
                        pathname: "/signIn",
                        state: { from: location }
                    }}
                />
            }
        >

        </Route>
    );
};

export default PrivateRoute;