import CustomFieldform from '@/components/shared/custom/CustomFieldform';
import DeleteSection from '@/components/shared/delete/DeleteSection';
import { currentUser } from '@clerk/nextjs/server';
import { ArrowRight, Sparkle } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type conversionCustomprops = {
    custom:any
    admin:any
}
const ConversionCustom = async ({admin , custom}:conversionCustomprops) => {
   const user = await currentUser();
    
    const data = [8 ,0]
  return (
    <div>
        {
            custom.length > 1 && (
                <div>
                    <div className='min-h-screen w-full bg-black mt-40 pt-20 md:px-32 px-8' >
                        {
                            custom.map((curr:any)=>{
                                return <div className=' border-b pb-16 border-zinc-500 mt-8 ' >
                                   <div>
                                   <p className='text-lg font-medium  text-gray-400' >EXPLORE</p>
                                    <h1 className='text-2xl font-semibold  bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >{curr.heading}</h1>
                                   </div>
                                    <div className='flex gap-5 mt-8 md:flex-row flex-col' >
                                        {
                                            curr.data.map((curr:any)=>{
                                                return <div className='h-[400px] md:w-[400px] relative' >
                                                    <div className='h-[300px] w-full bg-red-400 rounded' >
                                                            <Image className='h-full w-full object-cover'  src={curr.customImage} height={900} width={900} alt='image'/>
                                                    </div>
                                                    <div>
                                                        <div className='flex items-center gap-1 mt-4' >
                                                            <Sparkle className='text-violet-500' />
                                                            <h1 className='text-xl font-semibold text-white' >{curr.customTitle}</h1></div>
                                                        <div className='flex items-center ml-6 mt-2' >
                                                            <p className='font-medium text-zinc-300' >Visit</p>
                                                            <ArrowRight className='text-zinc-300'  size={15}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                            })
                        }
      
                </div>
                </div>
            )
        }
    </div>
  )
}

export default ConversionCustom
