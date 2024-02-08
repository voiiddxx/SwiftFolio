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
                                return <div className='h-36 w-44 bg-yellow-50'>

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
