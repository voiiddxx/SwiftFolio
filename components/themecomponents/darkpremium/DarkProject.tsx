import React from 'react'
import "./DarkProject.css"

const DarkProject = () => {
  return (
    <div className='project-main flex items-center justify-center flex-col'>
      <div className='flex justify-center items-center flex-col gap-1' >
        <h1 className='text-2xl font-bold text-green-300'>Checkout The Projects</h1>
        <p className='font-normal text-zinc-500' >All the projects out there with deployed links</p>
      </div>

      <div className='mt-5'>
        <div className='h-[370px] w-[350px] bg-zinc-800 rounded-lg border-[1px] border-zinc-300' >
        <div className='h-[180px] w-full bg-red-50 rounded-t-lg'>
        </div>
        <div className='p-2'>
           <div className='h-10 w-full flex justify-between items-center '>
           <h1 className='text-teal-300 font-medium text-xl' >Pro Planet Person App</h1>
           <div className='bg-blue-600 rounded-2xl'>
            <p className='text-[11px] py-[2px] px-2'>Deployed</p>
           </div>
           </div>
            <p className='font-light text-zinc-300 text-sm'>The Platform build for identifying the planet who are  people and to motivate them .</p>
        </div>
        </div>
      </div>


    </div>
  )
}

export default DarkProject
