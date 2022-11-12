import React from 'react';
import login from './login-img.svg'
import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"
const LogIn =()=>{
    const {loginWithRedirect} = useAuth0();
    return(
        <div className='logout-container'>
       <img className='logout-img' src={login}/>
       <h1 className='logout-header'>Hello There</h1>
       <Link to='/login'><button className='logout-btn' onClick={loginWithRedirect}>LOG IN / SIGN UP</button></Link>
        </div>
    )
}
export default LogIn;