import React from 'react'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'


export default function NavbarLinks(){
  const navOptions = [
    {title:'home', path:'/', icon: "..."},
    {title:'about', path:'/about-me', icon: "..."},
    {title:'experience', path:'/experience', icon: "..."},
    {title:'contact', path:'/contact-me', icon: "..."}] 
  const animateVariants ={
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        type: "spring",
        stiffness:80,
        when:"beforeChildren"
      }
    },
    hover:{
      type:'spring',
      backgroundColor:'#00CED1',
      boxShadow:"-13px -31px 0px -27px rgba(255,255,255,1) inset", 
      transition:{
        duration:0.1,
      }
    }

  }
  
    return(
    <>
      {navOptions.map((list,index)=>
            <NavLink 
              key={index}
              to={list.path}>
              <motion.li 
                variants={animateVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className='p-4'>
                {list.title}
              </motion.li>
            </NavLink>
            )}         
    </>
  )
}