import Addachivement from '@/components/shared/achievements/Addachivement'
import CustomFieldform from '@/components/shared/custom/CustomFieldform'
import DeleteSection from '@/components/shared/delete/DeleteSection'
import { ChevronsRight, Trophy } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


type customProps = {
  customData: any
    }
const DarkCustom = ( {customData} : customProps) => {
  return (
    <div className='w-full flex justify-center items-center bg-heroBgImage'>
      {
        customData.map((curr : any) => {
            return <div>
                {
                    curr.data.length < 1 ? <div></div> :
                    <div>
                        <div className='w-full flex justify-center items-center flex-col gap-1'>
                            <h1 className='text-xl text-green-300 font-bold' >{curr.heading}</h1>
                            <p className='font-light text-zinc-500'>This is custom section subtitle</p>
                        </div>

                       <div className='w-full flex justify-center items-center gap-4'>
                       {
                            curr.data.map((card : any) => {
                                return <div className='h-[400px] w-[400px]  rounded-md mt-5 '>
                                   
                                  <div className='h-[300px] w-full rounded-md bg-blue-500 relative'>
                                    
                                 
                              <Image className='h-[300px] w-full object-cover rounded-md grayscale hover:grayscale-0' src={card.customImage} height={300} width={300} alt='customsectionimage'/>
                              <div className='h-8 w-8 bg-white absolute top-2 right-2 rounded-md flex justify-center items-center pt-1' >
                                <CustomFieldform customId={curr._id} type='ADD' useridclerk="550"  />
                              </div>
                              <div className='h-8 w-8 bg-white absolute top-2 right-12 rounded-md flex justify-center items-center pt-1' >
                                <DeleteSection deleteId={card._id} type='CUSTOM'/>
                              </div>
                              <div className='h-12 w-full mt-5 bg-gray-600 bg-opacity-20 rounded-md flex justify-between items-center px-4'>
                              
                              <p className='font-light text-zinc-400'>{card.customTitle}</p>
                              <ChevronsRight size={18} color='gray'/>
                              </div>
                             
                              {/* <Image className='h-[180px] w-full rounded-t-md' src={card.customImage} height={180} width={450} alt="logo" /> */}
                                  </div>
                                </div>
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
