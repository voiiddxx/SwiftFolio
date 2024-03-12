import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
                <div className='min-h-52 w-full flex px-12 gap-4' >
                    {/* 1ST COLUMN FOR DATA OF EMAIL AND NAME UPDATION */}
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
                            <Input placeholder='Nikhil Kumar' />
                           </div>
                           
                            <p className='text-zinc-500 font-normal text-sm mt-4 mb-1' >Your Email Address</p>
                           <div className='flex gap-2 items-center ' >
                           <div className='h-10  w-12 bg-slate-100 rounded flex justify-center items-center' >
                                <Mail strokeWidth={1.5} size={17} />
                            </div>
                            <Input placeholder='nikhildesign00@gmail.com' />
                           </div>

                           <Button className='w-full mt-5' >Submit</Button>
                           
                            
                        </div>
                    
                    </div>
                    {/* 1ST COLUMN FOR DATA OF EMAIL AND NAME UPDATION END */}


                    {/* 2ST COLUMN FOR DATA OF IMAGE RESUME AND THE CASUAL AVATAR */}
                    <div className='min-h-40 py-5 w-1/2 rounded-lg   border-[1px] border-zinc-300 bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] mt-5 px-4' >
                        <div className=''  >
                            <h1 className='text-xl font-medium' >Your Assets</h1>
                            <p className='text-sm font-normal mt-1 text-zinc-600' >Update your assets</p>
                        </div>

                        
                        <div className='mt-5' >
                            <p className='text-zinc-500 font-normal text-sm mt-4 mb-1' >Your CV</p>
                           <div className='flex gap-2 items-center ' >
                           <div className='h-10  w-12 bg-slate-100 rounded flex justify-center items-center' >
                                <User strokeWidth={1.5} size={17} />
                            </div>
                            <Input type='file' />
                           </div>
                           
                            <p className='text-zinc-500 font-normal text-sm mt-4 mb-1' >Your Avatar</p>
                           <div className='flex gap-2 items-center ' >
                           <div className='h-10  w-12 bg-slate-100 rounded flex justify-center items-center' >
                                <Mail strokeWidth={1.5} size={17} />
                            </div>
                            <Input type='file' />
                           </div>
                            <p className='text-zinc-500 font-normal text-sm mt-4 mb-1' >Your Casual Image</p>
                           <div className='flex gap-2 items-center ' >
                           <div className='h-10  w-12 bg-slate-100 rounded flex justify-center items-center' >
                                <Mail strokeWidth={1.5} size={17} />
                            </div>
                            <Input type='file' />
                           </div>

                           <Button className='w-full mt-5' >Submit</Button>
                           
                            
                        </div>
                    
                    </div>
                    {/* 2nd column for upadtion of emage , resume  and the casual END */}
                </div>


        {/* CAPTION AND ABOUT US EDIT SECTION */}

        <div className='w-full min-h-40 px-12 py-6 rounded-md' >
            <div className='w-full  bg-white rounded-md shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-[1px] border-zinc-300 px-5 py-4' >
                {/* heading */}
                <div>
            <h1>Additnols</h1>
            <p className='text-sm text-zinc-600' >Update as per requirement</p>
                </div>

                {/* flex for about and heading */}

                <div className='w-full h-full  flex gap-4' >
                    <div className='w-1/2 mt-4' >
                        <p className='mb-1' >Heading</p>
                        <Textarea className='h-40 w-full' placeholder='SIH2K23 Grand Finalist || NextJs || Typescript || Mern Stack' />
                    </div>
                    <div className='w-1/2 mt-4' >
                        <p className='mb-1' >About  </p>
                        <Textarea className='h-40 w-full ' placeholder='hey , my name is nikhil kumar am a mainly a web developer , and i dont know what i am writting but it is a placehorder so i have to write' />
                    </div>
                </div>

                <Button className='w-full mt-4' >Submit </Button>
            </div>
        </div>
               

            </div>
   
  )
}

export default PersonolDetail
