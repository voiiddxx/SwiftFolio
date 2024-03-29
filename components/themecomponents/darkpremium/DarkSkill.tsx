import React from 'react'


    type skillsProps = {
        skills: any
    }

const DarkSkill = ({skills} : skillsProps) => {

  
  // return <div></div>

    if(skills.length < 1) {
        return <div></div>
    }else{
        return (
            <div className='w-full bg-heroBgImage' >
              <div className='h-20 w-full flex justify-center items-center flex-col'>
            <h1 className='font-medium text-2xl mt-3 text-green-300'>Skills That Matters</h1>
            <p className='font-light text-sm text-zinc-400'>All the skills that matters out there</p>
              </div>

              <div className='w-full flex justify-center items-center gap-5 flex-wrap px-6'>
                {
                    skills[0].allSkill.map((curr : any) => {
                        return <div className=' px-2 py-2 rounded-lg bg-zinc-500 mt-6 bg-opacity-5 flex justify-center items-center'>
                                <p className='text-white' >{curr.userSkill}</p>
                        </div>
                    })
                }
              </div>
            </div>
          )
    }
    
 
}

export default DarkSkill
