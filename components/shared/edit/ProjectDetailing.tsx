"use client"
import { Button } from '@/components/ui/button'
import { getProjectByclerkId } from '@/lib/actions/project.action'
import { Plus } from 'lucide-react'
import React, { useEffect, useState } from 'react'

    type ProjectDetailingProps = {
        userId:string
    }

const ProjectDetailing = ({userId} : ProjectDetailingProps) => {

    const [Projects, setProjects] = useState<any>([]);
    
    useEffect(()=>{
        const getProject = async()=>{
            const res = await getProjectByclerkId(userId);
            setProjects(res);
            console.log(res);
        }
        getProject();
    } , []);
    

  let projects = [1,2]
  return (
    <div className='min-h-screen w-full' >
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

                <div className='w-full px-12 py-8 flex flex-wrap gap-4' >
                {
                   Projects.length < 1 ? <div className='w-full h-full flex justify-center items-center'  >
                    <h1>No Project Found</h1>
                   </div> : <div>
                    {
                         Projects.map((curr:any)=>{
                            return <div className='min-h-40 w-full rounded shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] bg-white border-[1px] border-zinc-100 px-4 py-4 flex justify-between'>
                                    <div className='flex gap-6 w-full' >
                                        <div className='w-[200px] py-1 bg-violet-400 rounded-md' >
                                        </div>
                                        <div >
                                        <h1 className='text-lg font-medium' > Pro Planet Person</h1>
                                        <p className='text-[13px]' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit ab earum omnis animi quidem doloremque!</p>
                                        <div className='bg-violet-100 w-[170px]  rounded-full' >
                                            <p className='text-sm mt-2 px-2 text-violet-900' >Under Developement</p>
                                        </div>
    
                                        <div className='flex mt-8 gap-4' >
                                    <Button>Edit Project</Button>
                                    <Button variant={'outline'} >Delete Project</Button>
                                        </div>
                                        </div>
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

export default ProjectDetailing
