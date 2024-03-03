import Header from '@/components/shared/Header'
import { Link, School } from 'lucide-react'
import React from 'react'
import LinkedInTabs from './LinkedInTabs';

const LinkedinHero = () => {

    const res = [5,3,];
  return (
    <div className='bg-slate-100' >
        <Header/>
        <div className='min-h-screen mt-6 rounded-t-sm md:mx-56 mx-10 bg-white' >
            {/* Cover Image or upper part */}
            <div className='w-full h-52 bg-black relative ' >
                {/* here we have to put the image later */}


                
            {/* Avatar Just Like Linkedin */}
            <div className='h-36 w-36 rounded-full bg-yellow-300 absolute border-[4px] border-white bottom-[-70px] left-8' ></div>
            </div>


            {/* Upper Text Part Just Below of avatar */}
            <div className='mt-24  ml-10 border-b pb-4' >
                <h1 className='text-xl font-bold' >Nikhil Kumar <span className='text-sm text-zinc-600 font-medium' >(He/Her)</span> </h1>
                <h1 className='font-medium mt-1 text-zinc-700' >SIH 2K23 Finalist🚀 | Next Js | Typescript | React | Flutter | Node Js</h1>
                <p  className='text-sm text-zinc-500 mt-2'>Bathinda | Punjab , India</p>
                <p className='text-indigo-600 mt-2 font-semibold text-sm flex items-center gap-1' >Connect Now <Link size={15} /> </p>
            </div>

            {/* About Section */}
            <div className='mx-12 border-b mt-4 pb-4' >
                <h1 className='text-xl font-medium text-zinc-800' >About me</h1>
                <p className='text-sm mt-2 text-zinc-700' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, obcaecati recusandae delectus tempora quis consequuntur odio quas? Aperiam deleniti voluptatem pariatur unde nulla ipsam culpa illo eum quibusdam rerum mollitia maiores, alias aliquid. Aperiam, a aliquid dolore itaque aut optio sequi reiciendis ex, unde eius dignissimos exercitationem velit assumenda vitae.</p>
            </div>

            {/* Education and Schooling Part */}
            <div className='mx-12  mt-4 pb-4' >
                <h1 className='text-xl font-medium text-zinc-800' >Education</h1>
                <div className='flex flex-col gap-8 mt-4' >
                {
                    res.map((curr : any)=>{
                        return <div className='flex gap-2 border-b pb-8' >
                            <div className='h-20 w-20 border-[1px] border-zinc-400  rounded-full flex justify-center items-center basis-24 ' >
                                <School className='text-indigo-600' size={30} />
                            </div>

                            <div>
                                <h1 className='text-zinc-800 font-medium' >Baba Farid College of engineering and technology</h1>
                                <p className='text-indigo-700 mt-1 font-medium' >Bachelor of Technology</p>
                                <p className='mt-1 font-normal text-zinc-500 text-sm' >2021-2025</p>
                                <p className='text-sm text-zinc-600' >Activities and societies: CodeX Club (Technichal Team Head) || RobotRoys Club (Web Master) || School Of Skill Development (Head Of Web Designing) || Theatre</p>

                            </div>

                        </div>
                    })
                }
                </div>
            </div>


            {/* Project Achivements and custom sections */}
            <LinkedInTabs/>


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




            <div className='h-44 w-full' ></div>
            <div>

            </div>

        </div>

      
    </div>
  )
}

export default LinkedinHero
