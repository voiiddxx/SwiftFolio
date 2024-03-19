"use client"
import { Button } from '@/components/ui/button'
import { Edit, Edit2, MoreVerticalIcon, Plus, Trash } from 'lucide-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { useEffect, useState } from 'react'
import { getAcheivemtUSingClerkid } from '@/lib/actions/achivement.action'
import Image from 'next/image'
import Addachivement from '../achievements/Addachivement'
import DeleteSection from '../delete/DeleteSection'
import { EditAchivement } from './EditAchivement'

    type achivementProps = {
        userId: string
    }
  
const AchivementDetail = ({userId} : achivementProps) => {
    const [Achivement, setAchivement] = useState<any>([]);
    
    
    useEffect(()=>{
        const getAchivement = async ()=>{
            const res = await getAcheivemtUSingClerkid(userId);
            setAchivement(res);
        }
        getAchivement();
    }  , [])
  return (
    <div className='w-full min-h-screen overflow-hidden' >
         <div className='h-20 w-full border-b flex justify-between items-center  md:px-12 px-4' >
               <div>
               <h1 className='md:text-lg text-sm md:font-semibold font-medium text-zinc-800' > Achivements</h1>
                <p className='md:text-sm text-[10px] font-normal text-zinc-600' >All of your achivements</p>
               </div>

               <div className='flex' >
                <Button className='flex items-center gap-2' >
                       <Addachivement type='ADD' useridclerk={userId} />

                    </Button>
               </div>
                </div>  

                {/* achivements card shown below */}
                <div className='bg-slate-50' >
                    {
                        Achivement.length < 1 ? <div></div> : <div className='flex md:px-12 px-4 flex-wrap gap-4' >
                            {
                                Achivement.map((curr:any)=>{
                                    return <div className='w-[300px] pb-4  mt-5 border-[1px] border-zinc-300 p-1 rounded-lg bg-white ' >
                                            <div className='w-full h-[250px] rounded-sm bg-white py-2 px-2' >
                                                <Image className='w-full h-full object-cover rounded-sm' src={curr.aimage}  height={900} width={900} alt='achivementImage' />
                                            </div>
                                            <div className='flex justify-between items-center mt-4 px-4' >
                                            <h1 className='mt-2 text-sm font-medium mr-8 text-zinc-800' >{curr.acaption}</h1>
                                            <Popover>
                                                <PopoverTrigger>
                                                <MoreVerticalIcon className='text-zinc-600' size={17} />
                                                </PopoverTrigger>
                                                <PopoverContent className='w-40' >
                                                    <div className='h-16 border-b flex gap-2 items-center' >
                                                        <Edit2 className='text-violet-700' size={14}/>
                                            <EditAchivement achivementId={curr._id} userId={userId} />
                                                    </div>
                                                    <div className='h-16  flex gap-2 items-center' >
                                           <DeleteSection deleteId={curr._id} type='ACHIVEMENT'  />
                                                    </div>
                                                </PopoverContent>
                                                </Popover>
                                            </div>  
                                    </div>
                                })
                            }
                        </div>
                    }
                </div>
                  </div>
  )
}

export default AchivementDetail
