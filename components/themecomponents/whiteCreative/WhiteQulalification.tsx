"use client"
import { DeleteCollegeAsPerId } from '@/lib/actions/education.action'
import { deletSchoolWithId } from '@/lib/actions/school.action'
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
    console.log("this is user college id ",userCollege[0]._id);

    


    const handleDelete = async ( deleteId : string) =>{
      alert("called")
        
        const data = await DeleteCollegeAsPerId({collegeId: userCollege[0]._id , deleteId:deleteId});

    }

    const handleSchoolDelte = async (deleteId:string)=>{
        const deleted = await deletSchoolWithId({schoolId:userSchool[0]._id , deleteId: deleteId});


    }

  
  return (
    <div className='min-h-screen w-full pl-52 bg-whiteCreativeBGImage'>
       {/* this is school section z */}
       {
        userSchool.length < 1? <div></div> : <div>
            <div className='mb-12'>
                <h1 className='font-semibold text-xl text-zinc-900'>My Education</h1>
                <p className='font-normal text-zinc-700' >School and college from where i have gained knowledege have been mentioned below</p>
            </div>
            {
                userSchool[0].school.map((curr : ISchool) => {
                    return  <div className='w-full flex gap-2 items-start justify-start'>
      {/* //border line  */}
      <div className='flex flex-col items-center'>
         <div className='h-14 w-14 border-[1px] border-zinc-300 rounded-full flex justify-center items-center ' >
            <School className='text-blue-700' size={20} />
         </div>
          <div className='mt-5 mb-5'>
              <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-zinc-300'>
                  
              </div>
          </div>
      </div>
      {/* schooling informaton */}
      <div className='pr-52 ' >
          <p className='text-zinc-500 font-normal text-sm' >{curr.finalYear}</p>
          <h1 className='text-lg font-semibold text-zinc-900  mt-2'>{curr.schoolClass}</h1>
          <p className='text-blue-500 font-normal text-sm mt-2' >{curr.schoolName}</p>
          <p className='text-zinc-600 font-normal mr-80 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>

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
                        <div className='pr-52 ' >
                            <p className='text-zinc-500 font-normal text-sm' > {curr.batchStartDate} - {curr.batchEndDate} </p>
                            <h1 className='text-lg font-semibold text-zinc-900  mt-2'>{curr.degree}</h1>
                            <p className='text-blue-600 font-normal text-sm mt-2' >{curr.instituteName}</p>
                            <p className='text-zinc-600 font-normal mr-80 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>
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
      <div className='pr-52 ' >
          <p className='text-zinc-500 font-normal text-sm' >{curr.startDate} - {curr.endDate}  </p>
          <h1 className='text-lg font-semibold text-zinc-900  mt-2'>{curr.role}</h1>
          <p className='text-blue-700 font-normal text-sm mt-2' >{curr.companyName}</p>
          <p className='text-zinc-600 font-normal mr-80 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>
          {
        isAdmin && ( <div className='flex gap-4 mt-4' >
        <Edit className='text-blue-700' size={16} />
        <Trash className='text-red-800' size={16} />
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
