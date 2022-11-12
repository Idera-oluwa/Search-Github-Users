import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {useGlobalContext} from '../context';
import {Link} from 'react-router-dom';
const Navbar =()=>{
    //const {user} = useGlobalContext();
    //const {avatar_url,login} = user;
    const {isAuthenticated, user, logout,isLoading, loginWithRedirect } = useAuth0();
    const isUser = isAuthenticated && user;
    return(
        <div className='navbar-container'>
            <img className='navbar-image' src={isUser && user.picture} alt='user image'/>
      <h3 className='welcome'>Welcome, <span className='navspan'>{user && user.name}</span></h3>
      <h3 className='logout'
       onClick={()=>{logout({returnTo:window.location.origin})}}>Logout</h3>
        </div>
    )
}
export default Navbar;