import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./routes";
import Layout from "../components/layout/Layout";

const Router = () => (
    <BrowserRouter>
        <Switch>
            {/* Basic Layout with Header and Footer for render pages */}
            <Layout>
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
            </Layout>
        </Switch>
    </BrowserRouter>
);

export default Router;
