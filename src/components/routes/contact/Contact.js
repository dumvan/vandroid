import React from "react"
import ContactForm from "./ContactForm"
import {motion} from 'framer-motion'

export default function Contact(){
  const animateVariants ={
    hidden:{
      opacity:0,
      scale:0.9
    },
    visible:{
      opacity:1,
      scale:1,
      transition:{
        duration:0.2
      }
    }
  }
  return (
  <React.Fragment>
    <section className="flex flex-col items-center mx-auto justify-center w-full min-h-screen bg-gradient-to-b from-secondary to-tertiary text-white"> 
      <div className="mt-20 p-4 max-w-screen-lg mx-auto flex flex-col justify-center h-full w-full">
        <motion.div 
        variants={animateVariants}
        initial="hidden"
        animate="visible"
        className='drop-shadow-xl rounded-lg bg-gradient-to-b from-tertiary to-primary max-w-screen flex flex-col justify-center mx-auto p-8 w-full h-full '>
          <div className='pb-8'>
            <h1 className='capitalize text-2xl md:5xl'>contact me</h1>
          </div>
          <div>
            <p className='text-sm pt-2 border-t-2 border-white'>Submit the form below to get in touch.</p>
            <ContactForm/>
          </div>
       </motion.div>
      </div>
    </section>
  </React.Fragment>)
}