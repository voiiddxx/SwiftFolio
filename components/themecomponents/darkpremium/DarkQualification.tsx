import { IWork } from '@/lib/database/models/work.model'
import Image from 'next/image'
import React from 'react'


type eductaionandWorkExperince = {
  userwork: any,
  userSchool:any,
  userCollege:any
}

// type workMapprops = {
//   curr : any
// }

const DarkQualification = ({userwork , userSchool , userCollege} : eductaionandWorkExperince) => {

  
  
  return (
    <div className='w-full  bg-heroBgImage pt-14'>
      {/* schooling section  */}

    {
       userSchool.length   < 1 ? <div></div> :  <>
      <div className='pl-60 mt-4'>
    <h1 className='text-yellow-300 text-xl' >Schooling</h1>
    <p className='mt-2 text-zinc-500' >All of my work experinece have been mentioned below</p>
  </div> 
{
    userSchool[0].school.map((curr : any) => {
      return  <div className='w-full flex pl-52 gap-2 items-start'>
      {/* //border line  */}
      <div className='flex flex-col'>
          <Image className='h-24 w-32' src="/college.svg" height={500} width={500} alt='schoo and college icons'/>
          <div className='ml-8'>
              <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-gradient-to-b from-green-300 to-zinc-900'>
                  
              </div>
          </div>
      </div>
      {/* schooling informaton */}
      <div className='pr-52 mt-7' >
          <p className='text-zinc-500 font-normal text-sm' >August 2023</p>
          <h1 className='text-lg font-normal text-green-400'>Kiran Public School Bathinda</h1>
          <p className='text-zinc-600 font-normal mr-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>
      </div>

    </div>
    })
}

</>

      }
    {
       userCollege.length   < 1 ? <div></div> :  <>
      <div className='pl-60 mt-4'>
    <h1 className='text-teal-300 text-xl' >College</h1>
    <p className='mt-2 text-zinc-500' >All of my work experinece have been mentioned below</p>
  </div> 
{
    userCollege[0].college.map((curr : any) => {
      return  <div className='w-full flex pl-52 gap-2 items-start'>
      {/* //border line  */}
      <div className='flex flex-col'>
          <Image className='h-24 w-32' src="/college.svg" height={500} width={500} alt='schoo and college icons'/>
          <div className='ml-8'>
              <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-gradient-to-b from-green-300 to-zinc-900'>
                  
              </div>
          </div>
      </div>
      {/* schooling informaton */}
      <div className='pr-52 mt-7' >
          <p className='text-zinc-500 font-normal text-sm' >August 2023</p>
          <h1 className='text-lg font-normal text-green-400'>Kiran Public School Bathinda</h1>
          <p className='text-zinc-600 font-normal mr-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>
      </div>

    </div>
    })
}

</>

      }

         
      {/* work experince section  */}

      

       {
       userwork.length   < 1 ? <div></div> :  <><div className='pl-60 mt-4'>
        <h1 className='text-green-400 text-xl' >Work Experience</h1>
        <p className='mt-2 text-zinc-500' >All of my work experinece have been mentioned below</p>
      </div>
      {
        userwork[0].work.map((curr : IWork , index : number) => {
          return  <div className='w-full flex pl-52 gap-2 items-start'>
          {/* //border line  */}
          <div className='flex flex-col'>
              <Image className='h-24 w-32' src="/job2.svg" height={500} width={500} alt='schoo and college icons'/>
              <div className='ml-8'>
                  <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-gradient-to-b from-teal-300 to-zinc-900'>
                      
                  </div>
              </div>
          </div>
          {/* schooling informaton */}
          <div className='pr-52 mt-10' >
              <p className='text-zinc-500 font-normal text-sm' >{curr.startDate} {index} {curr.endDate}</p>
              <h1 className='text-lg font-normal text-teal-400'>{curr.companyName}</h1>
              <p className='text-zinc-600 font-normal mr-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>
          </div>
  
        </div> 
        })

      }
      </>
      
      } 


    
      

    

    </div>
  )
}

export default DarkQualification
