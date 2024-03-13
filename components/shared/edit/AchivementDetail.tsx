import { Button } from '@/components/ui/button'
import { Edit, MoreVerticalIcon, Plus, Trash } from 'lucide-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"

  
const AchivementDetail = () => {
    const res = [5,6,6,9,64,14,4]
  return (
    <div className='w-full min-h-screen overflow-hidden' >
         <div className='h-20 w-full border-b flex justify-between items-center  px-12 ' >
               <div>
               <h1 className='text-lg font-semibold text-zinc-800' >Edit Your Achivements</h1>
                <p className='text-sm font-normal text-zinc-600' >Please fill information below given</p>
               </div>

               <div className='flex' >
                    <Button className='flex items-center gap-2' >
                        <Plus size={18} />
                        Add Achivement
                    </Button>
               </div>
                </div>  

                {/* achivements card shown below */}
                <div className='flex px-12 flex-wrap gap-4' >
                    {
                        res.map((curr:any)=>{
                            return <div className='h-[300px] w-[300px]  mt-10' >
                                    <div className='w-full h-[250px] rounded-lg bg-yellow-300' >
                                    </div>
                                    <div className='flex justify-between items-center mt-4' >
                                    <h1 className='mt-2 font-medium mr-8 text-zinc-800' >Winner of Smart India Hackathon 2K24</h1>
                                    <Popover>
                                        <PopoverTrigger>
                                        <MoreVerticalIcon className='text-zinc-600' />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <div className='h-16 border-b flex gap-2 items-center' >
                                    <Edit className='text-indigo-700' size={18}  />
                                    <p>Edit Achivemt </p>
                                            </div>
                                            <div className='h-16 border-b flex gap-2 items-center' >
                                    <Trash className='text-red-500' size={18} />
                                    <p>Edit Achivemt </p>
                                            </div>
                                            
                                        </PopoverContent>
                                        </Popover>

                                    </div>
                                    
                            </div>
                        })
                    }
                </div>
                  </div>
  )
}

export default AchivementDetail
