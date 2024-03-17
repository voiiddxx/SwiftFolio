"use client"
import Editbutton from '@/components/shared/edit/Editbutton'
import { MenuIcon, MessageSquare, MessagesSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

  type conversionHeaderProps = {
    data:any,
    admin:any
  }

const ConversionHeader = ({data ,admin} : conversionHeaderProps) => {
  const router = useRouter();
  return (
    <div className='w-full  flex items-center py-8 md:px-20 px-8 justify-between' >
        <div><h1 className='text-zinc-800 font-semibold text-xl font' >{data.name}</h1></div>
      
        <div>
        {
      admin && (
       <div onClick={()=>{
        router.push(`/portfolio/edit/${data.clerkId}`)
       }} className='absolute top-4 right-4'  >
        <div className='h-12 rounded-lg w-48 bg-violet-700 flex justify-center items-center' >
          <p className='text-white' >Edit Your Portfolio</p>

        </div>
         
       </div>
      )
    }
           {
            admin==false && (
              <div>
                <div>
           <MessagesSquare strokeWidth={1.5} />
           </div>
              </div>
            )
           }
        </div>
    </div>
  )
}

export default ConversionHeader
