import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


    type darkFooterProps = {
        data : any
    }
const Darkfooter = ({data} : darkFooterProps) => {
  return (
    <div className='w-full bg-heroBgImage flex flex-col justify-center items-center'>
        <div className='h-[100px] w-[100px] mt-28 bg-pink-300 rounded-full'>
            <Image src={data.avatar} className='object-cover rounded-full h-[100px] w-[100px]' height={100} width={50} alt='avatar'/>
        </div>
        <h1 className='mt-6 text-blue-300 text-2xl font-bold'>{data.name}</h1>
        <p className='font-normal text-zinc-500 text-sm'>Connect With Me</p>
        <div className='w-full flex justify-center items-center gap-6 mt-8 mb-44'>
            <Github className='text-green-300'/>
            <Linkedin className='text-blue-300'/>
            <Mail className='text-yellow-300'/>
            <ExternalLink className='text-red-300'/>

        </div>

        <p className='text-sm font-normal text-zinc-600 mb-9'>@ SwiftFolio || Created by Voiiddxx</p>

    </div>
  )
}

export default Darkfooter
