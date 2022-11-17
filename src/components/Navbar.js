import React from 'react'
import NavbarLinks from '../../src/components/NavbarLinks'
import {FiMenu, FiX} from 'react-icons/fi'
import {useState} from 'react'
import {motion} from 'framer-motion'

export default function Navbar(){
  const [openMenu , setOpenMenu] = useState(false)
  const animateVariants ={ 
   hidden:{
     opacity:0,
     y:-100 
   },
   visible:{
    opacity:1,
    y:0,
    transition:{
      type: "stiff",
      duration: 0.8
    }
   },
   visiblePop:{
    opacity:1,
    x:0,
    transition:{
      type: "spring",
      stiffness:80,
      duration: 0.5,
      delay:0.8
    },
   },
   
   hover:{
    x:[-2,2],
    transition:{
      yoyo:Infinity,
      duration:0.5
    }
  } 
  }
  return(
    <motion.nav
    variants={animateVariants}
    initial="hidden"
    animate="visible"
    > 
      <div className='fixed w-full z-50 px-4 flex justify-between items-center bg-primary text-white'>
        <motion.h1 
        variants={animateVariants}
        initial={{x:-100 ,opacity: 0}}
        animate="visiblePop"
        whileHover="hover"
        className='z-50 '>Drooid</motion.h1>
        <button className='flex z-50 items-center md:hidden' onClick={() => setOpenMenu(!openMenu)}>
            {!openMenu ? <FiMenu/>:<FiX/> }
        </button>
        <motion.ul 
        variants={animateVariants}
        initial={{x:-100,opacity: 0}}
        animate="visiblePop"
        className='md:flex hidden capitalize items-stretch'>
          <NavbarLinks/>
        </motion.ul>
      </div> 
      <ul className={`${!openMenu ? 'hidden':'z-40'} md:hidden grid place-items-center bg-primary text-white text-center uppercase absolute w-full h-screen bottom-0 py-24`} >
        <NavbarLinks />
      </ul>    
    </motion.nav>
  ) 
}