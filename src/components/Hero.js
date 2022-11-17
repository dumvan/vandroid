 import React from "react";
 import { BiDownload } from "react-icons/bi";
 import  {motion} from 'framer-motion'

 export default function Hero({name,intro,download,href,profile}){ 
  const animateVariants ={
    hidden:{
      y:10
    },
    visible:{
      opacity:1,
      y:[-10,10],
      transition:{
          
          yoyo:Infinity,
          duration:1.2
      },
      hover:{
        x:10,
      }
    } 
  }
  const buttonVariants={
    hover:{
      x:10,
      transition:{
        duration:0.5,
        yoyo:Infinity
      }
    }
  }
  return(
      <section className="h-screen w-full bg-gradient-to-b from-primary to-tertiary">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
          <motion.div
            
            initial={{x:-100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1}}

            className='flex flex-col justify-center h-full'>
            <h2 className="text-4xl sm:text-6xl font-semibold text-white ">Hi I'm {name}</h2>
            <p className="text-gray-500 py-4 max-w-md">{intro}</p>
            <div>
              <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  className="hover:bg-cyan-400 px-2 py-2 rounded-md border-2 border-cyan-400"
                  >
                  
                  <a
                  className="text-white flex items-center "
                  sandbox="allow-downloads"
                  href={href}
                  download={download}
                  >
                    Download CV <BiDownload className='ml-2 'size={25}/>  
                  </a>
              </motion.button>
            </div>
          </motion.div>
        <motion.div 
          variants={animateVariants}
          initial="hidden"
          animate="visible"
          className="m-4">
          <img className="drop-shadow-lg bg-gradient-to-b from-tertiary to-primary rounded-t-full mx-auto w-2/3 md:w-full" alt='...' src={profile} />
        </motion.div>
        </div>
      </section>
 
  )
 }