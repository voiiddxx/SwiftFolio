"use client"

import { Button } from '@/components/ui/button'
import { getCustomSection } from '@/lib/actions/custom.action'
import { Flame, Gem, MoreVerticalIcon, Plus, PlusCircle } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


    type CustomProps ={
        data:any
    }
const CustomDetailing = ({data}: CustomProps ) => {
    
    const [custom, setcustom] = useState<any>([]);

    useEffect(()=>{
        const getCustomData = async  ()=>{
            const res = await getCustomSection(data);
            if(res){
                setcustom(res);
            }
        }
        getCustomData();
    } , [])
    const res = [6,6,6]
  return (
    <div className='min-h-screen w-full'  >
      <div className='h-20 w-full border-b flex justify-between items-center  px-12 ' >
               <div>
               <h1 className='text-lg font-semibold text-zinc-800' >Edit Your Projects</h1>
                <p className='text-sm font-normal text-zinc-600' >Please fill information below given</p>
               </div>

               <div className='flex' >
                    <Button className='flex items-center gap-2' >
                        <Plus size={18} />
                        Add project
                    </Button>
               </div>
                </div>


            {/* CUSTOM HEADINGS SECTION */}
            <div className='w-full  flex gap-4 px-12 pt-4 flex-wrap ' >
            {
                custom.map((curr:any , index:any)=>{
                    return <div>
                        {
                            index % 2 == 0 ? <div className='pb-4 w-52 bg-orange-100 rounded flex flex-col px-2 py-2' >
                            <div className='h-10 w-10 bg-white rounded-full flex justify-center items-center ' >
                            <Gem className='text-orange-700' strokeWidth={1.5} size={18} />
                            </div>
                            <div>
                                <h1 className='text-sm font-medium mt-4' >{curr.heading}</h1>
                                <p className='text-[12px] mt-1 text-zinc-700' >Check All the Sections of design elements</p>
                            </div>
    
                        </div> : <div className='pb-4 w-52 bg-slate-100 rounded flex flex-col px-2 py-2' >
                            <div className='h-10 w-10 bg-white rounded-full flex justify-center items-center ' >
                            <Gem className='text-violet-700' strokeWidth={1.5} size={18} />
                            </div>
                            <div>
                                <h1 className='text-sm font-medium mt-4' >{curr.heading}</h1>
                                <p className='text-[12px] mt-1 text-zinc-700' >Check All the Sections of design elements</p>
                            </div>
    
                        </div>
                        }
                    </div>
                })
            }
            </div>


            {/* CUSTOM DETAILS CARD COMPONENTS */}

           <div>
            {
                custom.map((curr:any)=>{
                    return <div>
                         <div className='h-20 w-full px-12 mt-8' >
                    <h1 className='text-lg font-medium text-zinc-800' >Hello Designers</h1>
                    <p className='text-sm font-normal text-zinc-600' >Explore Your All Design Section</p>
            </div>

            <div className='flex flex-wrap w-full px-12 gap-4' >
                {
                    curr.data.map((curr:any)=>{
                        return <div className='h-[300px] w-[300px]  rounded-sm' >
                            <Image className='h-[250px] w-[300px] object-cover rounded-md'  src={curr.customImage} height={900} width={900} alt='imageforcustom' />
                           <div className='flex justify-between items-center gap-10 mt-3' >
                           <h1 className=' font-medium' >{curr.customTitle}</h1>
                           <MoreVerticalIcon className='text-zinc-700' size={17} />
                           </div>
                        </div>
                    })
                }
                <div className='h-[250px] w-[300px]  rounded-sm border-[2px] border-zinc-300 border-dashed flex flex-col justify-center items-center px-12' >
                    <div className='h-14 w-14 bg-violet-700 rounded-full flex justify-center items-center' >
                    <Plus className='text-white' />   
                    </div>
                    <h1 className='mt-4 font-medium text-center' >{curr.heading}</h1>
                    <p className='text-[12px] font-normal text-zinc-600 text-center' >Add More {curr.heading} </p>

                </div>

            </div>
                    </div>
                })
            }
           </div>

                
    </div>
  )
}

export default CustomDetailing
