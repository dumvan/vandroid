import React from 'react'

export default function Education({courseName ,schoolName , schoolYear}){

  return(
    <React.Fragment>
       <div className="p-4 max-w-screen-lg flex flex-col justify-center mx-auto w-full h-auto bg-gradient-to-tr from-tertiary to-tertiary rounded-lg drop-shadow-lg">
          <div className="pb-8">
            <p className="sm:text-5xl text-2xl capitalize font-semibold border-b-2 inline border-white">education</p>
          </div>
          <h1 className='border-b-2 mb-2 text-xl'>{courseName}</h1>
          <div className="flex justify-between flex-col sm:flex-row">
            <p className='text-sm'>{schoolName}</p>
            <p className='text-sm'>{schoolYear}</p>
          </div>
        </div>
    </React.Fragment>
  )
}