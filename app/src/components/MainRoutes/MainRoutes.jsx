import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Home} from "../../RootComponents/Home/Home";
import PLP from "../../RootComponents/PLP/PLP";

const MainRoutes = () => {
    return (
        <Switch>
            <Route exact path="/plp">
                <PLP />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    );
};

export default MainRoutes;
