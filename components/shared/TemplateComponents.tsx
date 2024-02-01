"use client"

import { useRouter } from "next/navigation"


const TemplateComponents = () => {

    const router = useRouter();
    return (
        <div className='min-h-screen w-full bg-gray-950 flex justify-center items-center gap-4 cursor-pointer'>
            <div  onClick={()=>{
                router.push(`/themes/darkpremium`)
            }} className='h-80 w-80 bg-white rounded-lg flex justify-center items-center' >
                <h1 className='text-blue-600 font-bold text-2xl' >Dark Premium</h1>
            </div>
            <div className='h-80 w-80 bg-white rounded-lg flex justify-center items-center' >
                <h1 className='text-blue-600 font-bold text-2xl' >Blue Spark</h1>
            </div>
        </div>
      )
}

export default TemplateComponents
