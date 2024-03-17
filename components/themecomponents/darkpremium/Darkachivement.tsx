import Addachivement from '@/components/shared/achievements/Addachivement'
import DeleteSection from '@/components/shared/delete/DeleteSection'
import { currentUser } from '@clerk/nextjs'
import { Edit, Medal, Trophy } from 'lucide-react'
import Image from 'next/image'
import React from 'react'




    type darkAchivementProps = {
        achivements: any
        IsAdmin: boolean
    }

const Darkachivement = async ( {achivements , IsAdmin} : darkAchivementProps) => {
  

  const user = await currentUser();


  
  if(achivements.length <1 ) {
    return <div></div>
  }
  else{
    return <div className='w-full bg-heroBgImage'>
      <div className='h-20 w-full flex items-center justify-center flex-col'>
        <h1 className='font-medium text-2xl text-green-300'>Achivements</h1>
        <p className='font-normal text-zinc-500 text-sm' >All the Achivements</p>

      </div>
      <div className='w-full flex justify-center items-center gap-3 flex-wrap'>
        {
          achivements.map((curr : any) => {
            return <div className='h-[400px] w-[350px]' >
              <div className='h-[250px] w-full  rounded-t-lg relative'>
              <Image className='h-[250px] w-full rounded-t-lg object-cover' src={curr.aimage} height={250} width={400} alt='achivementImage'/>
              <div className='h-12 w-full bg-zinc-500 bg-opacity-20 rounded-md flex justify-center items-center gap-2 mt-5'>
                <div className='text-green-300 opacity-100 '>
                <Trophy size={20}/>
                </div>
                <p className='font-normal text-blue-300 text-sm'>{curr.acaption}</p>
              
              </div>
              </div>
              </div>
  
          })
        }
      </div>
      
    </div>
  }


}

export default Darkachivement
