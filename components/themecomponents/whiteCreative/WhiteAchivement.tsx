import Image from 'next/image'
import React from 'react'

type WhiteAchivementprops = {
    achivements: any
    adminData: boolean
}

const WhiteAchivement = ({achivements , adminData} : WhiteAchivementprops) => {

    
  return (
    
    <>
    {
        achivements.length < 1 ?  <div></div>:<div className='min-h-screen w-full bg-whiteCreativeBGImage pt-9 pl-52'>
        <div>
            <h1 className='text-zinc-900 font-bold text-xl'>My Achivements</h1>
            <p className='text-zinc-500 mt-2'>Checkout my all achivements which are mentioned below</p>
        </div>

        <div className='flex gap-4 mt-9'>
           {
            achivements.map((curr : any)=> {
                return  <div className='h-[250px] w-[400px] rounded-lg bg-zinc-800 relative '>
                    <Image className='h-[250px] w-[400px] object-cover rounded-lg mix-blend-overlay relative' src={curr.aimage} height={500} width={500} alt='achivementimagesection'/>
                    <div className='h-[250px] w-[400px] absolute top-0 flex justify-start pr-8 pl-3 items-center'>
                        <p className='font-bold text-lg'>{curr.acaption}</p>
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

export default WhiteAchivement
