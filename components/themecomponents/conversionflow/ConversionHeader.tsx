import { MenuIcon } from 'lucide-react'
import React from 'react'

const ConversionHeader = () => {
  return (
    <div className='w-full border-b flex items-center py-8 px-20 justify-between' >
        <div><h1 className='text-zinc-800 font-semibold text-xl font' >Nikhil Kumar</h1></div>
        <div className='gap-16 hidden md:flex' >
            <div><p className='text-zinc-700 font-medium font' >Linkedin</p></div>
            <div><p className='text-zinc-700 font-medium' >Linkedin</p></div>
            <div><p className='text-zinc-700 font-medium' >Linkedin</p></div>
            <div><p className='text-zinc-700 font-medium' >Linkedin</p></div>
        </div>
        <div>
            <MenuIcon className='text-zinc-900' />
        </div>
    </div>
  )
}

export default ConversionHeader
