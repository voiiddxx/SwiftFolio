import { ArrowUpRight, LucideArrowUpRightSquare } from 'lucide-react';
import React from 'react'

const CoversionQualification = () => {

    const edu = [2,6,5];
    const work = [2,6,9,4,];
  return (
    <div className='flex flex-col md:flex-row justify-between items-center md:px-32' >
      {/* SCHOOLING AND COLLEGE DIV */}
      <div className='px-1' >
        {
            edu.length > 1 && (
                <div className='py-4' >
                    {
                        <div>
                           <div className='md:mb-16 mb-8' >
                           <h1 className='text-2xl font-semibold bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >Work Experince</h1>
                           </div>
                           <div className='flex gap-3 flex-col' >
                           {
                            edu.map((curr:any)=>{
                                return <div className='py-4 md:w-[500px] min-w-[450px]  border-b flex justify-between' >
                                    {/* left div */}
                                    <div>
                                        <h1 className='md:text-2xl text-xl font-medium text-zinc-900' >Stanford University</h1>
                                        <p className='text-zinc-500 font-medium' >12th Non Medical</p>
                                    </div>
                                        {/* right div */}
                                        <div className=' flex' >
                                            <p className='text-xl font-medium text-zinc-600 mt-8' >. 2021 - 2025</p>
                                            <ArrowUpRight/>
                                        </div>
                                </div>
                                }
                            )
                           }
                           </div>
                            
                            </div>
                    }
                </div>
            )
        }
        
      </div>
      
      {/* WORK EXPERINCE DIV */}

      <div className='px-1' >
        {
            edu.length > 1 && (
                <div className='py-4' >
                    {
                        <div>
                           <div className='md:mb-16 mb-8' >
                           <h1 className='text-2xl font-semibold bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >Work Experince</h1>
                           </div>
                           <div className='flex gap-3 flex-col' >
                           {
                            edu.map((curr:any)=>{
                                return <div className='py-4 md:w-[500px] min-w-[450px]  border-b flex justify-between' >
                                    {/* left div */}
                                    <div>
                                        <h1 className='md:text-2xl text-xl font-medium text-zinc-900' >Stanford University</h1>
                                        <p className='text-zinc-500 font-medium' >12th Non Medical</p>
                                    </div>
                                        {/* right div */}
                                        <div className=' flex' >
                                            <p className='text-xl font-medium text-zinc-600 mt-8' >. 2021 - 2025</p>
                                            <ArrowUpRight/>
                                        </div>
                                </div>
                                }
                            )
                           }
                           </div>
                            
                            </div>
                    }
                </div>
            )
        }
        
      </div>
    </div>
  )
}

export default CoversionQualification
