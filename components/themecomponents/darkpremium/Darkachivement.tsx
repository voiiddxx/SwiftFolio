import Addachivement from '@/components/shared/achievements/Addachivement'
import { currentUser } from '@clerk/nextjs'
import { Edit, Medal, Trophy } from 'lucide-react'
import Image from 'next/image'
import React from 'react'




    type darkAchivementProps = {
        achivements: any
    }

const Darkachivement = async ( {achivements} : darkAchivementProps) => {

  const user = await currentUser();


  
  if(achivements.length <1 ) {
    return <div></div>
  }
  else{
    return <div className='w-full bg-heroBgImage'>
      <div className='h-20 w-full flex items-center justify-center'>
        <h1 className='font-semibold text-2xl text-white'>Achivements</h1>

      </div>
      <div className='w-full flex justify-center items-center gap-3'>
        {
          achivements.map((curr : any) => {
            return <div className='h-[400px] w-[400px]' >
              <div className='h-[250px] w-full  rounded-t-lg relative'>
                <div className='h-8 w-8 bg-white absolute  top-2 right-2 rounded-md flex items-center justify-center'>
                {/* <Edit size={15} color='black'/> */}
                <Addachivement type='EDIT' achivementId={curr._id} useridclerk={user?.id} />
                </div>
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
