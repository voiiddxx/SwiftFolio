"use client"

import { auth, useAuth } from "@clerk/nextjs";
import { log } from "console";
import Image from "next/image";
import { useRouter } from "next/navigation"


const TemplateComponents = () => {

    const {userId} = useAuth();
    console.log(userId);
    

    const router = useRouter();
    return (
        <div className='min-h-screen w-full pt-8 bg-gray-950 flex flex-col justify-center items-center gap-1 cursor-pointer bg-loginBgImage repeat-0'>
           <div className="w-full pl-80 mb-6">
           <h1 className="mt-14 font-semibold text-white text-2xl" >Select Themes</h1>
            <p className="text-zinc-400">Select Any theme any of them below</p>
           </div>
            <div  onClick={()=>{
                router.push(`/themes/darkpremium/${userId}`)
            }} className='w-[900px] object-cover  rounded-lg flex justify-center items-center ' >
              <Image src={`/dark.svg`} height={800} width={900} alt="darktemplate" />
            </div>
            <div  onClick={()=>{
               router.push(`themes/whitecreative/${userId}`)
            }} className='h-[450px] w-[900px] object-cover  rounded-lg flex justify-center items-center ' >
              <Image src={`/white.svg`} height={800} width={900} alt="darktemplate" />
            </div>
           
        </div>
      )
}

export default TemplateComponents
