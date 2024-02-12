"use client"
import React, { useState } from 'react'

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
import { addCustomFieldtoDatabase } from '@/lib/actions/custom.action'
import uploadDataonCloudinary from '../Cloudinary'
import { Edit } from 'lucide-react'




const formSchema = z.object({
    customTitle: z.string().min(2).max(50),
    customLink: z.string().url(),
  })
  

  type CustomFieldProps = {
    useridclerk: string | any
    customId : string | any
    heading? : string
    type: "ADD" | "EDIT"
  }

const CustomFieldform = ({useridclerk , customId , heading , type} : CustomFieldProps) => {

   const [customImage, setcustomImage] = useState<any>();
   
    

    
    

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          customTitle: "",
          customLink:""
        },
      })
    
      async function onSubmit(values: z.infer<typeof formSchema>) { 
        const customImageUrl = await uploadDataonCloudinary(customImage);
       alert("this is working");
       addCustomFieldtoDatabase({custom:{...values , customImage:customImageUrl , customId:customId}})
      
      
      }
  return (
    <div>
        <Dialog>
    {
      type=='ADD' ? <DialogTrigger>Add {heading}</DialogTrigger> : <DialogTrigger>
        <Edit color='black' size={18}/>
      </DialogTrigger> 
    }
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="customTitle"
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
          <FormField
            control={form.control}
            name="customLink"
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
            setcustomImage(e.target.files);
          }} className="bg-zinc-900 p-4 rounded-3xl" type="file"/>
        </div>
          <Button className="w-full" type="submit">Submit</Button>
        </form>
      </Form>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
      
    </div>
  )
}

export default CustomFieldform
