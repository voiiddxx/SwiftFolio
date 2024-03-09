import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
    type conversionPprojectProps = {
        projects:any,
        admin:any
    }
const ConversionProject = ({admin , projects}:conversionPprojectProps) => {
 
        
  return (
    <div className='relative' >
       <div className='min-h-screen w-[100%] bg-black absolute top-3/4' ></div>
        {
            projects.length> 1 && (
                <div className='min-h-screen w-full md:px-32 pl-4 pt-20' >
        <div>
            <p className='text-xl bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text font-semibold' >PROJECTS</p>
            <h1 className='md:text-4xl text-2xl font-semibold mt-2 leading-snug' >I Build <br /> Projects That matters</h1>
        </div>

        {/* PROJECTS CARDS */}
        <div className='flex overflow-y-scroll no-scrollbar gap-10 mt-10 mb-40 relative ' >
            {
                projects.map((curr:any)=>{
                    return <div>
                        <div className='md:h-[500px] md:w-[500px] h-[500px] w-[380px] bg-white z-50 ' >
                            <div className='h-[353px] w-full' >
                            <Image className='h-[353px] w-[500px] object-cover hover:w-[700px]' src={curr.projectthumbnail} height={900} width={900} alt='project image'/>
                            </div>

                            <div className='py-5 px-4' >
                                <h1 className='bg-gradient-to-r from-violet-800 to-orange-800 text-transparent bg-clip-text text-lg font-medium' >{curr.projectstatus}</h1>
                                <h1 className='text-xl font-medium mt-4' >{curr.projectname}</h1>
                                <div className='flex gap-2 items-center' >
                                    <h1>View Project</h1>
                                    <ArrowRight/>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>

       
    </div>
            )
        }

        
    </div>
  )
}

export default ConversionProject
