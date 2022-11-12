import React from 'react';
import {Navigate} from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react"
const PrivateRoute =({children})=>{
    const {isAuthenticated,user} = useAuth0()
    const isUser= isAuthenticated && user;
    return(
        <div>
              {isUser? children : <Navigate to='/login'/>}
        </div>
    )
}
export default PrivateRoute;