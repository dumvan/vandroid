import {React} from 'react'
import { BiCheckCircle } from 'react-icons/bi'
import {motion} from "framer-motion"
export default function Modal({onClick}){
  const animationModal ={ 
    hidden:{
      opacity:0,
      scale:0.8
    },
    visible:{
      opacity:1,
      scale:1,
      transition:{
        duration:0.5
      }
    }
  }
  
  return(
    <section onClick={onClick} className='max-w-screen-lg w-full h-full fixed inset-0 flex flex-col items-center justify-center'> 
      <motion.div 
        variants={animationModal}
        initial='hidden'
        animate='visible'
        className='flex flex-col justify-center mx-auto   max-w-60 max-h-60 text-black bg-white p-2 border-t-2 drop-shadow-lg border-green-500 rounded-lg'>
        <BiCheckCircle className='mx-auto text-green-500' size={100}/>
        <h1 className='mt-5 border-t-2 text-center text-2xl font-semibold border-gray-300'>Thank you!</h1>
        <p className='text-xs text-center'>The email has been submitted.</p>
      </motion.div>
    </section>
  )
    
}