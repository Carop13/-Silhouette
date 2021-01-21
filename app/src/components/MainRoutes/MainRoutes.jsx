import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home} from "../../RootComponents/Home/Home";
import PLP from "../../RootComponents/PLP/PLP";
import PDP from "../../RootComponents/PDP/PDP";

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path={`/plp/:id`} component={PLP} />
            <Route exact path={`/pdp/:id`} component={PDP} />
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default MainRoutes;
