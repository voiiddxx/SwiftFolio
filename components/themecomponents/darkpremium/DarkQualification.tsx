import Image from 'next/image'
import React from 'react'

const DarkQualification = () => {
  return (
    <div className='w-full min-h-screen bg-heroBgImage pt-14'>
      {/* schooling section  */}
      <div className='w-full flex pl-52 gap-2 items-start'>
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
      {/* college section  */}
      <div className='w-full flex pl-52 gap-2 items-start'>
        {/* //border line  */}
        <div className='flex flex-col'>
            <Image className='h-24 w-32' src="/school.svg" height={500} width={500} alt='schoo and college icons'/>
            <div className='ml-8'>
                <div className='h-40 w-[3px] rounded-md mt-[-14px] bg-gradient-to-b from-yellow-300 to-zinc-900'>
                    
                </div>
            </div>
        </div>
        {/* schooling informaton */}
        <div className='pr-52 mt-7' >
            <p className='text-zinc-500 font-normal text-sm' >August 2021 - July 2025</p>
            <h1 className='text-lg font-normal text-yellow-300'>Baba Farid College of Engineering and technology Bathinda</h1>
            <p className='text-zinc-600 font-normal mr-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolores adipisci delectus hic ad officia. Lorem, ipsum dolor sit amet consectetu adipisicing elit. Labore quia inventore dolor. Culpa aliquid repudiandae alias, distinctio optio magni! Quidem!</p>
        </div>

      </div>        
      {/* work experince section  */}

      <div>
        <h1 className='text-green-400' >Work Experience</h1>
      </div>

    </div>
  )
}

export default DarkQualification
