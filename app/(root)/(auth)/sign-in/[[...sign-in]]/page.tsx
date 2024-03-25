import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return <div className='min-h-screen w-full px-10  bg-white  bg-grid-black/[0.05] flex justify-center items-center '>
    <SignIn/>
  </div>
}

export default page
