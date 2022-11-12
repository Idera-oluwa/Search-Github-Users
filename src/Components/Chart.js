import React from 'react';
import ChartComponent from '../Charts/Pie'
import DoughnutComponent from '../Charts/Doughnut'
import ColumnComponent from '../Charts/Column'
import BarComponent from '../Charts/Bar'
import {useGlobalContext} from '../context';

const Chart =()=>{
    const {repos} = useGlobalContext();
    const languages = repos.reduce((total, item)=>{
      const {language,stargazers_count} = item
      if (!language) return total;
      if(!total[language]){
          total[language] = {label:language, value:1, stars:stargazers_count}
      }
      else{
          total[language] ={...total[language], value:total[language].value + 1, stars: total[language].stars + stargazers_count}
      }
      return total
    },{})
     const mostUsed= Object.values(languages).sort((a,b)=>{
         return b.value -a.value
     }).slice(0,3)
     const mostPopular = Object.values(languages).sort((a,b)=>{
         return b.stars - a.stars
      }).map((items)=>{
          return {...items, value:items.stars}
      }).slice(0,3)
      let {stars, forks} = repos.reduce((total, item)=>{
       const {stargazers_count,name,forks} = item;
       total.stars[stargazers_count]={label:name,value:stargazers_count}
       total.forks[forks] = {label:name, value:forks}
        return total
      },{
          stars:{}, forks:{}
      })
       stars = Object.values(stars).slice(-5).reverse();
       forks = Object.values(forks).slice(-5).reverse();
    return(
        <div className='charts-container'>
            <div className='pie-column-container'>
            <div className='pie-container'>
            <ChartComponent data={mostUsed}/>
            </div>
            <div className='column-container'>
            <ColumnComponent data={stars}/>
            </div>
            
            </div>
            <div className='doughnut-bar-container'>
            <div className='doughnut-container'>
            <DoughnutComponent  data={mostPopular}/>
            </div>
            <div className='bar-container'>
            <BarComponent  data={forks}/>
            </div>
            </div>
        </div>
    )
}
export default Chart;