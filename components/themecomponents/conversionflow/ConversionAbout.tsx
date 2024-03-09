import Image from 'next/image'
import React from 'react'

  type conversionAboutProps = {
    data:any
  }

const ConversionAbout = ({data} : conversionAboutProps) => {
  return (
    <div className='min-h-screen w-full bg-white relative flex flex-col justify-center items-center' >
      {/* about heading */}
      <div className='w-full flex md:flex-row flex-col justify-between items-center md:px-32 md:pt-16 pt-2 px-8' >
        <div className='md:w-1/2 w-full ' >
            <h1 className='text-xl font-medium bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >About Me</h1>
            <h1 className='text-5xl text-black font-semibold mt-2' >THAT'S ME!</h1>
        </div>
        <div className='md:w-1/2 w-full mt-4 ' >
            <p className='text-gray-700 font-medium md:text-xl text-lg' >{data.about}</p>
        </div>


      </div>
      {/* about image */}
      <div className='mt-20 md:h-[600px] md:w-[1300px] bg-slate-400' >
    <Image className='h-full w-full object-cover brightness-[30%] hover:brightness-[100%] ease-in' src={data.resume} height={900} width={900} alt='about me image' />
      </div>

    </div>
  )
}

export default ConversionAbout
