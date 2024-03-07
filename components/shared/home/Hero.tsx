"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Header from "../Header";
import { Ghost, Radio, Zap } from "lucide-react";
import Footer from "../Footer";
import Link from "next/link";

const Hero = () => {

  const router = useRouter();
  // bg-MobileMailBgImage
  return (
   <div className="bg-white " >
    <Header/>
    <div className=" px-4 md:min-h-screen w-full flex flex-col items-center justify-start pb-24">
      {/* hEADING PART */}
      <div className="mt-20 flex justify-center flex-col items-center">
        <div>
        <p className="bg-violet-100 mb-4 text-center text-violet-700 gap-2 border-[1px] border-violet-100 bg-opacity-65 cursor-pointer px-4 py-2 rounded-full flex items-center" ><Radio/> Get Access to all template</p>
        </div>
        <p className="text-5xl font-semibold text-violet-700 text-center" > Effortlessly Build Portfolio with </p>
        <p className="text-5xl font-semibold  text-zinc-800 text-center mt-2" >Creative Designs and Fully Customization</p>
      </div>
      <p className="text-gray-500 md:mr-96 md:ml-96 px-4 text-center font-normal text-lg  mt-5 leading-7" >Swiftfolio is a platform where any individual can create thier portfolio with just one click, and boost their portfolio with creative design  </p>
      <div className="flex gap-2 mt-6 mx-16" >
      <Link href='/sign-in' >  <Button className="bg-transparent border-indigo-800 hover:border-white hover:bg-white text-white" variant="outline" ><p className="text-indigo-800  flex items-center" >
          <Zap className="mr-1 text-indigo-800"  size={16} />
          Register Now</p></Button></Link>
        <Link href="/portfolio/create" ><Button className="bg-indigo-700 text-white hover:bg-zinc-900"  > <Ghost className="mr-1" color="white" size={16} /> Create  Portfolio</Button></Link>
      </div>

    </div>
    <Footer  />
   </div>
  )
}

export default Hero
