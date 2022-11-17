import React from "react";
import data from '../../assets/profile.json'
import {motion} from 'framer-motion'
export default function About() {
  
  const animateVariants ={ 
    hidden:{opacity:0,y:100},
    visible:{opacity:1,y:0, transition:{type:"stiff", duration:0.5}}
  }

  return (
  <React.Fragment>
    <section 
      className="w-full h-screen bg-gradient-to-b from-secondary to-tertiary text-white">
      <motion.div
         variants={animateVariants}
         initial="hidden"
         animate="visible"
         className="max-w-screen p-8 w-full h-full flex flex-col justify-center mx-auto">
        <div className="pb-8 ">
          <p className="text-5xl pb-2 font-semibold border-b-4  border-tertiary capitalize">about</p>
        </div>
          {data && data.map((about,index) => <p key={index} className="mt-5 text-xl md:mt-15">{about.about}</p>)}
        </motion.div>
    </section>
  </React.Fragment>
  )
}