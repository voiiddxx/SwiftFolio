import React from 'react'




    type darkAchivementProps = {
        achivements: any
    }

const Darkachivement = ( {achivements} : darkAchivementProps) => {
  return (
    <div>
      {
        achivements.length < 1 ? <div></div> : <div className=' w-full bg-heroBgImage'> 
        <div className='h-10 w-full flex justify-center items-center flex-col'>
        <h1 className='text-2xl font-semibold'>Achivements</h1>
        <p className='text-sm font-light text-zinc-600' >My Achivements Out There</p>
        </div>

        <div className='h-auto w-full flex justify-center items-center gap-4 mt-6'>
            {
                achivements.map(({curr , index} : any) => {
                    return <div className='h-[250px] w-[400px] bg-yellow-500 rounded-lg'>

                    </div>
                })
            }

        </div>
        </div>
      }
    </div>
  )
}

export default Darkachivement
