import { Button } from '@/components/ui/button'
import { School } from 'lucide-react'
import React from 'react'

const SchoolingDetail = () => {
    const schoolData = [2,6 ]
  return (
    <div className='w-full min-h-screen' >
            <div className='h-20 w-full border-b flex justify-center  px-12 flex-col' >
                <h1 className='text-lg font-semibold text-zinc-800' >Edit Your Schooling Information</h1>
                <p className='text-sm font-normal text-zinc-600' >Update your schooling information </p>
                </div>

                <div className=' flex gap-4 mt-8 px-12  flex-wrap' >
                    {
                        schoolData.map((curr:any)=>{
                            return <div className='h-[300px] w-[350px] bg-white shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] border-[1px] border-zinc-300 rounded-md px-4 py-2' >
                                <div className='h-14 w-14 bg-slate-50 rounded-full flex justify-center items-center ' >
                                <School strokeWidth={1.5} className='text-violet-700' />
                                </div>

                                <h1 className='text-lg font-medium text-zinc-900 mt-4' >Kiran Public School</h1>
                                <h1 className='font-normal mt-1 text-zinc-700' >12th Non medical</h1>
                                <p className='text-[12px] mt-1 font-normal text-zinc-500' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nam minima odit autem libero voluptatibus.</p>
                                <p className='text-sm font-normal mt-1 ' >2021-2025</p>

                                <div className='flex justify-between gap-2 mt-4' >
                                <Button className='w-full' >Edit Schooling</Button>
                                <Button className='bg-red-500 w-full' >Delete</Button>
                                </div>

                            </div>
                        })
                    }

                </div>

          

    </div>
  )
}

export default SchoolingDetail
