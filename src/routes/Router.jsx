import React from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";

import routes from "./routes";
import Layout from "../components/layout/Layout";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Layout>
                {Array.isArray(routes) && (
                    routes.map(route => <Route path={route.path} component={route.component} exact/>)
                )}
            </Layout>
        </Switch>
    </BrowserRouter>
);

export default Router;
