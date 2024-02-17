import { GraduationCap, RocketIcon, School } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

    type WhiteQulalificationProps = {
        userSchool : any
        userCollege : any
        userWork : any
    }

const WhiteQulalification = ({userSchool ,  userCollege , userWork} : WhiteQulalificationProps) => {


  
  return (
    <div className='min-h-screen w-full pl-52 bg-whiteCreativeBGImage'>
       {/* this is school section z */}
       {
        userSchool.length < 1? <div></div> : <div>
            <div className='mb-12'>
                <h1 className='font-semibold text-xl text-zinc-900'>My Education</h1>
                <p className='font-normal text-zinc-700' >School and college from where i have gained knowledege have been mentioned below</p>
            </div>
            {
                userSchool[0].school.map((curr : any) => {
                    return  <div className='w-full flex gap-2 items-start justify-start'>
      {/* //border line  */}
      <div className='flex flex-col items-center'>
         <div className='h-14 w-14 border-[1px] border-zinc-300 rounded-full flex justify-center items-center ' >
            <School className='text-blue-700' size={20} />
         </div>
          <div className='mt-5 mb-5'>
              <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-zinc-300'>
                  
              </div>
          </div>
      </div>
      {/* schooling informaton */}
      <div className='pr-52 ' >
          <p className='text-zinc-500 font-normal text-sm' >August 2023</p>
          <h1 className='text-lg font-semibold text-zinc-900  mt-2'>Kiran Public School Bathinda</h1>
          <p className='text-zinc-700 font-normal text-sm mt-2' >Bathinda India</p>
          <p className='text-zinc-600 font-normal mr-80 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>
      </div>

    </div>
                })
            }
        </div>
       }

        {/* this is college section   */}
        {
            userCollege.length < 1 ? <div></div> : <div>
                {
                    userCollege[0].college.map((curr : any) => {
                        return  <div className='w-full flex gap-2 items-start justify-start'>
                        {/* //border line  */}
                        <div className='flex flex-col items-center'>
                           <div className='h-14 w-14 border-[1px] border-zinc-300 rounded-full flex justify-center items-center ' >
                              <GraduationCap className='text-teal-700' size={20} />
                           </div>
                            <div className='mt-5 mb-5'>
                                <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-zinc-300'>
                                    
                                </div>
                            </div>
                        </div>
                        {/* schooling informaton */}
                        <div className='pr-52 ' >
                            <p className='text-zinc-500 font-normal text-sm' >August 2023</p>
                            <h1 className='text-lg font-semibold text-zinc-900  mt-2'>Kiran Public School Bathinda</h1>
                            <p className='text-zinc-700 font-normal text-sm mt-2' >Bathinda India</p>
                            <p className='text-zinc-600 font-normal mr-80 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>
                        </div>
                  
                      </div>
                    })
                }
            </div>
        }

        {/* this is work experince section  */}


        {
        userWork.length < 1? <div></div> : <div className='mt-6'>
            <div className='mb-12'>
                <h1 className='font-semibold text-xl text-zinc-900'>Work Experience</h1>
                <p className='font-normal text-zinc-700' >All the work experince i have are mentioned below</p>
            </div>
            {
                userWork[0].work.map((curr : any , index:number) => {
                    return  <div className='w-full flex gap-2 items-start justify-start'>
      {/* //border line  */}
      <div className='flex flex-col items-center'>
         <div className='h-14 w-14 border-[1px] border-zinc-300 rounded-full flex justify-center items-center ' >
            <RocketIcon className='text-red-700' size={20} />
         </div>
          <div className='mt-5 mb-5'>
            {
                index == userWork[0].work.length -1 ? <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-transparent'>
                  
                </div> : <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-zinc-300'>
                  
                </div>
            }
              {/* <div className='h-40 w-[1px] rounded-md mt-[-14px] bg-zinc-300'>
                  
              </div> */}
          </div>
      </div>
      {/* schooling informaton */}
      <div className='pr-52 ' >
          <p className='text-zinc-500 font-normal text-sm' >August 2023  </p>
          <h1 className='text-lg font-semibold text-zinc-900  mt-2'>Kiran Public School Bathinda</h1>
          <p className='text-zinc-700 font-normal text-sm mt-2' >Bathinda India</p>
          <p className='text-zinc-600 font-normal mr-80 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>
      </div>

    </div>
                })
            }
        </div>
       }

    </div>
  )
}

export default WhiteQulalification
