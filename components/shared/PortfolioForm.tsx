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

const formSchema = z.object({
  name: z.string().min(2).max(50),
  heading: z.string().min(2).max(50),
  githuburl: z.string().url(),
  linkedinurl: z.string().url(),
  mailurl: z.string().url(),
  extraurl: z.string().url(),
})



const PortfolioForm = () => {


  const router = useRouter();


  const [avatar, setavatar] = useState<any>();
  const [resume, setresume] = useState<any>()
  
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          heading:"",
          githuburl:"",
          linkedinurl:"",
          mailurl:"",
          extraurl:"",
        },
      });



      

     async function onSubmit(values: z.infer<typeof formSchema>) {
      const avatarurl = await uploadDataonCloudinary(avatar);
      const resumeurl = await uploadDataonCloudinary(resume);

      const response = await createPortfolio({portfolio:{...values , avatar:avatarurl , resume:resumeurl}});
      if(response){
        form.reset();
        router.push(`/portfolio/${response._id}`)
      }
      
        
      }
  return (
   <>
    <div className='min-h-screen w-full bg-gray-950 flex flex-col items-center'>
      <div className="h-20 w-full  flex flex-col justify-center items-center mt-6">
        <h1 className="font-bold text-2xl text-white " >Create Your Portfolio</h1>
        <p className="font-light text-gray-500 mt-1" >Please provide some initial detail you can update it later</p>
      </div>

       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <div className="flex gap-4 mt-4" >
       <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-[500px]">
            
              <FormControl>
                <Input className="bg-gray-800 outline-none border-none text-white" placeholder="Your complete name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       <FormField
          control={form.control}
          name="heading"
          render={({ field }) => (
            <FormItem className="w-[500px]">
              <FormControl>
                <Input className="bg-gray-800 outline-none border-none text-white" placeholder="Write a headline for portfolio" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       </div >
       <div className="flex gap-4" >
       <FormField
          control={form.control}
          name="linkedinurl"
          render={({ field }) => (
            <FormItem className="w-[500px]">
            
              <FormControl>
                <Input className="bg-gray-800 outline-none border-none text-white" placeholder="Linkedin Url" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       <FormField
          control={form.control}
          name="githuburl"
          render={({ field }) => (
            <FormItem className="w-[500px]">
            
              <FormControl>
                <Input className="bg-gray-800 outline-none border-none text-white" placeholder="Github Url" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       </div >
       <div className="flex gap-4" >
       <FormField
          control={form.control}
          name="mailurl"
          render={({ field }) => (
            <FormItem className="w-[500px]">
           
              <FormControl>
                <Input className="bg-gray-800 outline-none border-none text-white" placeholder="Your Mail address" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       <FormField
          control={form.control}
          name="extraurl"
          render={({ field }) => (
            <FormItem className="w-[500px]">
             
              <FormControl>
                <Input className="bg-gray-800 outline-none border-none text-white" placeholder="Any Additinol link" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       </div >
       <div className="flex gap-4" >
            <div className="h-10 w-[500px] bg-gray-800 rounded-sm flex justify-center items-center">
              <input onChange={(e)=>{
                setavatar(e.target.files);
              }} className="bg-gray-800" type="file" />
              <label className="text-gray-500 font-medium text-sm">Upload your avatar</label>
            </div>
            <div className="h-10 w-[500px] bg-gray-800 rounded-sm flex justify-center items-center">
              <input onChange={(e)=>{
                setresume(e.target.files)
              }} className="bg-gray-800" type="file" />
              <label className="text-gray-500 font-medium text-sm ">Upload Custom Resume</label>
            </div>
       </div>
      
        <Button className="w-full bg-white text-black" type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  
   </>
  )
}

export default PortfolioForm
