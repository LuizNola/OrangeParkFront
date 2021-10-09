import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogged } from '../services/AuthHandler';

export default  ({ children, ...rest }) =>{

    let logged = isLogged();
    let auth = (rest.private && !logged) ? false : true

    return(
        <Route
        {...rest}
        render={()=>
             auth ? children : <Redirect to="/login"/>
        }
        />
    )
}