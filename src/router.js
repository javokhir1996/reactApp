import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import Home from './pages/Home'
import Dushboard from './pages/Dushboard'
import Settings from './pages/Settings'
import Sidebar from './components/sidebar';

function Router() {
    return(
        <BrowserRouter>
            <Sidebar/>
            <Switch>
                <Route path="/" exact component={Home} ></Route>
                <Route path="/dushboard" component={Dushboard} ></Route>
                <Route path="/settings" component={Settings} ></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;