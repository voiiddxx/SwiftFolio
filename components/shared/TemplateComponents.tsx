"use client"

import { auth, useAuth } from "@clerk/nextjs";
import { log } from "console";
import Image from "next/image";
import { useRouter } from "next/navigation"
import Header from "./Header";
import { Crown } from "lucide-react";
import Footer from "./Footer";
import Link from "next/link";


const TemplateComponents = () => {

  const res = [5,4,5,5,4,8];

  const tempRes = [
    {
      "title":"New Carbon Black",
      "subtitle":"get your free new carbon theme for free",
      "price":"free",
      "image":"https://res.cloudinary.com/dwkmxsthr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709310672/x26ifr18ce7ybvmidspe.jpg?_s=public-apps",
      "link":"/themes/darkpremium/",
    },
    {
      "title":"Minimal White",
      "subtitle":"get your free new carbon theme for free",
      "price":"free",
      "image":"https://res.cloudinary.com/dwkmxsthr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709311050/hirrtbrwatnemw4uvv0w.jpg?_s=public-apps",
      "link":"/themes/whitecreative/",
    },
    
    {
      "title":"Linkedin Style Theme",
      "subtitle":"get your free new carbon theme for free",
      "price":"Paid",
      "image":"https://res.cloudinary.com/dwkmxsthr/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709357308/gahaczixumnwll3d61jx.jpg?_s=public-apps",
      "link":"/themes/linkedin/",
    },
    {
      "title":"Linkedin Style Theme",
      "subtitle":"get your free new carbon theme for free",
      "price":"free",
      "image":"https://res.cloudinary.com/dwkmxsthr/image/upload/v1709617036/p6vwlsp7ar9x9l9kydhr.svg",
      "link":"/themes/linkedin/",
    },
    
    {
      "title":"New Carbon Black",
      "subtitle":"get your free new carbon theme for free",
      "price":"free",
      "image":"https://res.cloudinary.com/dwkmxsthr/image/upload/v1709617036/p6vwlsp7ar9x9l9kydhr.svg",
      "link":"/themes/linkedin/",
    },
    {
      "title":"New Carbon Black",
      "subtitle":"get your free new carbon theme for free",
      "price":"free",
      "image":"https://res.cloudinary.com/dwkmxsthr/image/upload/v1709617036/p6vwlsp7ar9x9l9kydhr.svg",
      "link":"/themes/linkedin/",
    },
    

  ]

    const {userId} = useAuth();
    console.log(userId);
    

    const router = useRouter();
    return (
        <>
        <Header/>
        <div className="min-h-screen w-full bg-white md:px-40 px-8" >
          <div className="h-24 w-full border-b border-zinc-200 flex items-start flex-col justify-center">
            <div className="">
              <h1 className="text-violet-600 font-semibold md:text-2xl text-lg" >Choose Template</h1>
              <p className="text-zinc-600 md:text-base text-sm" >Choose the theme as per your mood</p>
            </div>
          </div>


          {/* category sections */}

          <div className="flex gap-4 flex-wrap text-zinc-700 font-medium mt-8 " >
           <div className="bg-violet-700 px-4 py-2 rounded-md text-white" > <p className="md:text-base text-[13px] " >Developer</p></div>
           <div className="px-4 py-2 rounded-md hover:bg-violet-300 cursor-pointer hover:bg-opacity-30 border-[1px]" > <p className="md:text-base text-[13px] " >Freelancer</p></div>
           <div className="px-4 py-2 rounded-md hover:bg-violet-300 cursor-pointer hover:bg-opacity-30 border-[1px]" > <p className="md:text-base text-[13px] " >Photographer</p></div>
           <div className=" px-4 py-2 rounded-md  hover:bg-violet-300 cursor-pointer hover:bg-opacity-30 border-[1px]" > <p className="md:text-base text-[13px] " >Video Editor</p></div>
           <div className="px-4 py-2 rounded-md  hover:bg-violet-300 cursor-pointer hover:bg-opacity-30 border-[1px]" > <p className="md:text-base text-[13px] " >UI/UX Designer</p></div>
           <div className="px-4 py-2 rounded-md  hover:bg-violet-300 cursor-pointer hover:bg-opacity-30 border-[1px]" > <p className="md:text-base text-[13px] " >Graphic Designer</p></div>
          </div>


          {/* template Section where all cards are shown */}

          
      <div className="flex gap-4   mt-10 flex-wrap md:justify-start justify-center" >
      {
        tempRes.map((curr)=>{
          return <Link href={curr.link+userId} ><div className="h-[450px] w-[380px] " >
          <div className="h-[350px] w-full  rounded-sm" >
            <Image className="h-[350px] w-full object-cover rounded-t-md" src={curr.image} height={800} width={800} alt="templateimage"/>
          </div>
          <div className="flex justify-between items-center px-2 py-4" >
            <div className="" >
            <h1 className="text-violet-700 font-medium text-lg" >{curr.title}</h1>
            <p className="text-zinc-600 text-sm" >New carbon Colt theme for free</p>
            </div>
            <div>
             <div className="bg-green-100 px-4 py-1 rounded-full" >
             {
              curr.price == "free" ? <p className="text-green-800 text-sm" >Free</p> : <p className="flex text-green-950 items-center gap-1" > <Crown size={16} /> Free </p>
             }
             </div>
            </div>
          </div>
        </div></Link>
          
        })
      }
      </div>


      <Footer/>
        </div>
        
        </>
      )
}

export default TemplateComponents




// <div className='min-h-screen w-full pt-8 bg-gray-950 flex flex-col justify-center items-center gap-1 cursor-pointer bg-loginBgImage repeat-0'>
//            <div className="w-full pl-80 mb-6">
//            <h1 className="mt-14 font-semibold text-white text-2xl" >Select Themes</h1>
//             <p className="text-zinc-400">Select Any theme any of them below</p>
//            </div>
//             <div  onClick={()=>{
//                 router.push(`/themes/darkpremium/${userId}`)
//             }} className='w-[900px] object-cover  rounded-lg flex justify-center items-center ' >
//               <Image src={`/dark.svg`} height={800} width={900} alt="darktemplate" />
//             </div>
//             <div  onClick={()=>{
//                router.push(`themes/whitecreative/${userId}`)
//             }} className='h-[450px] w-[900px] object-cover  rounded-lg flex justify-center items-center ' >
//               <Image src={`/white.svg`} height={800} width={900} alt="darktemplate" />
//             </div>
           
//         </div>