import React from 'react'

type WhiteAchivementprops = {
    achivements: any
    adminData: boolean
}

const WhiteAchivement = ({achivements , adminData} : WhiteAchivementprops) => {
  return (
    
    <>
    <div className='min-h-screen w-full bg-whiteCreativeBGImage pt-9 pl-52'>
        <div>
            <h1 className='text-zinc-900 font-bold text-xl'>My Achivements</h1>
            <p className='text-zinc-500 mt-2'>Checkout my all achivements which are mentioned below</p>
        </div>

        <div className='flex gap-4 mt-9'>
            <div className='h-[250px] w-[400px] rounded-lg bg-red-400'>
                
            </div>
        </div>

    </div>
    </>
  )
}

export default WhiteAchivement
