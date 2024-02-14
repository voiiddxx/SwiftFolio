import React from 'react'


 type skills = {
    skills: any
 }
const WhiteSkill = ({skills}: skills) => {

    

    if(skills.length <1){
        return <div></div>
    }
  return (
    <div className='min-h-screen w-full  bg-whiteCreativeBGImage pl-52 pt-10'>
     <div>
    <h1 className='text-xl font-semibold text-zinc-800'>Skills</h1>
    <p className='text-zinc-500'>All the skills i am equiped with are mentioned below</p>
     </div>
     <div className=' flex flex-col gap-4 mt-5' >
     {
        skills[0].allSkill.map((curr  : any)=>{
            return <div className='flex gap-4' >
                <div>
                    <p className='text-black font-semibold'>-</p>
                </div>
                <p className='text-blue-600'>{curr.userSkill}</p>
            </div>
        })
     }
     </div>
    </div>
  )
}

export default WhiteSkill
