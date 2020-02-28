import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./routes";
import Layout from "../components/layout/Layout";
import NotFound from "../components/containers/NotFound";

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        {/* Basic Layout with Header and Footer for render pages */}
        <Layout>
            <Switch>
                {Array.isArray(routes) && (
                    routes.map(route =>
                        <Route
                            exact
                            key={route.id}
                            path={route.path}
                            component={route.component}
                        />
                    )
                )}
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default Router;
