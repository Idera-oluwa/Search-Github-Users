import React from 'react';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import {useGlobalContext} from '../context';
const Info =()=>{
    const {user} = useGlobalContext();
    const {public_repos:repos,public_gists:gists,followers,following} = user;
    const infos=[
        {
            id:1,
            icon:<GoRepo className='repo-icon'/>,
            name:'Repos',
            value:repos
        },
        {
            id:2,
            icon:<FiUsers className='followers-icon'/>,
            name:'Followers',
            value:followers
        },
        {
            id:3,
            icon:<FiUserPlus className='following-icon'/>,
            name:'Following',
            value:following
        },
        {
            id:4,
            icon:<GoGist className='gists-icon'/>,
            name:'Gists',
            value:gists
        },
    ]
    return(
        <div className='infos-container'>
       {infos.map((info)=>{
      const {id,icon,name,value} = info
      return(
          <div key={id} className='info-container'>
          <p  className='info-icon'>{icon}</p>
          <div className='name-value'>
              <h3 className='info-value'>{value}</h3>
              <p className='info-name'>{name}</p>
          </div>
          </div>
      )
       })}
        </div>
    )
}
export default Info;