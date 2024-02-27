"use client"
import { DeleteCollegeAsPerId } from '@/lib/actions/education.action'
import { deletSchoolWithId } from '@/lib/actions/school.action'
import { deleteWorkById } from '@/lib/actions/work.action'
import { ICollege } from '@/lib/database/models/education.model'
import { ISchool } from '@/lib/database/models/school.model'
import { IWork } from '@/lib/database/models/work.model'
import { Edit, Trash } from 'lucide-react'
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
    <div className='w-full  bg-heroBgImage pt-14'>
      {/* schooling section  */}

    {
       userSchool.length   < 1 ? <div></div> :  <>
      <div className='pl-60 mt-4 mb-10'>
    <h1 className='text-yellow-300 text-xl' >My Education</h1>
    <p className='mt-2 text-zinc-500' >All of my work experinece have been mentioned below</p>
  </div> 
{
    userSchool[0].school.map((curr : ISchool) => {
      return  <div className='w-full flex pl-52 gap-2 items-start'>
      {/* //border line  */}
      <div className='flex flex-col'>
          <Image className='h-24 w-32' src="/college.svg" height={500} width={500} alt='schoo and college icons'/>
          <div className='ml-8'>
              <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-gradient-to-b from-green-300 to-zinc-900'>
                  
              </div>
          </div>
      </div>
      {/* schooling informaton */}
      <div className='pr-52 ' >
          <p className='text-zinc-500 font-normal text-sm' >{curr.finalYear}</p>
          <h1 className='text-lg font-semibold text-zinc-200 mt-2'>{curr.schoolClass}</h1>
          <p className='text-green-300 font-normal text-sm mt-2' >{curr.schoolName}</p>
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

</>

      }
    {
       userCollege.length   < 1 ? <div></div> :  <>
      {
    userCollege[0].college.map((curr : ICollege , index : number) => {
      return  <div className='w-full flex pl-52 gap-2 items-start'>
      {/* //border line  */}
      <div className='flex flex-col'>
          <Image className='h-24 w-32' src="/college.svg" height={500} width={500} alt='schoo and college icons'/>
          <div className='ml-8'>

            {
              index == userCollege[0].college.length -1 ?  <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-transparent'>
                  
              </div> :  <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-gradient-to-b from-green-300 to-zinc-900'>
                  
              </div>
            }


             
          </div>
      </div>
      {/* schooling informaton */}
      <div className='pr-52 ' >
       <p className='text-zinc-500 font-normal text-sm' > {curr.batchStartDate} - {curr.batchEndDate} </p>
        <h1 className='text-lg font-semibold text-zinc-200  mt-2'>{curr.degree}</h1>
              <p className='text-green-300 font-normal text-sm mt-2' >{curr.instituteName}</p>
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

</>


      }

         
      {/* work experince section  */}

      

       {
       userwork.length   < 1 ? <div></div> :  <> <div className='pl-60 mt-4 mb-10 w-full bg-heroBgImage'>
        <h1 className='text-green-400 text-xl' >Work Experience</h1>
        <p className='mt-2 text-zinc-500' >All of my work experinece have been mentioned below</p>
      </div>
      {
        userwork[0].work.map((curr : IWork , index : number) => {
          return  <div className='w-full flex pl-52 gap-2 items-start'>
          {/* //border line  */}
          <div className='flex flex-col'>
              <Image className='h-24 w-32' src="/job2.svg" height={500} width={500} alt='schoo and college icons'/>
              <div className='ml-8'>

              {
              index == userwork[0].work.length -1 ?  <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-transparent'>
                  
              </div> :  <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-gradient-to-b from-blue-300 to-zinc-900'>
                  
              </div>
            }

              </div>
          </div>
          {/* schooling informaton */}
          <div className='pr-52 ' >
          <p className='text-zinc-500 font-normal text-sm' >{curr.startDate} - {curr.endDate}  </p>
          <h1 className='text-lg font-semibold text-zinc-200  mt-2'>{curr.role}</h1>
          <p className='text-blue-300 font-normal text-sm mt-2' >{curr.companyName}</p>
          
          <p className='text-zinc-600 font-normal mr-80 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>
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
      </>
      
      } 


    
      

    

    </div>
  )
}

export default DarkQualification
