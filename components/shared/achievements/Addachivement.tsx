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
import { addAchevementtoDatabase, updateAchivementSection } from '@/lib/actions/achivement.action'
import { Edit, Loader2 } from 'lucide-react'


const formSchema = z.object({
  acaption: z.string().min(2).max(50),
})

   type achementProps = {
    useridclerk: any
    achivementId?: any
    type: "ADD" | "EDIT"
   }

const Addachivement = ({useridclerk , achivementId , type} : achementProps) => {
  console.log("this is type and id is" , type , achivementId );
  

  const [AchivementImage, setAchivementImage] = useState<any>()


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      acaption: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) { 
  
    if(type=='ADD'){
      if(AchivementImage){
        const achivementimageUrl = await uploadDataonCloudinary(AchivementImage);
        const response = await addAchevementtoDatabase({achivement:{...values , aimage:achivementimageUrl , clerkId:useridclerk}});
        console.log(response);
        }   else{
      alert("Please select Image")
    
    }
 } else{
   const updateRes = await updateAchivementSection({achivement:{...values} ,  achivementId:achivementId});
 }
  
  }


  return (
    <Dialog>
    <DialogTrigger>
      {
        type=='EDIT' ? <Edit size={15} color='black'/> : <div>Add Your Achievements</div>
      }

    </DialogTrigger>
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
                  <Input placeholder="Achivement caption" {...field} />
                </FormControl>
                <FormDescription>
                  This is Your Achivement caption .
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
          <input  onChange={(e)=>{
            setAchivementImage(e.target.files);
          }} className="bg-zinc-300 p-4 rounded-3xl" type="file"/>
        </div>
        <Button disabled={form.formState.isSubmitting} className="w-full" type="submit">
          {form.formState.isSubmitting ? <div className="flex justify-center items-center gap-2" >
            <Loader2 className="text-white animate-spin" /> 
            <p>Please wait..</p>
          </div> : 'Add Achivement' }
        </Button>
        </form>
      </Form>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default Addachivement
