import {React,useRef ,useState} from 'react'
import {useForm } from 'react-hook-form'
import Modal from '../../Modal'
import emailjs from '@emailjs/browser'

export default function ContactForm(){
  const [showModal, setShowModal] = useState(false)
 
  const { register, handleSubmit, reset , formState: { errors } } = useForm()
  
  const form = useRef();

  const onSubmit = (data , e) => {
    e.preventDefault()

    emailjs.sendForm('service_tpmc8xs', 'template_o3o8sgl', form.current, 'IIO2-ugj60tsl8qBZ')
      .then((result) => {        
          console.log(result.text)
          setShowModal(true)
          reset()
          return             
      }, (error) => {
          console.log(error.text)
          return
      });
  };
  return(
     <section>
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className='mt-5 gap-4 text-black flex flex-col'
          >
            <input className='pl-2 rounded-sm focus:outline-none' type='text' placeholder='Enter your Name' {...register("fullname")}/>
            <p className='delay-500 bg-red-600 text-sm'>{errors.weight?.fullname}</p>
            <input className='pl-2 rounded-sm focus:outline-none' type='email' placeholder='Enter your Email' {...register("email")}/>
            <p className='delay-500 bg-red-600 text-sm'>{errors.weight?.email}</p>
            <textarea className='pl-2 pt-2 rounded-sm focus:outline-none' rows={10} placeholder='Enter your Message'{...register('emailMessage')}/>
            <p className='delay-500 bg-red-600 text-sm'>{errors.weight?.emailMessage}</p>
            <input className=' text-white drop-shadow-lg rounded-lg bg-tertiary p-2 mx-auto' type='submit'/>
          </form> 
          {showModal ? <Modal onClick={()=>setShowModal(!showModal)}/> : null}   
        </section>
      
 )
}