import DeleteSection from '@/components/shared/delete/DeleteSection'
import Addproject from '@/components/shared/projects/Addproject'
import { currentUser } from '@clerk/nextjs/server'
import { ArrowRight, Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
    type conversionPprojectProps = {
        projects:any,
        admin:any
    }
const ConversionProject =  async ({admin , projects}:conversionPprojectProps) => {

    const user = await currentUser();
 
        
  return (
    <div className='relative' >
       <div className='min-h-screen w-[100%] bg-black absolute top-3/4' ></div>
        {
            projects.length> 1 && (
                <div className='min-h-screen w-full md:px-32 pl-4 pt-20' >
        <div>
            <p className='text-xl bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text font-semibold' >PROJECTS</p>
            <h1 className='md:text-4xl text-2xl font-semibold mt-2 leading-snug' >I Build <br /> Projects That matters</h1>
        </div>

        {/* PROJECTS CARDS */}
        <div className='flex overflow-y-scroll no-scrollbar gap-10 mt-10 mb-40 relative ' >
            {
                projects.map((curr:any)=>{
                    return <div>
                        <div className='md:h-[540px] md:w-[500px] h-[530px] w-[380px] bg-white z-50 relative' >
                            <div className='h-[353px] w-full' >
                            <Image className='h-[353px] w-[500px] object-cover hover:w-[700px]' src={curr.projectthumbnail} height={900} width={900} alt='project image'/>
                            </div>

                            <div className='py-5 px-4' >
                                <h1 className='bg-gradient-to-r from-violet-800 to-orange-800 text-transparent bg-clip-text text-lg font-medium' >{curr.projectstatus}</h1>
                                <h1 className='text-xl font-medium mt-4' >{curr.projectname}</h1>
                                <div className='flex gap-2 items-center' >
                                    <h1>View Project</h1>
                                    <ArrowRight/>
                                </div>
                                {
                  admin===true ?  <div className='w-full flex justify-between'>
                    
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

export default ConversionProject
