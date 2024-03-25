"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import Header from "../Header";
import { ArrowRight, CheckCheck, Ghost, Radio, Zap } from "lucide-react";
import Footer from "../Footer";
import Link from "next/link";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import ParllaxEffectLanding from "./ParllaxEffectLanding";
import Testimoniol from "./Testimoniol";
import Questions from "./Questions";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Hero = () => {

  const users = [
    {
      "name":"nikhil",
      "designation":"hei kuch",
      "image":"nkm"
    },
  ]


  const content = [
    {
      title: "No Coding Required",
      description:
        "Our platform empowers users to customize their portfolios without any coding knowledge required. With intuitive tools and pre-designed templates, individuals can effortlessly personalize every aspect of their showcase.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          No Coding Required
        </div>
      ),
    },
    {
      title: "Easily Cusomizable",
      description:
        "Our platform enables effortless customization, offering intuitive tools for users to tailor their portfolios with ease. From layouts to fonts, our diverse templates cater to various styles. With just a few clicks,",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          Easy Customizable
        </div>
      ),
    },
    {
      title: "Minimal Designs",
      description:
        " Our platform boasts sleek and minimalistic designs, offering users a refined aesthetic without unnecessary clutter. Each template is meticulously crafted to highlight content while maintaining an elegant simplicity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Minimal Designs
        </div>
      ),
    },
    {
      title: "AI Powered Features",
      description:
        "Our platform harnesses the power of AI to offer cutting-edge features that streamline the portfolio creation process. From intelligent content suggestions to automated layout optimization, our AI-powered tools help users create polished and professional portfolios with minimal effort.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          AI Powered Features
        </div>
      ),
    },
  ];

  const router = useRouter();
  // bg-MobileMailBgImage
  return (
   <div className="bg-white" >
    <Header/>
    <div className=" px-4  w-full flex flex-col items-center justify-start pb-24">
      {/* hEADING PART */}
      <div className="md:mt-20 mt-10 flex justify-center flex-col items-center px-4 md:px-2">
        <div>
        <p className="bg-violet-100 mb-4 text-center text-violet-700 gap-2 border-[1px] border-violet-100 bg-opacity-65 text-sm cursor-pointer px-4 py-2 rounded-full flex items-center" ><Radio/> Get Access to all template</p>
        </div>
        <p className="md:text-5xl text-3xl font-semibold md:font-semibold text-violet-700 text-center" > Effortlessly Build Portfolio with </p>
        <p className="md:text-5xl text-2xl md:font-semibold font-semibold  text-zinc-800 text-center mt-2" >Creative Designs and Customization</p>
      </div>
      <p className="text-gray-500 md:mr-96 md:ml-96 px-4 text-center font-normal md:text-lg  mt-5 leading-7 text-[14px]" >Swiftfolio is a platform where any individual can create thier portfolio with just one click, and boost their portfolio with creative design  and boost your resume selection proces  </p>
      <div className="flex gap-2 mt-6 mx-16" >
     <SignedOut> <Link href='/portfolio/create' >  <Button size={"lg"} className="bg-transparent border-indigo-800 hover:border-white hover:bg-white text-white" variant="outline" ><p className="text-violet-700  flex items-center" >
          <Zap className="mr-1 text-violet-700"  size={16} />
          Register Now</p></Button ></Link></SignedOut>
        <SignedOut>
        <Link href="/portfolio/create" ><Button size={"lg"} className="bg-violet-700 text-white hover:bg-zinc-900"  > <Ghost className="mr-1" color="white" size={16} /> Genreate Portfolio</Button></Link>
        </SignedOut>
        <SignedIn>
        <div className="flex flex-col items-center justify-center" >
        <Link href="/template" >
          <div className="h-16 w-80 rounded-lg bg-violet-600 flex justify-center items-center gap-2" >
        <p className="text-white font-normal " >Access your portfolio</p>
        <ArrowRight color="white" strokeWidth={1.5} />
          </div>
        </Link>
        <Link href='/portfolio/create' >
          <p className="text-sm font-normal text-violet-700 underline mt-2" >Create Your Portfolio</p>
        </Link>

        </div>
        </SignedIn>
      </div>


    
        {/* HERO ANIMATION CONTAINER */}

        <div className="text-black" >
        <ContainerScroll
        users={users}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      />
        </div>

      </div>
      <div className="p-10">
      <StickyScroll  content={content} />
    </div>


    {/* Parllax Effect for landing */}

    <ParllaxEffectLanding/>


    {/* TESTIMONIOL SECTION */}
    <Testimoniol/>


    {/* QUESTION SECTIONS */}
    <Questions/>


    {/* FEEDBACK SECTION */}
    {/* <Feedback/> */}
    <Footer  />
   </div>
  )
}

export default Hero
