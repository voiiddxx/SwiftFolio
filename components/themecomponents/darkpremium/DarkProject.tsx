import React from 'react'
import "./DarkProject.css"
import Image from 'next/image'
import logo from '../../../public/logo.svg'



type projectstypeProps = {
  data: any
}

const DarkProject = ({data} : projectstypeProps) => {

  console.log("this is data size" , data.length);
  

  return (
   <>
   {
    data.length < 1 ? <div className='h-20 w-full flex items-center justify-center'
    > <h1>There is no any projects</h1></div> :  
     <div className='project-main'>
       <div className='h-20 w-full  flex flex-col mt-5 items-center justify-center' >
        <h1 className='text-2xl font-bold text-green-300'>Checkout The Projects</h1>
        <p className='font-normal text-zinc-500' >All the projects out there with deployed links</p>
        </div>

        <div className='h-auto w-full  flex items-center justify-center gap-5 mt-6'>
          {
            data.map((curr : any) => {
              return  <div className='h-[370px] w-[350px] bg-zinc-800 rounded-lg border-[1px] border-zinc-300' >
                            <div className='h-[180px] w-full bg-red-50 rounded-t-lg'>
                            <Image className='h-[180px] w-full rounded-t-md' src={curr.projectthumbnail} height={180} width={450} alt="logo" />
                            </div>
                            <div className='p-2'>
                               <div className='h-10 w-full flex justify-between items-center '>
                               <h1 className='text-teal-300 font-medium text-xl' >{curr.projectname}</h1>
                               <div className='bg-zinc-700 rounded-2xl'>
                                <p className='text-[11px] py-[2px] px-2 text-orange-300'>Deployed</p>
                               </div>
                               </div>
                                <p className='font-light text-zinc-300 text-sm'> {curr.projectdetail}</p>
                      
                                <div className='mt-4 flex gap-2' >
                                  <div className='px-2 py-1 border-[1px] border-teal-300 w-16 flex items-center justify-center rounded-md'>
                                    <p>NextJs</p>
                                  </div>
                                  <div className='px-2 py-1 border-[1px] border-teal-300 w-16 flex items-center justify-center rounded-md'>
                                    <p>ReactJs</p>
                                  </div>
                                  <div className='px-2 py-1 border-[1px] border-teal-300 w-16 flex items-center justify-center rounded-md'>
                                    <p>Clerk</p>
                                  </div>
                                </div>
                            </div>
                            </div>
            })
          }
        </div>
      </div>
    
   }
   </>
  )
}

export default DarkProject

