import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Login from './pages/login';
import Main from './pages/Main';

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dev/:id" component={Main} />
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    )
}