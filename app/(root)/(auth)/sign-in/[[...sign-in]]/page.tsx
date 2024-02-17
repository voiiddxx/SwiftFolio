import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return <div className='min-h-screen w-full bg-loginBgImage flex justify-center items-center'>
    <SignIn/>
  </div>
}

export default page
