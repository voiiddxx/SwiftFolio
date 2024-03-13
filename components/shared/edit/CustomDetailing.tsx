import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const CustomDetailing = () => {
    const res = [6,6,4,6,,6]
  return (
    <div className='min-h-screen w-full'  >
      <div className='h-20 w-full border-b flex justify-between items-center  px-12 ' >
               <div>
               <h1 className='text-lg font-semibold text-zinc-800' >Edit Your Projects</h1>
                <p className='text-sm font-normal text-zinc-600' >Please fill information below given</p>
               </div>

               <div className='flex' >
                    <Button className='flex items-center gap-2' >
                        <Plus size={18} />
                        Add project
                    </Button>
               </div>
                </div>


                {/* custom card componenets */}

                <div className='flex flex-wrap gap-8 px-12' >
                    {
                        res.map((curr:any)=>{
                            return <div className='h-[300px] w-[350px] bg-yellow-600 mt-6 relative rounded-lg' >
                                <Image  className='w-full h-full object-cover brightness-[35%] rounded-lg hover:brightness-105' src="https://res.cloudinary.com/dwkmxsthr/image/upload/v1709655664/zblnv8zceydice96ztqw.svg" height={900} width={900} alt='customImage' />
                                <h1 className='text-white absolute bottom-5 right-3 font-medium' >
                                    PlanetPulse App Ui
                                </h1>

                            </div>
                        })
                    }

                </div>
    </div>
  )
}

export default CustomDetailing
