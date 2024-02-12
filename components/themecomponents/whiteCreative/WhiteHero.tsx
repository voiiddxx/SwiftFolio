import { Dot } from 'lucide-react'
import React from 'react'

const WhiteHero = () => {
  return (
    <div className='min-h-screen w-full bg-whiteCreativeBGImage flex justify-center items-start pl-56 flex-col'>
    <div className='h-12 min-w-12 rounded-md bg-gray-400 bg-opacity-55 flex justify-center items-center pl-4 pr-4'>
        <Dot color='green' size={20}/>
        <p className='text-black'> Connect With One Click</p>
    </div>
    </div>
  )
}

export default WhiteHero
