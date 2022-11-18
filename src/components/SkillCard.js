import {createElement,React,useEffect , useState} from 'react'
import {CircularProgressbarWithChildren , buildStyles} from 'react-circular-progressbar'
import data from './assets/profile.json'
import * as FontAwesome  from "react-icons/fa"
import {nanoid} from 'nanoid'
import 'react-circular-progressbar/dist/styles.css'


export default function SkillCard(){
  const [skillList,setSkillList]= useState('')
  useEffect(()=>{
    setSkillList(data)
  },[skillList])
  
  const style ={
    trailColor: '#023e7d',
    pathTransitionDuration: 2,
  }


  return(
     <>{skillList && skillList.map(skill => skill.skills.map(list =>
         <div 
         key={nanoid(10)}
        className='grid items-cent m-5  min-w-lg w-40 drop-shadow-2xl uppercase'>
        <CircularProgressbarWithChildren
          value={list.value}
          maxValue={100}
          styles={buildStyles({style})}
        >
          <div key={nanoid(10)} className='flex items-center flex-col'> 
            {createElement(FontAwesome[list.icons],{style:{fontSize:"60" ,color:list.color}})}
            <p><strong>{list.value}</strong>%</p>
            <p className='text-sm md:text-xs'>{list.skillName}</p>
          </div>
        </CircularProgressbarWithChildren>
      </div>
      ))}</>
  )
}