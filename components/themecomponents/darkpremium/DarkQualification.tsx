"use client"
import { DeleteCollegeAsPerId } from '@/lib/actions/education.action'
import { deletSchoolWithId } from '@/lib/actions/school.action'
import { deleteWorkById } from '@/lib/actions/work.action'
import { ICollege } from '@/lib/database/models/education.model'
import { ISchool } from '@/lib/database/models/school.model'
import { IWork } from '@/lib/database/models/work.model'
import { Blend, BookOpen, Building2, Edit, GraduationCap, School, Sun, Target, Trash } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


type eductaionandWorkExperince = {
  userwork: any,
  userSchool:any,
  userCollege:any
  isAdmin: boolean
}

// type workMapprops = {
//   curr : any
// }

const DarkQualification = ({userwork , userSchool , userCollege , isAdmin} : eductaionandWorkExperince) => {


  
  const handleDelete = async ( deleteId : string) =>{
    alert("called")
      
      const data = await DeleteCollegeAsPerId({collegeId: userCollege[0]._id , deleteId:deleteId});

  }

  const handleSchoolDelte = async (deleteId:string)=>{
      const deleted = await deletSchoolWithId({schoolId:userSchool[0]._id , deleteId: deleteId});
  }


  const handleWorkDelete = async  (workDeleteId : string)=>{
      const deleted = await deleteWorkById({workId:userwork[0]._id , deleteId:workDeleteId});
      
  }


  
  
  return (
    <div className='w-full  bg-heroBgImage pt-14 md:px-32 px-10'>
      {/* schooling section  */}
    {
      userSchool.length < 1 ? <div></div> : <>
      <div >
        <h1 className='text-green-300 text-xl font-medium' >Education</h1>
        <p className='text-zinc-500 mt-2 text-sm font-light' >Schooling and my college are mentioned below</p>
      </div>
      <div className='md:flex gap-4 flex-wrap' >
     <div className='mt-9' >
     {
        userSchool[0].school.map((curr : ISchool)=>{
          return <div className='flex gap-4 flex-col md:flex-row' >
          <div>
          <div className=' h-12 w-12 bg-zinc-700 bg-opacity-25 rounded-md flex justify-center items-center' >
            <School strokeWidth={1} className='text-green-400 h-72'  />
           </div>
          </div>
           <div>
            <h1 className='text-green-300 text-lg' >{curr.schoolName} <span className='text-sm text-zinc-400 ml-2' >  ({curr.finalYear})</span> </h1>
            <p className='text-zinc-100 mt-1' >{curr.schoolClass}</p>
           <div className='w-[350px] h-16 mt-1 overflow-hidden' >
           <p  className='text-zinc-500 text-[12px] ' >{curr.extraDetail}</p>
           </div>
           </div>

          
          </div>
        })
      }
     </div>


     <div className='mt-9' >
     {
        userCollege[0].college.map((curr : ICollege)=>{
          return <div className='flex gap-4 flex-col md:flex-row' >
           <div>
           <div className=' h-12 w-12 bg-zinc-700 bg-opacity-25 rounded-md flex justify-center items-center' >
            <GraduationCap strokeWidth={1} className='text-orange-300 h-72'  />
           </div>
           </div>
           <div>
            <h1 className='text-orange-300 text-lg' >{curr.instituteName} <span className='text-sm text-zinc-400 ml-2' >  ({curr.batchStartDate} - {curr.batchEndDate})</span> </h1>
            <p className='text-zinc-100 mt-1' >{curr.degree}</p>
           <div className='w-[350px] h-16 mt-1 overflow-hidden' >
           <p  className='text-zinc-500 text-[12px] ' >{curr.extraDetail}</p>
           </div>
           </div>
          
          </div>
        })
      }
     </div>
     </div>
      </>
    }
      
      {
        userwork.length < 1 ? <div></div> : <div>
           <div >
        <h1 className='text-red-300 text-xl font-medium mt-20' >Work Experince</h1>
        <p className='text-zinc-500 mt-2 text-sm font-light' >Schooling and my college are mentioned below</p>
      </div>
      <div className='mt-9' >
     {
        userwork[0].work.map((curr : IWork)=>{
          return <div className='flex gap-4 flex-col md:flex-row' >
           <div>
           <div className=' h-12 w-12 bg-zinc-700 bg-opacity-25 rounded-md flex justify-center items-center' >
            <Sun strokeWidth={1} className='text-indigo-400 h-72'  />
           </div>
           </div>
           <div>
            <h1 className='text-indigo-300 text-lg' >{curr.companyName} <span className='text-sm text-zinc-400 ml-2' >  ({curr.startDate}-{curr.endDate})</span> </h1>
            <p className='text-zinc-100 mt-1' >{curr.role}</p>
           <div className='w-[350px] h-16 mt-1 overflow-hidden' >
           <p  className='text-zinc-500 text-[12px] ' >{curr.contribution}</p>
           </div>
           </div>
          </div>
        })
      }
     </div>
        </div>
      }

    

    </div>
  )
}

export default DarkQualification



