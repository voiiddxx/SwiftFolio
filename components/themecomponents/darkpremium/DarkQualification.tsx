"use client"
import { DeleteCollegeAsPerId } from '@/lib/actions/education.action'
import { deletSchoolWithId } from '@/lib/actions/school.action'
import { deleteWorkById } from '@/lib/actions/work.action'
import { ICollege } from '@/lib/database/models/education.model'
import { ISchool } from '@/lib/database/models/school.model'
import { IWork } from '@/lib/database/models/work.model'
import { Blend, BookOpen, Building2, Edit, GraduationCap, Target, Trash } from 'lucide-react'
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
      userSchool[0].school.length < 1 ? <div></div> : <>
      <div >
        <h1 className='text-green-300 text-2xl font-medium' >Education</h1>
        <p className='text-zinc-500 mt-2' >Schooling and my college are mentioned below</p>
      </div>
      <div className='md:flex gap-4 flex-wrap' >
     <div className='mt-9' >
     {
        userSchool[0].school.map((curr : ISchool)=>{
          return <div className='flex gap-4' >
          <div>
          <div className='h-16 w-20 bg-zinc-700 bg-opacity-25 rounded-md flex justify-center items-center' >
            <Building2 className='text-green-400' size={30} />
           </div>
          </div>
           <div>
            <h1 className='text-green-300 text-lg' >{curr.schoolName} <span className='text-sm text-zinc-400 ml-2' >  ({curr.finalYear})</span> </h1>
            <p className='text-zinc-100 mt-1' >{curr.schoolClass}</p>
           <div className='w-[350px] h-16 mt-1 overflow-hidden' >
           <p  className='text-zinc-500 text-[12px] ' >{curr.extraDetail}</p>
           </div>
           </div>

           {
                                isAdmin && (
                                    <div className="w-full flex justify-start" >
                                        <div onClick={()=>{
                                            handleSchoolDelte(curr._id)
                                        }} className="mb-3">
                                            <Trash className="text-red-300" size={15} />
                                        </div>
                                    </div>
                                )
                            }
          </div>
        })
      }
     </div>


     <div className='mt-9' >
     {
        userCollege[0].college.map((curr : ICollege)=>{
          return <div className='flex gap-4' >
           <div>
           <div className='h-16 w-20 bg-zinc-700 bg-opacity-25 rounded-md flex justify-center items-center' >
            <BookOpen className='text-orange-300' size={30} />
           </div>
           </div>
           <div>
            <h1 className='text-orange-300 text-lg' >{curr.instituteName} <span className='text-sm text-zinc-400 ml-2' >  ({curr.batchStartDate} - {curr.batchEndDate})</span> </h1>
            <p className='text-zinc-100 mt-1' >{curr.degree}</p>
           <div className='w-[350px] h-16 mt-1 overflow-hidden' >
           <p  className='text-zinc-500 text-[12px] ' >{curr.extraDetail}</p>
           </div>
           </div>
           {
                                isAdmin && (
                                    <div className="w-full flex justify-start" >
                                        <div onClick={()=>{
                                            handleDelete(curr._id)
                                        }}  className="mb-3">
                                            <Trash className="text-red-300" size={15} />
                                        </div>
                                    </div>
                                )
                            }
          </div>
        })
      }
     </div>
     </div>
      </>
    }
      
      {
        userwork[0].work.length < 1 ? <div></div> : <div>
           <div >
        <h1 className='text-red-300 text-2xl font-medium mt-5' >Work Experince</h1>
        <p className='text-zinc-500 mt-2' >Schooling and my college are mentioned below</p>
      </div>
      <div className='mt-9' >
     {
        userwork[0].work.map((curr : IWork)=>{
          return <div className='flex gap-4' >
           <div>
           <div className='h-16 w-20 bg-zinc-700 bg-opacity-25 rounded-md flex justify-center items-center' >
            <Blend className='text-indigo-300' size={30} />
           </div>
           </div>
           <div>
            <h1 className='text-indigo-300 text-lg' >{curr.companyName} <span className='text-sm text-zinc-400 ml-2' >  ({curr.startDate}-{curr.endDate})</span> </h1>
            <p className='text-zinc-100 mt-1' >{curr.role}</p>
           <div className='w-[350px] h-16 mt-1 overflow-hidden' >
           <p  className='text-zinc-500 text-[12px] ' >{curr.contribution}</p>
           </div>
           </div>
           
           {
                                isAdmin && (
                                    <div className="w-full flex justify-start" >
                                        <div onClick={()=>{
                                            handleWorkDelete(curr._id)
                                        }}  className="mb-3">
                                            <Trash className="text-red-300" size={15} />
                                        </div>
                                    </div>
                                )
                            }
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








// {
//   isAdmin && ( <div className='flex gap-4 mt-4' >

//   <Trash onClick={()=>{
//       handleWorkDelete(curr._id);
//   }} className='text-red-800 cursor-pointer' size={16} />
// </div>)
//  }


// {
//   userCollege.length   < 1 ? <div></div> :  <>
//  {
// userCollege[0].college.map((curr : ICollege , index : number) => {
//  return  <div className='w-full flex pl-52 gap-2 items-start'>
//  {/* //border line  */}
//  <div className='flex flex-col'>
//      <Image className='h-24 w-32' src="/college.svg" height={500} width={500} alt='schoo and college icons'/>
//      <div className='ml-8'>

//        {
//          index == userCollege[0].college.length -1 ?  <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-transparent'>
             
//          </div> :  <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-gradient-to-b from-green-300 to-zinc-900'>
             
//          </div>
//        }


        
//      </div>
//  </div>
//  {/* schooling informaton */}
//  <div className='pr-52 ' >
//   <p className='text-zinc-500 font-normal text-sm' > {curr.batchStartDate} - {curr.batchEndDate} </p>
//    <h1 className='text-lg font-semibold text-zinc-200  mt-2'>{curr.degree}</h1>
//          <p className='text-green-300 font-normal text-sm mt-2' >{curr.instituteName}</p>
//        <p className='text-zinc-600 font-normal mr-80 mt-2'>{curr.extraDetail}</p>
//        {
//    isAdmin && ( <div className='flex gap-4 mt-4' >
   
//    <Trash  onClick={()=>{
//        alert("called")
//        handleDelete(curr._id);
//    }} className='text-red-800' size={16} />
//  </div>)
//   }
//                    </div>

// </div>
// })
// }

// </>


//  }
