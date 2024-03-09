import React from 'react'
import ConversionHeader from './ConversionHeader'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { isDataView } from 'util/types'


type ConversionHeroProps = {
    data:any,
    admin:any
}

const ConversionHero = ({admin , data}: ConversionHeroProps) => {
    
  return (
    <div className='min-h-screen w-full bg-white' >
        {/* CONVERSION HEADER */}
        <ConversionHeader/>

        {/* HERO SECTION */}
        <div className='h-[600px] w-full flex md:flex-row flex-col justify-center items-center md:px-32 mt-12' >
            {/* HERO TEXT SECTION */}
            <div className='md:mr-16 px-8 mt-60 md:mt-10' >
                <h1 className='md:text-7xl text-5xl leading-[60px] font-semibold tracking-normal md:leading-[80px]' ><span className='bg-gradient-to-r from-violet-500 to-orange-500 text-transparent bg-clip-text' >I design products </span>
that delight and inspire people</h1>
<p className='text-xl font-medium mt-8 text-gray-600' >{data.heading}</p>
            {/* hero buttons */}
            <div className='flex gap-2 mt-8' >
                <Button className='bg-zinc-950' size={'lg'} >Book a Call</Button>
                <Button size={'lg'} variant={'outline'}>Download CV</Button>
            </div>
            </div>
            {/* HERO IMAGE SECTION */}
            <div>
                <div className='h-[400px] w-[500px] bg-white' >
                    <Image className='h-[400px] w-[500px] object-contain mt-8 md:mt-1'  src={data.resume} height={900} width={900} alt='profilepicture' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConversionHero
