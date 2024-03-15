import { Button } from '@/components/ui/button'
import React from 'react'
import WorkForm from '../works/WorkForm'
import { Plus } from 'lucide-react'


    type WorkExperinceProps = {
        userId:string,
        work:any
    }
const WorkExperince = ({userId , work}:WorkExperinceProps) => {
  return (
    <div>
      <div className='h-20 w-full border-b flex justify-between items-center  px-12 ' >
               <div>
               <h1 className='text-lg font-semibold text-zinc-800' >Edit Your Projects</h1>
                <p className='text-sm font-normal text-zinc-600' >Please fill information below given</p>
               </div>

               <div className='flex' >
                    <Button className='flex items-center gap-2' >
                        <Plus size={18} />
                        <WorkForm type='ADD' userId={userId} key={userId} />
                    </Button>
               </div>
                </div>
    </div>
  )
}

export default WorkExperince
