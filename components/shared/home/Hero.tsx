"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Header from "../Header";
import { Ghost, Zap } from "lucide-react";
import Footer from "../Footer";

const Hero = () => {

  const router = useRouter();
  return (
   <div className="bg-white  md:bg-HeroPageTheme bg-MobileMailBgImage bg-center bg-cover" >
    <Header/>
    <div className=" px-4 md:min-h-screen w-full flex flex-col items-center justify-start pb-24">
      <h1 className="text-zinc-900 md:text-5xl text-3xl text-center font-semibold md:mt-44 mt-28" >Unleash Your Creativity</h1>
      <h1 className="text-zinc-900 md:text-5xl text-3xl text-center font-semibold  mt-3 " >Boom Your Resume With the </h1>
      <h1 className="text-indigo-700 md:text-5xl text-3xl text-center font-semibold  mt-3 " >Help of SwiftFolio</h1>
      <p className="text-zinc-700 md:mr-96 md:ml-96 px-4 text-center mt-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae necessitatibus dignissimos, praesentium quos dolores dolorum impedit dicta magnam doloribus! </p>
      <div className="flex gap-2 mt-6 mx-10" >
        <Button className="bg-transparent border-indigo-800 hover:border-white hover:bg-white text-white" variant="outline"><p className="text-indigo-800  flex items-center" >
          <Zap className="mr-1 text-indigo-800"  size={16} />
          Register on SwiftFolio</p></Button>
        <Button className="bg-indigo-700 text-white hover:bg-zinc-900"  > <Ghost className="mr-1" color="white" size={16} /> Create Your Portfolio</Button>
      </div>

    </div>
    <Footer  />
   </div>
  )
}

export default Hero
