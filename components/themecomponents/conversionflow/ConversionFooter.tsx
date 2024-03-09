import Link from 'next/link';
import React from 'react'

    type conversionFooterprops = {
        data:any
    }
const ConversionFooter = ({data} : conversionFooterprops) => {
    console.log(data);
    
  return (
    <div className='pb-10 w-full bg-black md:px-32 pt-20 px-4' >
      <h1 className='text-white text-3xl font-semibold' >Want to connect with me?</h1>
      <h1 className='text-3xl font-semibold  bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >Click me to connect</h1>

     <div className='mt-16' >
     <h1 className='text-xl font-medium text-white' >{data.name}</h1>
      <p className='text-xl font-medium text-gray-600' >{data.mailurl}</p>
     </div>
     <div className='w-full flex justify-center items-center gap-8 text-gray-500 mt-20' >
    <Link href={`${data.extraurl}`} ><p>Linkedin</p></Link>
    <Link href={`${data.extraurl}`} ><p>Github</p></Link>
    <Link href={`${data.extraurl}`} ><p>Website</p></Link>
    
     </div>
    </div>
  )
}

export default ConversionFooter
