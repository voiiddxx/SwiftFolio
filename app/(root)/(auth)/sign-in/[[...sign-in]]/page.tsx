import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return <div className='min-h-screen w-full px-10  bg-black bg-dot-white/[0.2] flex justify-center items-center'>
    <SignIn/>
  </div>
}

export default page
