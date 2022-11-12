import React from 'react';
import Navbar from '../Components/Navbar';
import Search from '../Components/Search';
import Info from '../Components/Info';
import User from '../Components/User'
import Chart from '../Components/Chart'
import {useGlobalContext} from '../context'
const Home =()=>{
    const {loading} = useGlobalContext();
    if(loading){
        return(
            <div className='loading'>
            </div>
        )
    }
    return(
        <div>
        <Navbar/>
        <Search/>
        <Info/>
        <User/>
        <Chart/>
        </div>
    )
}
export default Home;