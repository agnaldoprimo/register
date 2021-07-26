import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Product from './pages/Products';
import Customer from './pages/Customer';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cadastro-produto" component={Product} />
                <Route exact path="/lista-produto" component={Product} />
                <Route exact path="/cadastro-cliente" component={Customer} />
                <Route exact path="/lista-cliente" component={Product} />
            </Switch>
        </BrowserRouter>
    );
}