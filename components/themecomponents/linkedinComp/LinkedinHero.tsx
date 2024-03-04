
import Header from '@/components/shared/Header'
import { Briefcase, Github,  Link, Link2, Linkedin, Mail, School } from 'lucide-react'
import React from 'react'
import LinkedInTabs from './LinkedInTabs';
import Image from 'next/image';
import { ISchool } from '@/lib/database/models/school.model';
import { ICollege } from '@/lib/database/models/education.model';
import { IWork } from '@/lib/database/models/work.model';
import Editbutton from '@/components/shared/edit/Editbutton';
import LinkedinQualification from './LinkedinQualification';

type LinkedProps = {
    persenolData:any
    school:any
    college:any
    work:any
    project:any
    achivement:any 
    custom:any
    admin:any
    userId:any
}

const LinkedinHero = ({persenolData , school , college , work , achivement , project , custom , admin , userId} : LinkedProps) => {


  return (
    <div className='bg-slate-100' >
        <Header/>
        {
      admin && (
        <div className='absolute z-10 md:top-24 top-14 right-2 h-20 w-full flex justify-end items-center md:pr-12'>
          <Editbutton portfolioId={persenolData._id} />
        </div>
      )
    }
        <div className='min-h-screen md:mt-6 rounded-t-sm md:mx-56  bg-white ' >
        
            {/* Cover Image or upper part */}
            <div className='w-full h-52 bg-black relative ' >
                {/* here we have to put the image later */}

    <Image className='w-full h-52 object-cover' src={persenolData.resume} height={900} width={800} alt='cover image'/>
                
            {/* Avatar Just Like Linkedin */}
            <div className='h-36 w-36 rounded-full bg-yellow-300 absolute border-[4px] border-white bottom-[-70px] left-8' >
                <Image className='h-36 w-36 rounded-full object-cover'  src={persenolData.avatar} height={800} width={800} alt='profile'/>
            </div>
            </div>


            {/* Upper Text Part Just Below of avatar */}
            <div className='mt-24  ml-10 border-b pb-4' >
                <h1 className='text-xl font-bold' >{persenolData.name} <span className='text-sm text-zinc-600 font-medium' >(He/Him)</span> </h1>
                <h1 className='font-medium mt-1 text-zinc-700 mr-10' >{persenolData.heading}</h1>
                <p  className='text-sm text-zinc-500 mt-2'>Bathinda | Punjab , India</p>
                <p className='text-indigo-600 mt-2 font-semibold text-sm flex items-center gap-1' >Connect Now <Link size={15} /> </p>
            </div>

            {/* About Section */}
            <div className='mx-12 border-b mt-4 pb-4' >
                <h1 className='text-xl font-medium text-zinc-800' >About me</h1>
                <p className='text-sm mt-2 text-zinc-700' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, obcaecati recusandae delectus tempora quis consequuntur odio quas? Aperiam deleniti voluptatem pariatur unde nulla ipsam culpa illo eum quibusdam rerum mollitia maiores, alias aliquid. Aperiam, a aliquid dolore itaque aut optio sequi reiciendis ex, unde eius dignissimos exercitationem velit assumenda vitae.</p>
            </div>

                {/* Qualification part  */}
            <LinkedinQualification college={college} school={school} work={work} admin={admin} />

            {/* Project Achivements and custom sections */}
            <LinkedInTabs achivement={achivement} custom={custom} project={project} admin={admin} userid={userId}  />


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

        <div className='flex - justify-center items-center mt-12' >
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
