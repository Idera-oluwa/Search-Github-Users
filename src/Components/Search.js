import React from 'react';
import {useGlobalContext} from '../context';
import {FaSearch} from 'react-icons/fa'
const Search =()=>{
    const {name,setName,handleSubmit,error,remains} = useGlobalContext();
    return(
        <div className='search-total-container'>
           <div className='error-div'> 
          {error.show && <p className='error'>{error.msg}</p> } 
           </div>
          <div className='search-request'>
          <div className='search-container'>
          <FaSearch className='search-icon'/>
          <input placeholder='Enter Github User'
           className='search'
           value={name}
           onChange={(e)=>setName(e.target.value)}
            type='text'/>
         {remains !== 0 && <button className='search-button' onClick={handleSubmit}>Search</button> }
          </div>
          <div className='request-div'><p className='requests'>Requests: {remains}/60</p></div>
          </div>
        </div>
    )
}
export default Search;