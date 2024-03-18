"use client"

import { DeleteCollegeAsPerId } from "@/lib/actions/education.action"
import { deletSchoolWithId } from "@/lib/actions/school.action"
import { deleteWorkById } from "@/lib/actions/work.action"
import { ICollege } from "@/lib/database/models/education.model"
import { ISchool } from "@/lib/database/models/school.model"
import { IWork } from "@/lib/database/models/work.model"
import { Briefcase, GraduationCap, School, Trash } from "lucide-react"

    type QualiParams = {
        school:any 
        college:any 
        work:any
        admin:any
    }
const LinkedinQualification = ({college , school , work , admin} : QualiParams) => {


  return (
    <div>
      
            {/* Education and Schooling Part */}
            {
                school.length == 0 ? <div></div> : <div>
                    <div className='mx-12  mt-4 pb-4' >
                <h1 className='text-xl font-medium text-zinc-800' >Education</h1>
                <div className='flex flex-col gap-8 mt-4' >
                {
                    school[0].school.map((curr : ISchool)=>{
                        return <div className="border-b" >
                            <div className='flex md:flex-row flex-col gap-4  pb-8' >
                           <div>
                           <div className='md:h-16 md:w-16 h-12 w-12  border-[1px] border-zinc-400  rounded-full flex justify-center items-center md:basis-24  ' >
                                <School strokeWidth={1.5}  className='text-indigo-600 h-7'  />
                            </div>
                           </div>

                            <div>
                                <h1 className='text-zinc-800 font-medium' >{curr.schoolName}</h1>
                                <p className='text-indigo-700 mt-1 font-medium' >{curr.schoolClass}</p>
                                <p className='mt-1 font-normal text-zinc-500 text-sm' >2021-2025</p>
                                <p className='text-sm text-zinc-600' >{curr.extraDetail}</p>

                            </div>

                           

                        </div>
                       
                        </div>
                    })
                }

                {/* College Section */}
               {
                college.length > 0 && (
                    <div>
                         {
                    college[0].college.map((curr : ICollege)=>{
                        return <div className="border-b" >
                            <div className='flex md:flex-row flex-col gap-4  pb-8' >
                           <div>
                           <div className='md:h-16 md:w-16 h-12 w-12  border-[1px] border-zinc-400  rounded-full flex justify-center items-center md:basis-24  ' >
                                <GraduationCap strokeWidth={1.5}  className='text-orange-600 h-7'  />
                            </div>
                           </div>

                            <div>
                                <h1 className='text-zinc-800 font-medium' >{curr.instituteName}</h1>
                                <p className='text-orange-600 mt-1 font-medium' >{curr.degree}</p>
                                <p className='mt-1 font-normal text-zinc-500 text-sm' >{curr.batchStartDate} - {curr.batchEndDate}</p>
                                <p className='text-sm text-zinc-600' >{curr.extraDetail}</p>

                            </div>

                        </div>

                      
                        </div>
                    })
                }
                    </div>
                )
               }
                </div>
            </div>
                </div>  
            }
            {/* Work Experince Part*/}
            {
                work.length == 0 ? <div></div> : <div>
                    <div className='mx-12  mt-4 pb-4' >
                <h1 className='text-xl font-medium text-zinc-800' >Work Experience</h1>
                <div className='flex flex-col gap-8 mt-4' >
                {
                    work[0].work.map((curr : IWork)=>{
                        return <div className="border-b" >
                            <div className='flex md:flex-row flex-col gap-4  pb-8' >
                            <div>
                            <div className='md:h-16 md:w-16 h-12 w-12  border-[1px] border-zinc-400  rounded-full flex justify-center items-center md:basis-24  ' >
                                <Briefcase strokeWidth={1.5}  className='text-teal-600 h-7'  />
                            </div>
                            </div>

                            <div>
                                <h1 className='text-zinc-800 font-medium' >{curr.companyName}</h1>
                                <p className='text-teal-700 mt-1 font-medium' >{curr.role}</p>
                                <p className='mt-1 font-normal text-zinc-500 text-sm' >{curr.startDate} - {curr.endDate}</p>
                                <p className='text-sm text-zinc-600' >{curr.contribution}</p>

                            </div>

                        </div>

                        
                        </div>
                    })
                }

                </div>
            </div>
                </div>  
            }


    </div>
  )
}

export default LinkedinQualification
