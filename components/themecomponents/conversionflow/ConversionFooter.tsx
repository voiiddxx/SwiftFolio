import React from 'react'

const ConversionFooter = () => {
  return (
    <div className='pb-10 w-full bg-black md:px-32 pt-20 px-4' >
      <h1 className='text-white text-3xl font-semibold' >Want to connect with me?</h1>
      <h1 className='text-3xl font-semibold  bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >Click me to connect</h1>

     <div className='mt-16' >
     <h1 className='text-xl font-medium text-white' >Nikhil Kumar</h1>
      <p className='text-xl font-medium text-gray-600' >nikhildesign@gnail.com</p>
     </div>
     <div className='w-full flex justify-center items-center gap-8 text-gray-500 mt-20' >
    <p>Linkedin</p>
    <p>Github</p>
    <p>Twitter</p>
     </div>
    </div>
  )
}

export default ConversionFooter
