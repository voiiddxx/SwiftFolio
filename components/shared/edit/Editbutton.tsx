import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Edit, GraduationCap, Layers, Medal, Pen, Projector, Rocket, School, User, WorkflowIcon } from 'lucide-react'
import { Separator } from '@radix-ui/react-dropdown-menu'
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
    {/* <div className='flex items-center justify-center gap-2 border-[0.5px] text-white border-zinc-700 px-3 rounded-xl hover:bg-zinc-800'>
      <Edit height={40}  color='teal' />
      <p>Edit Your Portfolio</p>
    </div> */}
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Update Your Portfolio</SheetTitle>
      <SheetDescription>
        You can update your portfolio by just filling the required information by just one tap
      </SheetDescription>
    </SheetHeader>
    <div className='mt-9 flex gap-4 flex-col'>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-orange-300">
        <User height={40}/>
      <p>Personol Data</p>
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-pink-300">
        <School height={40}/>
      <Schooling type='ADD' userId={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-orange-300">
        <GraduationCap height={40}/>
      <College type='ADD' userId={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-yellow-300">
        <WorkflowIcon height={40}/>
      <WorkForm type='ADD' userId={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-green-300">
        <Projector height={40}/>
      <Addproject type='ADD'  useridclerk={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-blue-300">
        <Medal height={40}/>
        <Addachivement type='ADD' useridclerk={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-yellow-300">
        <Projector height={40}/>
        <Addskill userclerkId={user?.id}/>

      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-cyan-300">
        <Layers height={40}/>
      <CustomForm useridclerk={user?.id}  />
      </div>


      {
        custom.map((curr: any) => {
          return <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-red-300">
          <Rocket height={40}/>
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
