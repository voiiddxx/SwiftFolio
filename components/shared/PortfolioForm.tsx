"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { createPortfolio } from "@/lib/actions/portfolio.action"
import { useState } from "react"

import uploadDataonCloudinary from "./Cloudinary"
import { useRouter } from "next/navigation"
import Header from "./Header"
import { CandyCaneIcon, Check, Cross, Ghost, LoaderIcon, X } from "lucide-react"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import Footer from "./Footer"
import AiForm from "./AiForm"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  heading: z.string().min(2).max(50),
  about: z.string().min(2).max(250),
  githuburl: z.string().url(),
  linkedinurl: z.string().url(),
  mailurl: z.string().email(),
  extraurl: z.string().url(),
})



type portfolioformProps = {
  userId : string | any
}

const PortfolioForm =  ({userId} : portfolioformProps) => {
  
  const router = useRouter();


  const [avatar, setavatar] = useState<any>();
  const [resume, setresume] = useState<any>()
  
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          heading:"",
          about:"",
          githuburl:"",
          linkedinurl:"",
          mailurl:"",
          extraurl:"",
          
        },
      });



      

     async function onSubmit(values: z.infer<typeof formSchema>) {

      // setTimeout(() => {
      //   alert("hey");
      // }, 6000);
      
      const avatarurl = await uploadDataonCloudinary(avatar);
      const resumeurl = await uploadDataonCloudinary(resume);

      const response = await createPortfolio({portfolio:{
        ...values, avatar: avatarurl, resume: resumeurl,
        clerkId: userId , 
      } , clerkId:userId});
      console.log("this is the response" , response);
      
      if(response){
        form.reset();
        router.push('/template')
      }
      
        
      }
  return (
   <>
  <div className="min-h-screen w-full md:bg-whiteLogin" >
    <Header/>
    <div className="min-h-screen w-full md:px-44 px-6" >
      {/* Heading of portfolio form */}
      <Form {...form}>
<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="h-28 w-full  flex border-b border-zinc-200 justify-between items-center" >
       <div>

       <h1 className="md:text-2xl font-semibold text-violet-700 flex items-center gap-2 mb-1"> <Ghost/> Portfolio Form</h1>
        <p className="text-zinc-600 text-[10px] mt-2 md:text-[15px]" >Please enter prior informaation for initial portfolio</p>
       </div>
       <div className="flex gap-2" >
        <Button  className="bg-white text-zinc-700 border-zinc-300 " variant="outline" size="icon" ><X className="text-red-500"  /></Button>



        <Button size="icon" disabled={form.formState.isSubmitting} type="submit" className="bg-violet-600 text-white hover:bg-zinc-800" >{form.formState.isSubmitting ? (
            <LoaderIcon className="animate-spin" />
          ):<Check/> }</Button>
       </div>
      </div>


      {/* Form Part */}
  


  <div className="h-16 w-full  border-b border-zinc-200 flex items-center justify-between">
    <div>
      <h1 className="text-zinc-500 font-medium md:text-[15px] text-sm" >Your Name 📛 </h1>
    </div>
    <div>
    <FormField
    control={form.control}
    name="name"
    render={({ field }) => (
      <FormItem className="md:w-[500px]">
        <FormControl>
          <Input className="outline-none border-zinc-300 text-zinc-800 bg-transparent" placeholder="Your complete name" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    </div>
  </div>
  <div className="h-16 w-full  border-b border-zinc-200 flex items-center justify-between">
    <div>
      <h1 className="text-zinc-500 font-medium md:text-[15px] text-sm" >Your Email Address 💌</h1>
    </div>
    <div>
    <FormField
    control={form.control}
    name="mailurl"
    render={({ field }) => (
      <FormItem className="md:w-[500px]">
        <FormControl>
          <Input className="outline-none border-zinc-300 text-zinc-800 bg-transparent" placeholder="Your Email Address" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    </div>
  </div>
  <div className="h-28 w-full  border-b border-zinc-200 flex items-center justify-between">
    <div>
      <h1 className="text-zinc-500 font-medium md:text-[15px] text-sm" >About👍</h1>
    </div>
    <div>
    <FormField
    control={form.control}
    name="about"
    render={({ field }) => (
      <FormItem className="md:w-[500px]">
        <FormControl>
         <div>
         <Textarea className="bg-transparent border-zinc-300 text-zinc-800" {...field} placeholder="Please write Something about you"  />
         <div className="flex justify-end mb-4 mt-3" >
          <AiForm/>
         </div>
         </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    </div>
  </div>
  <div className="h-28 w-full  border-b border-zinc-200 flex items-center justify-between">
    <div>
      <h1 className="text-zinc-500 font-medium md:text-[15px] text-sm" >Your Caption/Headline 👍</h1>
    </div>
    <div>
    <FormField
    control={form.control}
    name="heading"
    render={({ field }) => (
      <FormItem className="md:w-[500px]">
        <FormControl>
          <Textarea className="bg-transparent border-zinc-300 text-zinc-800" {...field} placeholder="Please write your caption/headline"  />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    </div>
  </div>


  <div className="h-16 w-full  border-b border-zinc-200 flex items-center justify-between">
    <div>
      <h1 className="text-zinc-500 font-medium md:text-[15px] text-sm hidden md:block" >Your Links ⛈️ </h1>
    </div>
    <div className="flex gap-4" >
    <FormField
    control={form.control}
    name="linkedinurl"
    render={({ field }) => (
      <FormItem className="md:w-[280px]">
        <FormControl>
          <Input className="outline-none border-zinc-300 text-zinc-800 bg-transparent" placeholder="Your LinkedIn Url " {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    <FormField
    control={form.control}
    name="githuburl"
    render={({ field }) => (
      <FormItem className="md:w-[280px]">
        <FormControl>
          <Input className="outline-none border-zinc-300 text-zinc-800 bg-transparent" placeholder="Your Github Url" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    <FormField
    control={form.control}
    name="extraurl"
    render={({ field }) => (
      <FormItem className="md:w-[280px]">
        <FormControl>
          <Input className="outline-none border-zinc-300 text-zinc-800 bg-transparent" placeholder="Any other link" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
    </div>
  </div>




  <div className="h-36 w-full  border-b border-zinc-200 flex items-center justify-between">
  <div>
      <h1 className="text-zinc-500 font-medium md:text-[15px] text-sm hidden md:block" >Important* 📸 </h1>
    </div>
<div className=" flex gap-4" >
   <div>
 <Label className="text-zinc-600" >Your Professinol Avatar</Label>
      <Input onChange={(e)=>{
        setavatar(e.target.files)
      }} className="bg-violet-800 outline-none border-none"  type="file"/>
 </div>
 <div>
 <Label className="text-zinc-600" >Your casual Image</Label>
      <Input onChange={(e)=>{
        setresume(e.target.files)
      }} className="bg-violet-800 outline-none border-none"  type="file"/>
 </div></div>
  </div>

  {/* <Button className="w-full bg-white text-black" type="submit">Submit</Button> */}
</form>
</Form>
      
    </div>
  </div>

  <Footer/>
  
   </>
  )
}

export default PortfolioForm


