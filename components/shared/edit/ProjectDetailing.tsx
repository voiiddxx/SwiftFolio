"use client"
import { Button } from '@/components/ui/button'
import { getProjectByclerkId } from '@/lib/actions/project.action'
import { MoreVerticalIcon, Plus } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useId, useState } from 'react'
import Addproject from '../projects/Addproject'
import DeleteSection from '../delete/DeleteSection'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import ProjectEditForm from './ProjectEditForm'

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
           <div className='h-20 w-full border-b flex justify-between items-center  md:px-12 px-4 ' >
               <div>
               <h1 className='md:text-lg text-sm md:font-semibold font-medium text-zinc-800' >Projects</h1>
                <p className='md:text-sm text-[10px] font-normal text-zinc-600' >Please fill information below given</p>
               </div>

               <div className='flex' >
                    <Button className='flex items-center gap-2' >
                      <Addproject type='ADD' useridclerk={userId} key={userId}  />
                        
                    </Button>
               </div>
                </div>

                <div className='w-full min-h-screen md:px-12 px-4 py-8 flex flex-wrap gap-4 bg-slate-50' >
                {
                   Projects.length < 1 ? <div className='w-full h-full flex justify-center items-center'  >
                    <h1>No Project Found</h1>
                   </div> : <div className='flex gap-4 flex-wrap' >
                    {
                         Projects.map((curr:any)=>{
                            return <div className='pb-4 w-[300px] bg-white border-[1px] border-zinc-300 rounded-lg px-2 py-2 shadow-[0px_20px_83px_10px_#f7fafc]' >
                                <div className='h-[200px]  rounded-md bg-red-500' >
                                    <Image className='h-full w-full object-cover rounded-md'  src={curr.projectthumbnail} height={900} width={900} alt='projectimage' />
                                </div>
                                <h1 className='text-lg mt-2 font-medium text-violet-700' >{curr.projectname}</h1>
                                <p className='text-[11px] text-zinc-500 leading-5 tracking-wide' >{curr.projectdetail}</p>

                                <div className='flex justify-between items-center mt-4' > 
                                <div className=' px-2  rounded-full' >
                                    <p className='text-violet-700 text-[10px] ' > {curr.projectstatus}</p>
                                    </div>
                                    <div>
                                    <Popover>
                      <PopoverTrigger>
                        <MoreVerticalIcon className="text-zinc-600" size={17} />
                      </PopoverTrigger>
                      <PopoverContent className='w-32' >
                        <div className="h-10 border-b flex gap-2 items-center">
                          <ProjectEditForm projectId={curr._id} key={userId} />
                        </div>
                        <div className="h-10  flex gap-2 items-center">
                                <DeleteSection deleteId={curr._id} type='PROJECT' key={userId} />
                      
                        </div>
                      </PopoverContent>
                    </Popover>
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
