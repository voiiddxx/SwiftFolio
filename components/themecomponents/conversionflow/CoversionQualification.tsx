"use client"
import { DeleteCollegeAsPerId } from '@/lib/actions/education.action';
import { deletSchoolWithId } from '@/lib/actions/school.action';
import { deleteWorkById } from '@/lib/actions/work.action';
import { ICollege } from '@/lib/database/models/education.model';
import { ISchool } from '@/lib/database/models/school.model';
import { IWork } from '@/lib/database/models/work.model';
import { ArrowUpRight, Building2, GraduationCap, LucideArrowUpRightSquare, School, Trash } from 'lucide-react';
import React from 'react'


    type converSionQualificationProps = {
        work:any,
        school:any,
        college:any,
        admin:any
    }
const CoversionQualification = ({ admin , college , school , work} : converSionQualificationProps) => {


    
  
  const handleDelete = async ( deleteId : string) =>{
    alert("called")
      
      const data = await DeleteCollegeAsPerId({collegeId: college[0]._id , deleteId:deleteId});

  }

  const handleSchoolDelte = async (deleteId:string)=>{
      const deleted = await deletSchoolWithId({schoolId:school[0]._id , deleteId: deleteId});


  }


  const handleWorkDelete = async  (workDeleteId : string)=>{
      const deleted = await deleteWorkById({workId:work[0]._id , deleteId:workDeleteId});
      
  }


  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:px-32 mt-32
    ' >
      {/* SCHOOLING AND COLLEGE DIV */}
      <div className='px-1' >
        {
            school.length > 0 && (
                <div className='py-4' >
                    {
                        <div>
                           <div className='md:mb-16 mb-2 mt-10' >
                           <h1 className='text-2xl font-semibold bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >Education</h1>
                           </div>
                           <div className='flex gap-3 w-full flex-col justify-start items-start' >
                           {
                            school[0].school.map((curr:ISchool)=>{
                                return <div className='py-4 md:w-[500px] px-1 w-[350px]  border-b flex justify-between' >
                                    {/* left div */}
                                    <div className='flex items-center gap-2' >
                                        <div className='h-10 w-10 md:h-12 md:w-12 bg-slate-100 rounded-full flex justify-center items-center ' >
                                            <School strokeWidth={1.5}/>
                                        </div>
                                       <div>
                                       <h1 className='md:text-2xl text-lg font-medium text-zinc-900' >{curr.schoolName}</h1>
                                       <p className='text-zinc-500 font-medium' >{curr.schoolClass}</p>
                                       </div>
                                       
                                    </div>
                                        {/* right div */}
                                       
                                        <div className=' flex' >
                                            <p className='text-sm md:text-xl font-medium text-zinc-600 mt-8' >{curr.finalYear}</p>
                                            {
                                admin && (
                                    <div className="w-full flex justify-start" >
                                        <div onClick={()=>{
                                            handleSchoolDelte(curr._id)
                                        }} className="mb-3">
                                            <Trash className="text-red-300" size={15} />
                                        </div>
                                    </div>
                                )
                            }
                            {
                                admin == false && (
                                    <div>
                                        <ArrowUpRight size={15} />
                                    </div>
                                )
                            }
                                            
                                        </div>
                                </div>
                                }
                            )
                           }
                           {
                            college.length > 0 && (
                                <div>
                                    {
                            college[0].college.map((curr:ICollege)=>{
                                return <div className='py-4 md:w-[500px] px-1 w-[350px]  border-b flex justify-between' >
                                    {/* left div */}
                                    <div className='flex items-start gap-2' >
                                       <div>
                                       <div className='h-10 w-10 md:h-12 md:w-12 bg-slate-100 rounded-full flex justify-center items-center ' >
                                            <GraduationCap strokeWidth={1.5}/>
                                        </div>
                                       </div>
                                       <div>
                                       <h1 className='md:text-2xl text-lg font-medium text-zinc-900' >{curr.instituteName}</h1>
                                       <p className='text-zinc-500 font-medium' >{curr.degree}</p>
                                       </div>
                                       
                                    </div>
                                        {/* right div */}
                                        <div className=' flex' >
                                            <p className='text-sm md:text-xl font-medium text-zinc-600 mt-8' >{curr.batchStartDate} - {curr.batchEndDate}</p>
                                            {
                                admin && (
                                    <div className="w-full flex justify-start" >
                                        <div onClick={()=>{
                                            handleDelete(curr._id)
                                        }} className="mb-3">
                                            <Trash className="text-red-300" size={15} />
                                        </div>
                                    </div>
                                )
                            }
                            {
                                admin == false && (
                                    <div>
                                        <ArrowUpRight size={15} />
                                    </div>
                                )
                            }
                                        </div>
                                </div>
                                }
                            )
                           }
                                </div>
                            )
                           }
                           </div>
                            
                            </div>
                    }
                </div>
            )
        }
        
      </div>
      
      {/* WORK EXPERINCE DIV */}
      <div className='px-1' >
        {
            work.length > 0 && (
                <div className='py-4' >
                    {
                        <div>
                           <div className='md:mb-16 mb-2 mt-11' >
                           <h1 className='text-2xl font-semibold bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >Work Experince</h1>
                           </div>
                           <div className='flex gap-3 w-full flex-col justify-start items-start' >
                           {
                            work[0].work.map((curr:IWork)=>{
                                return <div className='py-4 md:w-[500px] px-1 w-[350px]  border-b flex justify-between' >
                                    {/* left div */}
                                    <div className='flex items-center gap-2' >
                                        <div className='h-10 w-10 md:h-12 md:w-12 bg-slate-100 rounded-full flex justify-center items-center ' >
                                            <Building2 strokeWidth={1.5}/>
                                        </div>
                                       <div>
                                       <h1 className='md:text-2xl text-lg font-medium text-zinc-900' >{curr.companyName}</h1>
                                       <p className='text-zinc-500 font-medium' >{curr.role}</p>
                                       </div>
                                       
                                    </div>
                                        {/* right div */}
                                        <div className=' flex' >
                                            <p className='text-sm md:text-xl font-medium text-zinc-600 mt-8' > {curr.startDate} - {curr.endDate}</p>
                                            {
                                admin && (
                                    <div className="w-full flex justify-start" >
                                        <div onClick={()=>{
                                            handleWorkDelete(curr._id)
                                        }} className="mb-3">
                                            <Trash className="text-red-300" size={15} />
                                        </div>
                                    </div>
                                )
                            }
                            {
                                admin == false && (
                                    <div>
                                        <ArrowUpRight size={15} />
                                    </div>
                                )
                            }
                                        </div>
                                </div>
                                }
                            )
                           }
                           </div>
                            
                            </div>
                    }
                </div>
            )
        }
        
      </div>
      
    </div>
  )
}

export default CoversionQualification
