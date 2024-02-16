import Addachivement from '@/components/shared/achievements/Addachivement'
import DeleteSection from '@/components/shared/delete/DeleteSection'
import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

type WhiteAchivementprops = {
    achivements: any
    adminData: boolean
}

const WhiteAchivement = async ({achivements , adminData} : WhiteAchivementprops) => {
    const user = await currentUser();

    
  return (
    
    <>
    {
        achivements.length < 1 ?  <div></div>:<div className='pb-16 w-full bg-whiteCreativeBGImage pt-9 pl-52'>
        <div>
            <h1 className='text-zinc-900 font-bold text-xl'>My Achivements</h1>
            <p className='text-zinc-500 mt-2'>Checkout my all achivements which are mentioned below</p>
        </div>

        <div className='flex gap-4 mt-9'>
           {
            achivements.map((curr : any)=> {
                return  <div className='h-[250px] w-[400px] rounded-lg bg-zinc-800 relative'>

{
                  adminData==false ?  <h1></h1>
               
                   : <div><div className='h-8 w-8 bg-white absolute  top-2 right-2 rounded-md flex items-center justify-center'>
                   <Addachivement type='EDIT' achivementId={curr._id} useridclerk={user?.id} />
                   </div>
                   <div className='h-8 w-8 bg-white absolute  top-2 right-12 rounded-md flex items-center justify-center'>
                   <DeleteSection deleteId={curr._id} type='ACHIVEMENT'/>
                   </div></div>

                }
                    <Image className='h-[250px] w-[400px] object-cover rounded-lg mix-blend-overlay relative' src={curr.aimage} height={500} width={500} alt='achivementimagesection'/>
                    <div className='h-[250px] w-[400px] absolute top-0 flex justify-start pr-8 pl-3 items-center'>
                        <p className='font-bold text-lg'> <span className='text-blue-400'>#</span> {curr.acaption}</p>
                    </div>
                </div>
            },
            )
           }
        </div>

    </div>
    }
    </>
  )
}

export default WhiteAchivement