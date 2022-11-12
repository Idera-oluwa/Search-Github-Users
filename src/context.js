import React,{useContext,useState,useEffect} from 'react';
import {MockUser} from './MockData/MockUser';
import {MockFollowers} from './MockData/MockFollowers';
import {MockRepos} from './MockData/MockRepos';
const rootUrl = 'https://api.github.com'
const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [user, setUser] = useState(MockUser)
    const [followers, setFollowers] = useState(MockFollowers)
    const [repos, setRepos] = useState(MockRepos)
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({show:false,msg:''})
    const [remains, setRemains] = useState(0)
    let userUrl = `${rootUrl}/users/${name}`
    const fetchUrls = async () =>{
        setLoading(true)
        try{
        const userData = await fetch(userUrl)
        const newUser = await userData.json()
        const followersData = await fetch(`${userUrl}/followers`)
        const newFollowers = await followersData.json()
        const reposData = await fetch(`${userUrl}/repos?per_page=100`)
        const newRepos = await reposData.json()
        if(newUser.message === 'Not Found'){
            setUser(user);
            setFollowers(followers)
            setRepos(repos)
            setLoading(false)
            setError({show:true,msg:'Opps! There is no user with that username'})
            setName('')
        } else{
            setUser(newUser);
            setFollowers(newFollowers)
            setRepos(newRepos)
            setLoading(false)
            setName('')
            setError({show:false,msg:''})
        }
        }
        catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    const remainsUrl= async ()=>{
        const remainsData = await fetch(`${rootUrl}/rate_limit`);
    const newRemains = await remainsData.json();
    const remaining = newRemains.resources.core.remaining
    setRemains(remaining)
    if(remaining === 0){
        setError({show:true,msg:'Sorry, you have exceeded your hourly limit!'})
    }
    }
    useEffect(()=>{
        remainsUrl()
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetchUrls()
        remainsUrl()
    }
    const handleClick = (url) =>{
        const fetchFollowersData=()=>{
            const targetFollower = followers.find((follower)=>follower.url === url)
            console.log(targetFollower.url)
            userUrl = targetFollower.url;
     }
     fetchFollowersData();
     fetchUrls();
     remainsUrl()
    }

    return(
        <AppContext.Provider value={{user,remains,loading,followers,repos,name,setName,handleClick,handleSubmit,error}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext =()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}