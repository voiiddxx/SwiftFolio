import { ICollege } from '@/lib/database/models/education.model';
import { ISchool } from '@/lib/database/models/school.model';
import { IWork } from '@/lib/database/models/work.model';
import { ArrowUpRight, Building2, GraduationCap, LucideArrowUpRightSquare, School } from 'lucide-react';
import React from 'react'


    type converSionQualificationProps = {
        work:any,
        school:any,
        college:any,
        admin:any
    }
const CoversionQualification = ({ admin , college , school , work} : converSionQualificationProps) => {

  
    

    const edu = [2,6,5];
    const workHai = [2,6,9,4,];
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
                                            <ArrowUpRight size={15} />
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
                                    <div className='flex items-center gap-2' >
                                        <div className='h-10 w-10 md:h-12 md:w-12 bg-slate-100 rounded-full flex justify-center items-center ' >
                                            <GraduationCap strokeWidth={1.5}/>
                                        </div>
                                       <div>
                                       <h1 className='md:text-2xl text-lg font-medium text-zinc-900' >{curr.instituteName}</h1>
                                       <p className='text-zinc-500 font-medium' >{curr.degree}</p>
                                       </div>
                                       
                                    </div>
                                        {/* right div */}
                                        <div className=' flex' >
                                            <p className='text-sm md:text-xl font-medium text-zinc-600 mt-8' >{curr.batchStartDate} - {curr.batchEndDate}</p>
                                            <ArrowUpRight size={15} />
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
                                            <ArrowUpRight size={15} />
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
