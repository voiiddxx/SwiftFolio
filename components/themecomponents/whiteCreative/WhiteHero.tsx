"use client"
import Editbutton from '@/components/shared/edit/Editbutton'
import { ArrowRightIcon, Dot, Github, Linkedin, Radio, Twitter } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

type whiteHeroProps = {
  data: any,
  adminData: boolean
}
const WhiteHero = ({data , adminData} : whiteHeroProps) => {
  const router = useRouter();
  return (
    <>
     {
      adminData && (
       <div onClick={()=>{
        router.push(`/portfolio/edit/${data.clerkId}`)
       }} className='absolute top-4 right-4'  >
        <div className='h-12 rounded-lg w-48 bg-violet-700 flex justify-center items-center' >
          <p className='text-white' >Edit Your Portfolio</p>

        </div>
         
       </div>
      )
    }
    <div className='min-h-screen w-full bg-whiteCreativeBGImage flex justify-center items-start md:pl-56 flex-col'>
    <div className='h-12 min-w-12 rounded-3xl bg-green-200  bg-opacity-20 flex justify-center items-center gap-2 pl-3 pr-6 mx-10'>
        <Radio color='green' size={20}/>
        <p className='text-green-800'> Connect With One Click</p>
    </div>
    <p className='text-zinc-500 mt-4 mx-10' >{data.name} | {data.heading}</p>
    <h1 className='text-zinc-800 mt-4 font-medium text-2xl mx-10 md:mr-[500px]'>
        {data.about}
    </h1>

    <div className=' flex gap-2 mt-7 justify-center items-center mx-10'>
        <p className='text-blue-600 font-normal text-lg'>Let's Connect</p>
        <ArrowRightIcon className='text-blue-600 hover:ml-1 hover:animate-ping'/>
    </div>

    <div className='flex gap-6 text-zinc-700 mt-7 mx-10'>
        <Linkedin/>
        <Github/>
        <Twitter/>
    </div>
    </div>
    </>
  )
}

export default WhiteHero
