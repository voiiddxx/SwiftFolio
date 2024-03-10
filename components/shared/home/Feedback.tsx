import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const Feedback = () => {
  return (
    <div className='bg-violet-700 md:min-h-[500px] h-[400px] mt-20 md:mx-20 flex flex-col justify-center items-center  rounded mb-40' >
      <div>
        {/* <h1 className='text-xl font-medium  text-gray-200' >YOUR FEEDBACK MATTERS</h1> */}
        <h1 className='text-white md:text-5xl text-2xl font-semibold' >We will Love Your feedabck</h1>
        <h1 className='text-gray-300 font-medium text-center mt-2 md:text-3xl' >Your Feedback Matters</h1>
        <Textarea className='bg-transparent mt-8 text-white border-none placeholder:text-gray-400  outline-none' placeholder='write about swiftfolio, you can write whatever you want ' />
        <Button className='mt-4 w-full' >Submit Your Review</Button>
      </div>
    </div>
  )
}

export default Feedback
