import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div className="loading-spinner py-5 my-5">
            <Spinner animation="grow" variant="primary" />
        </div>
    }
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