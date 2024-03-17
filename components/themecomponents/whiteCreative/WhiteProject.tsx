import DeleteSection from '@/components/shared/delete/DeleteSection'
import Addproject from '@/components/shared/projects/Addproject'
import { currentUser } from '@clerk/nextjs'
import { ArrowRight, Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'



type projectstypeProps = {
  data: any
  adminData : boolean
}

const WhiteProject = async ({data , adminData} : projectstypeProps) => {


  const user = await currentUser();
  
  return (
    <>
    {
      data.length < 1 ?  <div></div>:

    <div className='w-full pb-9 bg-whiteCreativeBGImage md:pl-52 px-10'>
        <div>
            <h1 className='font-medium mt-6 text-xl text-zinc-800'>Latest projects</h1>
        </div>

        <div className='w-full flex gap-10 mt-10 flex-wrap'>
            {
              data.map((curr : any) => {
                return <div className='w-[350px] border-[0.5px] border-zinc-300 rounded-lg  p-5'>

                <div className='w-full flex justify-between items-center'>
                <div className='h-14 w-24 bg-blue-700 rounded-full'>
                  <Image className=' h-16 w-24 object-cover rounded-md' src={curr.projectthumbnail} height={500} width={500} alt='project'/>
                </div>
                <div className='h-6 bg-green-100 bg-opacity-65 flex justify-center items-center pl-2 pr-2 rounded-xl'>
               
                  <p className='text-[12px] text-green-800 font-normal space-x-1'>{curr.projectstatus}</p>
                </div>
                </div>
            
              <div>
                <div className='flex justify-between mt-12'>
                <p className='text-xl font-medium text-zinc-800'>{curr.projectname}</p>
                
                </div>
                <p className='text-zinc-700 font-normal text-sm mt-3'>{curr.projectdetail}</p>

                <div className='mt-5 flex justify-end items-end'>
                  <ArrowRight className='text-blue-500 hover:text-black cursor-pointer' />
                </div>

              </div>
          </div>
              })
            }

        </div>
    </div>
}
    </>
  )
}

export default WhiteProject
