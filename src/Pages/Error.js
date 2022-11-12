import React from 'react';
import {Link} from 'react-router-dom'
const Error =()=>{
    return(
        <div className='error-container'>
       <h1 className='error-header'>404</h1>
       <p className='error-text'>Sorry, The Page You Tried Cannot Be Found</p>
       <Link to='/' className='link'><button className='error-button'>BACK HOME</button></Link>
        </div>
    )
}
export default Error;