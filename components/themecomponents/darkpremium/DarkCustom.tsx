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
                                return <div className='h-[300px] w-[400px] bg-yellow-50 rounded-md mt-5 '>
                                  <div className='h-[300px] w-full rounded-md bg-blue-500'>
                              <Image className='h-[300px] w-full object-cover rounded-md grayscale hover:grayscale-0' src={card.customImage} height={300} width={300} alt='customsectionimage'/>
                             
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
