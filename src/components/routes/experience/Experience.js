import React from "react"
import Education from './Education'
import Skills from "./Skills"
import data from '../../assets/profile.json'
import {nanoid} from 'nanoid'
import {motion} from 'framer-motion'
export default function Experience(){
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0,
        staggerChildren: 0.3
      }
    }
  }
  

  const animateVariants = {
    hidden:{
      opacity:1,
      x:100
    },
    visible:{
      opacity:1,
      x:0,
      transition: {
      type: "spring",
      stiffness: 100,
      mass: 0.3
    }

    }
  }
  
  return (
    <React.Fragment>
      <section  
        className="flex flex-col items-center mx-auto justify-center w-full min-h-screen bg-gradient-to-b from-secondary to-tertiary text-white"> 
        <motion.div
          variants={container}
          initial="hide"
          animate="show"
          className="mt-20 p-4 max-w-screen-lg mx-auto flex flex-col justify-center h-full w-full">
          {/*============Studied==============================*/}
          <motion.div 
            variants={animateVariants}
            initial="hidden"
            animate="visible"
            >{data && data.map((education) => education.education.map(edu => 
          <Education 
            key={nanoid(10)}
            courseName={edu.course}
            schoolYear={edu.schoolYear}
            schoolName={edu.schoolName}
            />))}</motion.div>
          <br/>
          {/*=========================Skills====================*/}
          <motion.div
            variants={animateVariants}
            initial="hidden"
            animate="visible"
          ><Skills/>
          </motion.div>
        </motion.div>
    </section>
    </React.Fragment>
    
  )
}