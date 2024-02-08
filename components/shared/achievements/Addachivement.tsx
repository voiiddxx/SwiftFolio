"use client"
import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
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
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import uploadDataonCloudinary from "../Cloudinary"
import { useState } from "react"
import { addAchevementtoDatabase } from '@/lib/actions/achivement.action'


const formSchema = z.object({
  acaption: z.string().min(2).max(50),
})

   type achementProps = {
    useridclerk: any
   }

const Addachivement = ({useridclerk} : achementProps) => {

  const [AchivementImage, setAchivementImage] = useState<any>()


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      acaption: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) { 
  
    if(AchivementImage){
          const achivementimageUrl = await uploadDataonCloudinary(AchivementImage);
          const response = await addAchevementtoDatabase({achivement:{...values , aimage:achivementimageUrl , clerkId:useridclerk}});
          console.log(response);
          

    } else{
      alert("Please select Image")
      
    }
  
  }


  return (
    <Dialog>
    <DialogTrigger>Add Your Achievements</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="acaption"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your project Name" {...field} />
                </FormControl>
                <FormDescription>
                  This is Your Project Name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
          <input onChange={(e)=>{
            setAchivementImage(e.target.files);
          }} className="bg-zinc-900 p-4 rounded-3xl" type="file"/>
        </div>
          <Button className="w-full" type="submit">Submit</Button>
        </form>
      </Form>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default Addachivement
