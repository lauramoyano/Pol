import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';
import AuthGuard from './../utils/route-guard/AuthGuard';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Surveys')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Data')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Analytics')));
const UtilsERIcons = Loadable(lazy(() => import('../views/utilities/ER')));
const UtilsCarlosIcons = Loadable(lazy(() => import('../views/utilities/Carlos')));
const UtilsFrankIcons = Loadable(lazy(() => import('../views/utilities/Frank')));
const UtilsExpertIcons = Loadable(lazy(() => import('../views/utilities/Expert')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/dashboard/default',

                '/utils/surveys',
                '/utils/data',
                '/utils/analytics',
                '/icons/er-measure',
                '/icons/frank-measure',
                '/icons/carlos-measure',
                '/icons/expert-measure',

                '/sample-page'
            ]}
        >
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    <AuthGuard>
                        <Route path="/dashboard/default" component={DashboardDefault} />

                        <Route path="/utils/surveys" component={UtilsTypography} />
                        <Route path="/utils/data" component={UtilsColor} />
                        <Route path="/utils/analytics" component={UtilsShadow} />
                        <Route path="/icons/er-measure" component={UtilsERIcons} />
                        <Route path="/icons/frank-measure" component={UtilsFrankIcons} />
                        <Route path="/icons/carlos-measure" component={UtilsCarlosIcons} />
                        <Route path="/icons/expert-measure" component={UtilsExpertIcons} />


                        <Route path="/sample-page" component={SamplePage} />
                    </AuthGuard>
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
