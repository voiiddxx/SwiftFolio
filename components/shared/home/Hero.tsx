"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Hero = () => {

  const router = useRouter();
  return (
    <div className="mainhai">
    <div className="min-h-screen w-full flex flex-col justify-start items-center pt-28">
    <h1 className="bg-gradient-to-tl from-white to-gray-500 text-transparent bg-clip-text font-bold text-6xl text-center leading-normal ">Unleash your protfolio with<br /> <span className="bg-gradient-to-tr from-purple-600 to-orange-600 text-transparent bg-clip-text" >With SwiftFolio</span></h1>
    <p className="text-gray-400 text-center mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum voluptatem sapiente <br /> consectetur officia natus eveniet delectus reiciendis sequi aperiam cupiditate.</p>
    <div className="mt-5 flex gap-3" >
      <Button onClick={()=>{
        router.push('/portfolio/create')
      }} className="bg-white text-black">Create Now</Button>
      <Button className="bg-transparent border-[0.5px] border-blue-500 text-blue-300">Give a Star on Github</Button>
    </div>
  </div>
  </div>
  )
}

export default Hero
