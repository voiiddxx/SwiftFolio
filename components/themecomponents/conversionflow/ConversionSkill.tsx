import React from 'react'


type conversionSkillProps = {
    skill:any
}
const ConversionSkill = ({skill} : conversionSkillProps) => {
  
    
  return (
    <div>
        {
            skill.length > 0 && (
                <div className=' pb-20 w-full bg-white md:px-32 px-10 mt-16' >
                    <h1 className='text-xl font-medium  bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >SKILLS</h1>
                    <h1 className='text-3xl font-semibold text-zinc-950' >Skills That Matters</h1>

                    {/* skills cards section */}

                    <div className=' flex  gap-4 flex-wrap mt-10' >
                        {
                            skill[0].allSkill.map((curr:any , index : number)=>{
                                return <div>
                                    {
                                        index % 2 == 0 ? <div className='px-4 py-4  rounded bg-green-100' >
                                        <h1 className='text-xl font-medium text-zinc-900' >{curr.userSkill}</h1>
                                    </div> : <div className='px-4 py-4  rounded bg-orange-100' >
                                    <h1 className='text-xl font-medium text-zinc-900' >{curr.userSkill}</h1>
                                </div>
                                    }
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

export default ConversionSkill
