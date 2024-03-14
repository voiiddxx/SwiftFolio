import { Button } from '@/components/ui/button'
import { Plus, Trash } from 'lucide-react'
import React from 'react'


type SkillDetailPropss = {
    data:any
}
const SkillDetail = ({data} : SkillDetailPropss) => {
    const res = [5,6,4,65,4,6,4,6,4,5,4];
  return ( 
     <div className='min-h-screen w-full' >
        <div className='h-20 w-full border-b flex justify-between items-center  px-12 ' >
               <div>
               <h1 className='text-lg font-semibold text-zinc-800' >Customize Your Skills</h1>
                <p className='text-sm font-normal text-zinc-600' >Please fill information below given</p>
               </div>

               <div className='flex' >
                    <Button className='flex items-center gap-2' >
                        <Plus size={18} />
                        Add Your Skills
                    </Button>
               </div>
                </div>


                {/* Skills Card Componenets sections */}

                <div className='flex gap-4 px-12 flex-wrap'  >
                        {
                            res.map((curr:any)=>{
                                return <div className='bg-violet-700 px-4 mt-4 py-2 rounded relative'>
                                            <h1 className='text-white' >TypeScript</h1>
                                            <div className='absolute top-[-7px] h-5 w-5 bg-white rounded-full right-[-7px] border-[1px] border-zinc-400 flex justify-center items-center' >
                                               <Trash className='text-red-500' size={10} />

                                            </div>
                                </div>
                            })
                        }
                </div>
    </div>
  )
}

export default SkillDetail
