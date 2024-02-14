import { Github, Link, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

    type whiteFooterProps = {
        data: any
    }
const WhiteFooter = ({data} : whiteFooterProps) => {
  return (
    <div className='pb-16 pt-20 w-full bg-whiteCreativeBGImage flex flex-col justify-center items-center'>
        <Image className='h-[150px] w-[150px] rounded-full object-cover' src={data.avatar} height={500} width={500} alt='profilepicture'/>
        <h1 className='text-zinc-900 text-lg font-semibold mt-5' >{data.name}</h1>
        <p className='font-normal text-zinc-600 mt-3' >Connect with me</p>
        <div className='mt-5 w-full flex justify-center items-center gap-8'>
            <Github className='text-red-500'/>
            <Linkedin className='text-blue-500'/>
            <Mail className='text-yellow-500'/>
            <Link className='text-zinc-900'/>
        </div>

        <p className='text-sm font-normal mt-11 text-zinc-600 mb-9'>@ SwiftFolio || Created by Voiiddxx</p>
        
      
    </div>
  )
}

export default WhiteFooter
