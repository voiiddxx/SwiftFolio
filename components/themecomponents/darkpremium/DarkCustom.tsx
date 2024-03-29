import Addachivement from '@/components/shared/achievements/Addachivement'
import CustomFieldform from '@/components/shared/custom/CustomFieldform'
import DeleteSection from '@/components/shared/delete/DeleteSection'
import { ChevronsRight, Trophy } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


type customProps = {
  IsAdmin: boolean
  customData: any
    }
const DarkCustom = ( {customData , IsAdmin} : customProps) => {
  return (
    <div className='w-full flex justify-center items-center bg-heroBgImage'>
      {
        customData.map((curr : any) => {
            return <div>
                {
                    curr.data.length < 1 ? <div></div> :
                    <div>
                        <div className='w-full flex justify-center items-center flex-col gap-1'>
                            <h1 className='text-xl text-green-300 font-medium' >{curr.heading}</h1>
                            <p className='font-light text-sm text-zinc-500'>This is custom section subtitle</p>
                        </div>

                       <div className='w-full flex justify-center items-center gap-4 flex-wrap'>
                       {
                            curr.data.map((card : any) => {
                                return <Link href={card.customLink} ><div className='h-[400px] w-[400px]  rounded-md mt-5 '>
                                   
                                <div className='h-[300px] w-full rounded-md bg-blue-500 relative'>
                                  
                               
                            <Image className='h-[300px] w-full object-cover rounded-md grayscale hover:grayscale-0' src={card.customImage} height={300} width={300} alt='customsectionimage'/>
                            <div className='h-12 w-full mt-5 bg-gray-600 bg-opacity-20 rounded-md flex justify-between items-center px-4'>
                            
                            <p className='font-light text-zinc-400'>{card.customTitle}</p>
                            <ChevronsRight size={18} color='gray'/>
                            </div>
                                </div>
                              </div></Link>
                            })
                        }
                       </div>

                    </div>
                }
            </div>
        })
      }
    </div>
  )
}

export default DarkCustom
