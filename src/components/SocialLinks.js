import React from 'react'
import {FaLinkedinIn ,FaFacebookF,FaGoogle} from 'react-icons/fa'

export default function SocialLinks(){
  const links =[
    {
      id:1,
      child:(
        <>LinkedIn <FaLinkedinIn size={30}/></>
      ),
      href:'https://linkedin.com'
    },
    {
      id:2,
      child:(
        <>Facebook <FaFacebookF size={30}/></>
      ),
      href:'https://www.facebook.com'
    },
    {
      id:3,
      child:(
        <>Google <FaGoogle size={30}/></>
      ),
      href:'https://www.gmail.com'
    },
  ]
  return(
    <React.Fragment>
    <section className='hidden md:flex fixed  flex-col top-[35%] left-0  '>
      <ul>
        {links.map((link)=>
        <li key={link.id} className='flex items-center justify-between w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]'>
          <a className='w-full flex justify-between items-center text-white '
             target='_blank'
             rel="noreferrer"
             href={link.href}>
             
            {link.child}
          </a>
        </li>)}

      </ul>
    </section>
  </React.Fragment>
  ) 
  }
  
