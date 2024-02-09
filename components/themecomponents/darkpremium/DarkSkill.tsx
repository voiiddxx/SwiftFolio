import React from 'react'


    type skills = {
        skills: any
    }

const DarkSkill = ({skills} : any) => {

    console.log(skills[0].allSkill);


    if(skills[0].allSkill.length < 1) {
        return <div></div>
    }else{
        return (
            <div className='w-full bg-heroBgImage' >
              <div className='h-20 w-full flex justify-center items-center flex-col'>
            <h1 className='font-bold text-2xl mt-3'>Skills That Matters</h1>
            <p className='font-light text-sm text-gray-600'>All the skills that matters out there</p>
              </div>

              <div className='w-full flex justify-center items-center gap-5'>
                {
                    skills[0].allSkill.map((curr : any) => {
                        return <div className=' px-2 py-2 rounded-lg bg-zinc-500 mt-6 bg-opacity-5 flex justify-center items-center'>
                                <p>{curr.userSkill}</p>
                        </div>
                    })
                }
              </div>
            </div>
          )
    }
    
 
}

export default DarkSkill
