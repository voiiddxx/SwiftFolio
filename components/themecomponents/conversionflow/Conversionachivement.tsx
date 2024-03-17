import Addachivement from '@/components/shared/achievements/Addachivement'
import DeleteSection from '@/components/shared/delete/DeleteSection'
import { currentUser } from '@clerk/nextjs/server'
import { ArrowRight } from 'lucide-react'
import React from 'react'
  type conversionAchivementProps = {
    admin:any
    achivement:any
      }
const Conversionachivement = async ({achivement , admin} : conversionAchivementProps) => {
    const user = await currentUser();
  return (
   <div>
    {
      achivement.length > 0 && (
        <div className=' min-w-full bg-black  md:px-32 px-8 py-8 flex md:flex-row flex-col justify-between relative' >
        {/* Achivement Heading */}
        <div className='' >
        <h1 className='text-lg font-medium bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >ACHIVEMENTS</h1>
        <h1 className='text-3xl  font-semibold text-white mt-1' >Latest Achivements</h1>
        </div>
  
        {/* ACHIVEMENCT CARDS */}
        <div className='md:w-1/2 flex gap-4 flex-col'>
          {
            achivement.map((curr : any , index : number)=>{
              return <div className='w-full py-4 cursor-pointer bg-zinc-900 bg-opacity-20 border-b relative' >
                  <p className='text-lg font-normal text-zinc-700 mt-4' >{index+1}</p>
                  <h1 className='md:text-3xl text-2xl mt-2 font-semibold text-white hover:bg-gradient-to-r from-violet-500 to-orange-500 hover:text-transparent hover:bg-clip-text' >{curr.acaption}</h1>
  
                  <div className='flex gap-1 mt-6 items-center' >
                    <p className='text-white text-sm' >Explore</p>
                    <ArrowRight className='text-white' size={15} />
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

export default Conversionachivement
