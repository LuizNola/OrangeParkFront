import React from "react";

import {Switch} from 'react-router-dom'

import RouterHandler from "./components/RouterHandler";
import { VeiculoProvider } from "./context/veiculoContext";

import Login from './pages/login/index'
import PageNotFound from "./pages/404";
import CarList from "./pages/carlist";

const Router = () => {

    return(
    <Switch>

        <RouterHandler exact path = "/">
            <Login/>
        </RouterHandler>

        <RouterHandler exact path = "/login">
            <Login/>
        </RouterHandler>

        <RouterHandler private exact path = "/carlist">
            <VeiculoProvider>
                <CarList/>
            </VeiculoProvider>
        </RouterHandler>

        <RouterHandler >
            <PageNotFound/>
        </RouterHandler>
  
    </Switch>
    )
}

export default Router;