import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Edit, GemIcon, GraduationCap, Layers, Medal, Pen, Projector, Rocket, School, SpellCheckIcon, Trophy, User, WorkflowIcon } from 'lucide-react'
import Addproject from '../projects/Addproject'
import { currentUser } from '@clerk/nextjs'
import Addachivement from '../achievements/Addachivement'
import Addskill from '../skills/Addskill'
import CustomForm from '../custom/CustomForm'
import { getCustomSection } from '@/lib/actions/custom.action'
import CustomFieldform from '../custom/CustomFieldform'
import Schooling from '../schooling/Schooling'
import College from '../college/College'
import WorkForm from '../works/WorkForm'
import { Button } from '@/components/ui/button'

  type editButtonProps = {
    portfolioId: string
  }

const Editbutton = async ({portfolioId} : editButtonProps) => {

  const user = await currentUser();

  const custom = await getCustomSection(user?.id);
  
  

  return (
    <Sheet>
  <SheetTrigger>
    <Button size="icon"> <Pen/> </Button>
    {/* <div className='flex items-center justify-center gap-4 border-[0.5px] textzintext-zinc-900 text-sm -zinc-700 px-3 rounded-xl hover:bg-zinc-100'>
      <Edit height={18}  color='teal' />
      <p>Edit Your Portfolio</p>
    </div> */}
  </SheetTrigger>
  <SheetContent className='bg-white' >
    <SheetHeader>
      <SheetTitle>Update Your Portfolio</SheetTitle>
      <SheetDescription>
        You can update your portfolio by just filling the required information by just one tap
      </SheetDescription>
    </SheetHeader>
    <div className='mt-9 flex gap-6 flex-col'>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-4 hover:bg-zinc-100 text-zinc-900 text-sm ">
        <div className='h-10 w-10 rounded-full bg-red-100 flex justify-center items-center gap-1' >
        <User  strokeWidth={1.5} color='red' height={18}/>
        </div>
      <p className='text-zinc-900 text-sm ' >Personol Data</p>
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-4 hover:bg-zinc-100 text-zinc-900 text-sm ">
      <div className='h-10 w-10 rounded-full bg-green-50 flex justify-center items-center' >
        <School strokeWidth={1.5} color='green' height={18}/>
        </div>
      <Schooling type='ADD' userId={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-4 hover:bg-zinc-100 text-zinc-900 text-sm ">
      <div className='h-10 w-10 rounded-full bg-blue-50 flex justify-center items-center' >
        <GraduationCap  strokeWidth={1.5} color='blue' height={18}/>
        </div>
      <College type='ADD' userId={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-4 hover:bg-zinc-100 text-zinc-900 text-sm ">
      <div className='h-10 w-10 rounded-full bg-teal-50 flex justify-center items-center' >
        <WorkflowIcon  strokeWidth={1.5} color='teal' height={18}/>
        </div>
      <WorkForm type='ADD' userId={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-4 hover:bg-zinc-100 text-zinc-900 text-sm ">
         <div className='h-10 w-10 rounded-full bg-yellow-100 flex justify-center items-center' >
        <Projector strokeWidth={1.5} color='orange' height={18}/>
        </div>
      <Addproject type='ADD'  useridclerk={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-4 hover:bg-zinc-100 text-zinc-900 text-sm ">
      <div className='h-10 w-10 rounded-full bg-indigo-100 flex justify-center items-center' >
        <Trophy strokeWidth={1.5} color='indigo' height={18}/>
        </div>
        <Addachivement type='ADD' useridclerk={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-4 hover:bg-zinc-100 text-zinc-900 text-sm ">
      <div className='h-10 w-10 rounded-full bg-red-100 flex justify-center items-center' >
        <SpellCheckIcon strokeWidth={1.5} color='red' height={18}/>
        </div>
        <Addskill userclerkId={user?.id}/>

      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-4 hover:bg-zinc-100 text-zinc-900 text-sm ">
      <div className='h-10 w-10 rounded-full bg-pink-100 flex justify-center items-center' >
        <Layers className='text-zinc-900 text-sm ' strokeWidth={1.5}  height={18}/>
        </div>
      <CustomForm useridclerk={user?.id} type='ADD' />
      </div>


      {
        custom.map((curr: any) => {
          return <div className="flex items-center justify-start pl-3 rounded-xl gap-4 hover:bg-zinc-100 text-zinc-900 text-sm ">
          <div className='h-10 w-10 rounded-full bg-red-50 flex justify-center items-center' >
        <GemIcon  strokeWidth={1.5} color='red' height={18}/>
        </div>
          <CustomFieldform customId={curr._id} useridclerk={user?.id} key={curr._id} heading={curr.heading} type='ADD' />
        </div>
        })
      }
    </div>
  </SheetContent>
</Sheet>

  )
}

export default Editbutton
