import { ArrowRightIcon, Dot, Github, Linkedin, Radio, Twitter } from 'lucide-react'
import React from 'react'

const WhiteHero = () => {
  return (
    <div className='min-h-screen w-full bg-whiteCreativeBGImage flex justify-center items-start pl-56 flex-col'>
    <div className='h-12 min-w-12 rounded-3xl bg-gray-400 bg-opacity-20 flex justify-center items-center gap-2 pl-3 pr-6'>
        <Radio color='green' size={20}/>
        <p className='text-green-800'> Connect With One Click</p>
    </div>
    <p className='text-zinc-500 mt-4' >Nikhil Kumar | Product Designer</p>
    <h1 className='text-zinc-800 mt-4 font-semibold text-2xl mr-[500px]'>
        Passinote developer building products that will help the society to make enomorus grants and contiribute to inovation culture of world <br /> and  help to make it possible with developement
    </h1>

    <div className=' flex gap-2 mt-7 justify-center items-center'>
        <p className='text-blue-600 font-semibold text-lg'>Let's Connect</p>
        <ArrowRightIcon className='text-blue-600'/>
    </div>

    <div className='flex gap-6 text-zinc-700 mt-7'>
        <Linkedin/>
        <Github/>
        <Twitter/>
    </div>
    </div>
  )
}

export default WhiteHero
