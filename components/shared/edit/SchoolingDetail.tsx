"use client"
import { Button } from '@/components/ui/button'
import { Plus, School } from 'lucide-react'
import React, { useEffect, useState } from 'react'   
import Schooling from '../schooling/Schooling'
import { deletSchoolWithId, getSchoolasperClerkId } from '@/lib/actions/school.action'
import { ICollege } from '@/lib/database/models/education.model'
import College from '../college/College'
import { DeleteCollegeAsPerId } from '@/lib/actions/education.action'

    type SchoolDetailingProps = {
        userId:string
        school:any
        college:any
        
    }

const SchoolingDetail = ({userId , school , college } : SchoolDetailingProps) => {

    const handleSchoolDelte = async (deleteId:string )=>{
        const deleted = await deletSchoolWithId({schoolId:school[0]._id , deleteId: deleteId});

        if(deleted){
            window.location.reload();
        }
        else{
            console.log("some error occured");
            
        }
    }


    
  const handleDelete = async ( deleteId : string) =>{  
      const data = await DeleteCollegeAsPerId({collegeId: college[0]._id , deleteId:deleteId});
  }

  
  
    
  return (
    <div className='w-full min-h-screen' >
            <div className='h-20 w-full border-b flex justify-center  px-12 flex-col' >
                <h1 className='text-lg font-semibold text-zinc-800' >Edit Your Schooling Information</h1>
                <p className='text-sm font-normal text-zinc-600' >Update your schooling information </p>
                </div>

                <div className='mt-8 mx-12  flex-wrap border-b' >
                    {
                        school.length  && (
                            <div className='w-full flex gap-4' >
                                {
                        school[0].school.map((curr:any)=>{
                            return <div className='pb-4 w-[350px] bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-[1px] border-zinc-300 rounded-md px-4 py-2' >
                                <div className='h-14 w-14 bg-slate-50 rounded-full flex justify-center items-center ' >
                                <School strokeWidth={1.5} className='text-violet-700' />
                                </div>

                                <h1 className='text-lg font-medium text-zinc-900 mt-4' >Kiran Public School</h1>
                                <h1 className='font-normal mt-1 text-zinc-700' >{curr.schoolClass}</h1>
                                <p className='text-[12px] mt-1 font-normal text-zinc-500' >{curr.extraDetail}</p>
                                <p className='text-sm font-normal mt-1 ' >{curr.finalYear   }</p>

                                <div className='flex justify-between gap-2 mt-4' >
                                <Schooling type='EDIT' userId={userId} schoolId={school._id} updatedId={curr._id} key={curr._id} />
                                <Button onClick={()=>{
                                    handleSchoolDelte(curr._id);
                                }} className='bg-red-500 w-full' >Delete</Button>
                                </div>

                            </div>
                        })
                    }
                     <div className='h-[300px] w-[350px] bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-[1px] border-zinc-300 rounded-md px-4 py-2 border-dashed'>
                    <div className='h-full w-full flex justify-center items-center rounded' >
                        <div className='flex flex-col justify-center items-center' >
                            <div className=' px-4 py-2 bg-violet-100 rounded-full flex justify-center items-center' >
                            <Schooling type='ADD' userId={userId} key={userId} />
                            </div>
                          
                        </div>
                    </div>
                    </div>
                            </div>
                            
                        )
                    }

                </div>
  {/*  COLLEGE COMPONENT SECTION */}

                        <div className='mx-12 mt-8' >
                            {/* heading for the college */}
                            <div>
                                <h1 className='text-xl font-medium' >College</h1>
                                <p className='text-zinc-600 text-sm' >College section</p>
                            </div>

                            {/* COLLEGE CARD COMPONENETS */}

                            {
                                college.length && (
                                    <div>
                                         <div className='w-full flex gap-4' >
                                {
                        college[0].college.map((curr:ICollege)=>{
                            return <div className='pb-4 w-[350px] bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-[1px] border-zinc-300 rounded-md px-4 py-2' >
                                <div className='h-14 w-14 bg-slate-50 rounded-full flex justify-center items-center ' >
                                <School strokeWidth={1.5} className='text-violet-700' />
                                </div>

                                <h1 className='text-lg font-medium text-zinc-900 mt-4' >Kiran Public School</h1>
                                <h1 className='font-normal mt-1 text-zinc-700' >{curr.instituteName}</h1>
                                <p className='text-[12px] mt-1 font-normal text-zinc-500' >{curr.extraDetail}</p>
                                <p className='text-sm font-normal mt-1 ' >{curr.batchStartDate} - {curr.batchEndDate}</p>

                                <div className='flex justify-between gap-2 mt-4' >
                                <College type='ADD' userId={userId} />
                                <Button onClick={()=>{
                                    handleDelete(curr._id);
                                }} className='bg-red-500 w-full' >Delete</Button>
                                </div>

                            </div>
                        })
                    }
                     <div className='h-[300px] w-[350px] bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-[1px] border-zinc-300 rounded-md px-4 py-2 border-dashed'>
                    <div className='h-full w-full flex justify-center items-center rounded' >
                        <div className='flex flex-col justify-center items-center' >
                            <div className=' px-4 py-2 bg-violet-100 rounded-full flex justify-center items-center' >
                            <College type='ADD' userId={userId} />
                            </div>
                          
                        </div>
                    </div>
                    </div>
                            </div>
                                    </div>
                                )
                            }

                        </div>
          

    </div>
  )
}

export default SchoolingDetail
