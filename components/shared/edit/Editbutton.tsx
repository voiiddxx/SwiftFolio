import React, { Profiler } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Edit, Medal, Projector, User } from 'lucide-react'
import { Separator } from '@radix-ui/react-dropdown-menu'
import Addproject from '../projects/Addproject'
import { currentUser } from '@clerk/nextjs'
import Addachivement from '../achievements/Addachivement'
import Addskill from '../skills/Addskill'

  type editButtonProps = {
    portfolioId: string
  }

const Editbutton = async ({portfolioId} : editButtonProps) => {


  const user = await currentUser();
  

  return (
    <Sheet>
  <SheetTrigger>
    <div className='flex items-center justify-center gap-2 border-[0.5px] text-white border-zinc-700 px-3 rounded-xl hover:bg-zinc-800'>
      <Edit height={40}  color='teal' />
      <p>Edit Your Portfolio</p>
    </div>
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
      <p>Persenol Data</p>
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-green-300">
        <Projector height={40}/>
      <Addproject ownerId={portfolioId} useridclerk={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-blue-300">
        <Medal height={40}/>
        <Addachivement useridclerk={user?.id} />
      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-yellow-300">
        <Projector height={40}/>
        <Addskill userclerkId={user?.id}/>

      </div>
      <div className="flex items-center justify-start pl-3 rounded-xl gap-2 hover:bg-zinc-900 text-green-500">
        <Projector height={40}/>
      <Addproject ownerId={portfolioId} useridclerk={user?.id} />
      </div>
    </div>
  </SheetContent>
</Sheet>

  )
}

export default Editbutton
