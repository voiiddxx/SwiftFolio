import Header from '@/components/shared/Header'
import { Github, Link, Link2, Linkedin, Mail, School } from 'lucide-react'
import React from 'react'
import LinkedInTabs from './LinkedInTabs';
import Image from 'next/image';
import { ISchool } from '@/lib/database/models/school.model';
import { ICollege } from '@/lib/database/models/education.model';
import { IWork } from '@/lib/database/models/work.model';

type LinkedProps = {
    persenolData:any
    school:any
    college:any
    work:any
    project:any
    achivement:any 
    custom:any
}

const LinkedinHero = ({persenolData , school , college , work , achivement , project , custom} : LinkedProps) => {

    const res = [5,3,];
  return (
    <div className='bg-slate-100' >
        <Header/>
        <div className='min-h-screen md:mt-6 rounded-t-sm md:mx-56  bg-white' >
            {/* Cover Image or upper part */}
            <div className='w-full h-52 bg-black relative ' >
                {/* here we have to put the image later */}


                
            {/* Avatar Just Like Linkedin */}
            <div className='h-36 w-36 rounded-full bg-yellow-300 absolute border-[4px] border-white bottom-[-70px] left-8' >
                <Image src={persenolData.avatar} height={800} width={800} alt='profile'/>
            </div>
            </div>


            {/* Upper Text Part Just Below of avatar */}
            <div className='mt-24  ml-10 border-b pb-4' >
                <h1 className='text-xl font-bold' >{persenolData.name} <span className='text-sm text-zinc-600 font-medium' >(He/Her)</span> </h1>
                <h1 className='font-medium mt-1 text-zinc-700 mr-10' >{persenolData.heading}</h1>
                <p  className='text-sm text-zinc-500 mt-2'>Bathinda | Punjab , India</p>
                <p className='text-indigo-600 mt-2 font-semibold text-sm flex items-center gap-1' >Connect Now <Link size={15} /> </p>
            </div>

            {/* About Section */}
            <div className='mx-12 border-b mt-4 pb-4' >
                <h1 className='text-xl font-medium text-zinc-800' >About me</h1>
                <p className='text-sm mt-2 text-zinc-700' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, obcaecati recusandae delectus tempora quis consequuntur odio quas? Aperiam deleniti voluptatem pariatur unde nulla ipsam culpa illo eum quibusdam rerum mollitia maiores, alias aliquid. Aperiam, a aliquid dolore itaque aut optio sequi reiciendis ex, unde eius dignissimos exercitationem velit assumenda vitae.</p>
            </div>

            {/* Education and Schooling Part */}
            {
                school.length == 0 ? <div></div> : <div>
                    <div className='mx-12  mt-4 pb-4' >
                <h1 className='text-xl font-medium text-zinc-800' >Education</h1>
                <div className='flex flex-col gap-8 mt-4' >
                {
                    school[0].school.map((curr : ISchool)=>{
                        return <div className='flex md:flex-row flex-col gap-2 border-b pb-8' >
                            <div className='md:h-20 md:w-20 h-12 w-12  border-[1px] border-zinc-400  rounded-full flex justify-center items-center md:basis-24  ' >
                                <School className='text-indigo-600 h-7'  />
                            </div>

                            <div>
                                <h1 className='text-zinc-800 font-medium' >{curr.schoolName}</h1>
                                <p className='text-indigo-700 mt-1 font-medium' >{curr.schoolClass}</p>
                                <p className='mt-1 font-normal text-zinc-500 text-sm' >2021-2025</p>
                                <p className='text-sm text-zinc-600' >{curr.extraDetail}</p>

                            </div>

                        </div>
                    })
                }

                {/* College Section */}
                {
                    college[0].college.map((curr : ICollege)=>{
                        return <div className='flex md:flex-row flex-col gap-2 border-b pb-8' >
                            <div className='md:h-20 md:w-20 h-12 w-12  border-[1px] border-zinc-400  rounded-full flex justify-center items-center md:basis-24  ' >
                                <School className='text-indigo-600 h-7'  />
                            </div>

                            <div>
                                <h1 className='text-zinc-800 font-medium' >{curr.instituteName}</h1>
                                <p className='text-indigo-700 mt-1 font-medium' >{curr.degree}</p>
                                <p className='mt-1 font-normal text-zinc-500 text-sm' >{curr.batchStartDate} - {curr.batchEndDate}</p>
                                <p className='text-sm text-zinc-600' >{curr.extraDetail}</p>

                            </div>

                        </div>
                    })
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
                        return <div className='flex md:flex-row flex-col gap-2 border-b pb-8' >
                            <div className='md:h-20 md:w-20 h-12 w-12  border-[1px] border-zinc-400  rounded-full flex justify-center items-center md:basis-24  ' >
                                <School className='text-indigo-600 h-7'  />
                            </div>

                            <div>
                                <h1 className='text-zinc-800 font-medium' >{curr.companyName}</h1>
                                <p className='text-indigo-700 mt-1 font-medium' >{curr.role}</p>
                                <p className='mt-1 font-normal text-zinc-500 text-sm' >{curr.startDate} - {curr.endDate}</p>
                                <p className='text-sm text-zinc-600' >{curr.contribution}</p>

                            </div>

                        </div>
                    })
                }

                </div>
            </div>
                </div>  
            }


            {/* Project Achivements and custom sections */}
            <LinkedInTabs achivement={achivement} custom={custom} project={project} />


            {/* Skills Section */}
            <div className='mx-12 border-b mt-8 pb-4' >
                <h1 className='text-xl font-medium text-zinc-800' >Skills</h1>
                <div className='flex flex-wrap gap-14 mt-4' >
                    <p className='animate-pulse duration-3000' >Nextjs</p>
                    <p className='animate-pulse text-indigo-700 ' >TypeScript</p>
                    <p className='animate-pulse  text-red-700' >Python</p>
                    <p className='animate-pulse text-yellow-700' >Flutter</p>
                    <p className='animate-pulse text-green-700' >ReactJs</p>
                    <p className='animate-pulse duration-400' >NodeJs</p>
                    <p className='animate-pulse duration-5000 text-teal-700' >ExpressJs</p>
                    <p className='animate-pulse ' >Dart </p>
                </div>
                
            </div>


        {/* Footer or links tabse */}
        <div className='mt-32 w-full flex justify-center items-center gap-12' >
            
            <Github className='text-indigo-600'/>
            <Linkedin  className='text-red-700'/>
            <Mail className='text-teal-700' />
            <Link2 className='text-orange-700' />
        </div>

        <div className='flex - justify-center items-center mt-1' >
            <p className='text-sm text-zinc-600 font-medium' >SwiftFolio || Created By Nikhil Kumar</p>
        </div>




            <div className='h-44 w-full' ></div>
            <div>

            </div>

        </div>

      
    </div>
  )
}

export default LinkedinHero
