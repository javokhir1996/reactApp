import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';


import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Home from './pages/Home/index'
import Sidebar from './components/Sidebar';


const Router = ()=>{

    return(
        <BrowserRouter>
            <Sidebar />
            <Switch>
                <Route  path="/" exact component={Home} ></Route>
                <Route  path="/dashboard" component={Dashboard} ></Route>
                <Route  path="/settings" component={Settings} ></Route>
            </Switch>
        </BrowserRouter>
    ) 
}

export default Router;

