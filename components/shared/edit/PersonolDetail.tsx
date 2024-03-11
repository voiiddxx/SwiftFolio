import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, User } from 'lucide-react'
import React from 'react'

const PersonolDetail = () => {
  return (
 
      <div className='w-full min-h-screen' >
                <div className='h-20 w-full border-b flex justify-center  px-12 flex-col' >
                <h1 className='text-lg font-semibold text-zinc-800' >Edit Your Personol Information</h1>
                <p className='text-sm font-normal text-zinc-600' >Please fill information below given</p>
                </div>

                {/* PERSENOL DATA EDIT COMPONENTS */}
                <div className='min-h-52 w-full  flex px-12 ' >
                    <div className='min-h-40 py-5 w-1/2 rounded-lg   border-[1px] border-zinc-300 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mt-5 px-4' >
                        <div className=''  >
                            <h1 className='text-xl font-medium' >Primary Info</h1>
                            <p className='text-sm font-normal mt-1 text-zinc-600' >Please fill new email and name</p>
                        </div>

                        
                        <div className='mt-5' >
                            <p className='text-zinc-500 font-normal text-sm mt-4 mb-1' >Your Name</p>
                           <div className='flex gap-2 items-center ' >
                           <div className='h-10  w-12 bg-slate-100 rounded flex justify-center items-center' >
                                <User strokeWidth={1.5} size={17} />
                            </div>
                            <Input/>
                           </div>
                           
                            <p className='text-zinc-500 font-normal text-sm mt-4 mb-1' >Your Email Address</p>
                           <div className='flex gap-2 items-center ' >
                           <div className='h-10  w-12 bg-slate-100 rounded flex justify-center items-center' >
                                <Mail strokeWidth={1.5} size={17} />
                            </div>
                            <Input/>
                           </div>

                           <Button className='w-full mt-5' >Submit</Button>
                           
                            
                        </div>
                    
                    </div>
                </div>

               

            </div>
   
  )
}

export default PersonolDetail
