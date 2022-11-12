import React from 'react';
import {useGlobalContext} from '../context';
import { MdBusiness, MdLocationOn, MdLink } from 'react-icons/md';
const User =()=>{
    const {user, followers,handleClick} = useGlobalContext();
    const {avatar_url:userImg,login:userLogin,blog,bio,name,company,location} = user;
    return(
        <div className='cards-container'>
        <p className='user-text'>User</p>
      <div className='users-container'>
     <div className='user-heading'>
         <img className='user-img' src={userImg}/>
         <div className='user-name-login'>
             <h3 className='user-name'>{name}</h3>
             <p className='user-login'>@{userLogin}</p>
         </div>
         <button className='follow-btn'>Follow</button>
     </div>
      <div>
      {/*The rest of the first component will be here*/}
      <p className='user-bio'>{bio}</p>
       <p className='user-business'><MdBusiness/> {company}</p>
       <p className='user-location'><MdLocationOn/> {location}</p>
       <p className='user-link'><MdLink/> {blog}</p>
      </div>
      </div>
      <p className='followers-text'>Followers</p>
      <div className='followers-container'>
      <p className='followers-textt'>Followers</p>
     {/*The second component will be here*/}
          {followers.map((follower,index)=>{
               const {avatar_url, url,login} = follower;
               return(
                   <div key={index}className='followers-sub-container' onClick={()=>{handleClick(url)}}>
                       <img className='followers-image' src={avatar_url} alt='display img'/>
                   <div>
                   <h3 className='followers-login'>{login}</h3>
                   <p className='followers-url'>{url}</p>
                   </div>
                   </div>
               )
          })}
      </div>
        </div>
    )
}
export default User;