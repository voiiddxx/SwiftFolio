"use client"
import { DeleteCollegeAsPerId } from '@/lib/actions/education.action'
import { deletSchoolWithId } from '@/lib/actions/school.action'
import { deleteWorkById } from '@/lib/actions/work.action'
import { ICollege } from '@/lib/database/models/education.model'
import { ISchool } from '@/lib/database/models/school.model'
import { IWork } from '@/lib/database/models/work.model'
import { Delete, Edit, GraduationCap, RocketIcon, School, Trash } from 'lucide-react'
import React from 'react'


    type WhiteQulalificationProps = {
        userSchool : any
        userCollege : any
        userWork : any
        isAdmin: any
    }

const WhiteQulalification =  ({userSchool ,  userCollege , userWork , isAdmin} : WhiteQulalificationProps) => {
    

    


    const handleDelete = async ( deleteId : string) =>{        
        const data = await DeleteCollegeAsPerId({collegeId: userCollege[0]._id , deleteId:deleteId});

    }

    const handleSchoolDelte = async (deleteId:string)=>{
        const deleted = await deletSchoolWithId({schoolId:userSchool[0]._id , deleteId: deleteId});


    }


    const handleWorkDelete = async  (workDeleteId : string)=>{
        const deleted = await deleteWorkById({workId:userWork[0]._id , deleteId:workDeleteId});
        
    }
  
  return (
    <div className=' w-full md:pl-52 px-10 bg-whiteCreativeBGImage'>
       {/* this is school section z */}
       {
        userSchool.length < 1? <div></div> : <div>
            <div className='mb-12'>
                <h1 className='font-semibold text-xl text-zinc-900'>My Education</h1>
                <p className='font-normal text-zinc-700' >School and college from where i have gained knowledege have been mentioned below</p>
            </div>
            {
                userSchool[0].school.map((curr : ISchool) => {
                    return  <div className='w-full flex gap-2 items-start justify-start pb-12'>
      {/* //border line  */}
      <div className='flex flex-col items-center'>
         <div className='h-14 w-14 border-[1px] border-zinc-300 rounded-full flex justify-center items-center' >
            <School className='text-blue-700' size={20} />
         </div>
          <div className='mt-5 mb-5'>
              
          </div>
      </div>
      {/* schooling informaton */}
      <div className='md:pr-52 ' >
          <p className='text-zinc-500 font-normal text-sm' >{curr.finalYear}</p>
          <h1 className='text-lg font-medium text-zinc-900  mt-2'>{curr.schoolClass}</h1>
          <p className='text-blue-500 font-normal text-sm mt-2' >{curr.schoolName}</p>
          <p className='text-zinc-600 font-normal md:mr-80 mt-2 text-sm'>{curr.extraDetail}</p>

       {
        isAdmin && ( <div className='flex gap-4 mt-4' >
        <Edit className='text-blue-700' size={16} />
        <Trash onClick={()=>{
            handleSchoolDelte(curr._id);
        }} className='text-red-800 cursor-pointer' size={16} />
      </div>)
       }
      </div>

    </div>
                })
            }
        </div>
       }

        {/* this is college section   */}
        {
            userCollege.length < 1 ? <div></div> : <div>
                {
                    userCollege[0].college.map((curr : ICollege , collegeindex : number ) => {
                        return  <div className='w-full flex gap-2 items-start justify-start'>
                        {/* //border line  */}
                        <div className='flex flex-col items-center'>
                           <div className='h-14 w-14 border-[1px] border-zinc-300 rounded-full flex justify-center items-center ' >
                              <GraduationCap className='text-teal-700' size={20} />
                           </div>
                            <div className='mt-5 mb-5'>
                            {
                collegeindex == userCollege[0].college.length -1 ? <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-transparent'>
                  
                </div> : <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-zinc-300'>
                  
                </div>
            }
                            </div>
                        </div>
                        {/* schooling informaton */}
                        <div className='md:pr-52 ' >
                            <p className='text-zinc-500 font-normal text-sm' > {curr.batchStartDate} - {curr.batchEndDate} </p>
                            <h1 className='text-lg font-medium text-zinc-900  mt-2'>{curr.degree}</h1>
                            <p className='text-teal-600 font-normal text-sm mt-2' >{curr.instituteName}</p>
                            <p className='text-zinc-600 font-normal md:mr-80 mt-2 text-sm'>{curr.extraDetail}</p>
                            {
        isAdmin && ( <div className='flex gap-4 mt-4' >
        <Edit className='text-blue-700' size={16} />
        <Trash  onClick={()=>{
            alert("called")
            handleDelete(curr._id);
        }} className='text-red-800' size={16} />
      </div>)
       }
                        </div>
                  
                      </div>
                    })
                }
            </div>
        }

        {/* this is work experince section  */}


        {
        userWork.length < 1? <div></div> : <div className='mt-6'>
            <div className='mb-12'>
                <h1 className='font-semibold text-xl text-zinc-900'>Work Experience</h1>
                <p className='font-normal text-zinc-700' >All the work experince i have are mentioned below</p>
            </div>
            {
                userWork[0].work.map((curr : IWork , index:number) => {
                    return  <div className='w-full flex gap-2 items-start justify-start'>
      {/* //border line  */}
      <div className='flex flex-col items-center'>
         <div className='h-14 w-14 border-[1px] border-zinc-300 rounded-full flex justify-center items-center ' >
            <RocketIcon className='text-red-700' size={20} />
         </div>
          <div className='mt-5 mb-5'>
            {
                index == userWork[0].work.length -1 ? <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-transparent'>
                  
                </div> : <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-zinc-300'>
                  
                </div>
            }
              {/* <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-zinc-300'>
                  
              </div> */}
          </div>
      </div>
      {/* schooling informaton */}
      <div className='md:pr-52 ' >
          <p className='text-zinc-500 font-normal text-sm' >{curr.startDate} - {curr.endDate}  </p>
          <h1 className='text-lg font-semibold text-zinc-900  mt-2'>{curr.role}</h1>
          <p className='text-blue-700 font-normal text-sm mt-2' >{curr.companyName}</p>
          <p className='text-zinc-600 font-normal md:mr-80 mt-2'>{curr.contribution} </p>
          {
        isAdmin && ( <div className='flex gap-4 mt-4' >
        <Edit className='text-blue-700 ' size={16} />
        <Trash onClick={()=>{
            handleWorkDelete(curr._id);
        }} className='text-red-800 cursor-pointer' size={16} />
      </div>)
       }
      </div>

    </div>
                })
            }
        </div>
       }

    </div>
  )
}

export default WhiteQulalification
