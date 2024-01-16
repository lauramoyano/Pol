import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Loadable from '../ui-component/Loadable';

// project imports
import MinimalLayout from './../layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('../views/pages/authentication/login/index')));
const AuthRegister3 = Loadable(lazy(() => import('../views/pages/authentication/register/index')));

//-----------------------|| AUTHENTICATION ROUTING ||-----------------------//

const AuthenticationRoutes = () => {
    const location = useLocation();

    return (
        <Route path={['/pages/login', '/pages/register']}>
            <MinimalLayout>
                <Switch location={location} key={location.pathname}>
                    <Route path="/pages/login" component={AuthLogin3} />
                    <Route path="/pages/register" component={AuthRegister3} />
                </Switch>
            </MinimalLayout>
        </Route>
    );
};

export default AuthenticationRoutes;
