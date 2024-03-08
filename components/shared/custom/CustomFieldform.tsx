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
import { Edit, Loader2 } from 'lucide-react'
import { Toaster, toast } from 'sonner'



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
      const data = await addCustomFieldtoDatabase({custom:{...values , customImage:customImageUrl , customId:customId}})
      if(data){
        toast.success("Added");
      }else{
        toast.error("Some error");
      }

      
      
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
      <Toaster className='z-30 absolute' position='top-center' richColors duration={2000} />
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="customTitle"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                
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
                  <Input placeholder="Any Link" {...field} />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
          <input onChange={(e)=>{
            setcustomImage(e.target.files);
          }} className="bg-zinc-300 p-4 rounded-3xl" type="file"/>
        </div>
        <Button disabled={form.formState.isSubmitting} className="w-full" type="submit">
          {form.formState.isSubmitting ? <div className="flex justify-center items-center gap-2" >
            <Loader2 className="text-white animate-spin" /> 
            <p>Please wait..</p>
          </div> : 'Submit Now' }
        </Button>
        </form>
      </Form>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  
      
    </div>
  )
}

export default CustomFieldform
