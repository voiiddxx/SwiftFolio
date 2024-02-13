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

    <div className='w-full min-h-screen bg-whiteCreativeBGImage pl-52'>
        <div>
            <h1 className='font-semibold text-xl text-zinc-800'>Latest projects</h1>
        </div>

        <div className='w-full flex gap-10 mt-10'>
            {
              data.map((curr : any) => {
                return <div className='w-[350px] border-[0.5px] border-zinc-300 rounded-lg  p-5'>

                <div className='w-full flex justify-between items-center'>
                <div className='h-14 w-14 bg-blue-700 rounded-full'>
                  <Image className=' h-14 w-14 object-cover rounded-full' src={curr.projectthumbnail} height={50} width={50} alt='project'/>
                </div>
                <div className='h-6 bg-green-100 flex justify-center items-center pl-2 pr-2 rounded-xl'>
               
                  <p className='text-[12px] text-green-800 font-semibold space-x-1'>Hackathon project</p>
                </div>
                </div>
            
              <div>
                <div className='flex justify-between mt-12'>
                <p className='text-xl font-bold text-zinc-800'>{curr.projectname}</p>
                
                </div>
                <p className='text-zinc-700 font-normal  mt-3'>Swiftfolio is a platform by which any individiual can create their own portfolio by just choosing template</p>

                <div className='mt-5 flex justify-end items-end'>
                  <ArrowRight className='text-blue-500 hover:text-black cursor-pointer' />
                </div>

                {
                  adminData===true ?  <div className='w-full flex justify-between'>
                    
                  <div className='px-2  mx-3 bg-blue-200 bg-opacity-25 my-2 py-1 flex justify-center items-center gap-3 rounded-md'>
                              <Edit className='text-blue-600' size={15}/>
                              {/* <p className='text-[12px] text-orange-300'>Edit</p> */}
                              <Addproject type='EDIT'  useridclerk={user?.id} projectId={curr._id}/>
                            </div>
                            
                            <div className='px-2 mx-3 bg-red-300 bg-opacity-20 my-2  py-1 flex justify-center items-center gap-3 rounded-md'>
                              <Trash className='text-red-600' size={15}/>
                              <DeleteSection type='PROJECT' deleteId={curr._id} />
                            </div>
                  </div> : <div></div>
                 }

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
