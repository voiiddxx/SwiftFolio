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
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { UpdateCustomSectionHeadingAsperclerkId, createCustomSection } from '@/lib/actions/custom.action'
import { Edit, Loader2 } from 'lucide-react'
import { Toaster, toast } from 'sonner'


const formSchema = z.object({
    heading: z.string().min(2).max(50),
  })


type customFormProps = {
    useridclerk: string | any
    type:"ADD" | "EDIT"
    customId?:any
}
const CustomForm = ({useridclerk , type , customId} : customFormProps) => {

    

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          heading: "",
        },
      })
    
      async function onSubmit(values: z.infer<typeof formSchema>) { 
    
          if(type == "ADD"){
            const data = await  createCustomSection({customSection:{...values} , clerkId:useridclerk});
            if(data){
             toast.success("Added");
            }else{
             toast.error("Some error");
            }
          }
          else{
            // console.log("we got your every data" , values.heading , customId , useridclerk);
            const data = await UpdateCustomSectionHeadingAsperclerkId({data:{customid:customId , clerkId:useridclerk , heading:values.heading}});

            if(data){
              toast.success("Updated" + values.heading);
              console.log(data);
              
            }else{
              toast.error("Some error occured");
            }
          }
      
      }
  
  return (
    <div>
      <Dialog>
    <DialogTrigger>
      {
        type=='ADD'? 'Add Custom Section' : <Edit/>
      }
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
      <Toaster position='top-right' richColors duration={2000} />
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="heading"
            render={({ field }) => (
              <FormItem className="mt-6" >
                <FormControl>
                  <Input placeholder="Heading..." {...field} />
                </FormControl>
                <FormDescription>
                  This Will be Heading of your custom section.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />          
         <Button disabled={form.formState.isSubmitting} className="w-full" type="submit">
          {form.formState.isSubmitting ? <div className="flex justify-center items-center gap-2" >
            <Loader2 className="text-white animate-spin" /> 
            <p>Please wait..</p>
          </div> : 'Add Custom' }
        </Button>
        </form>
      </Form>
      </DialogHeader>
    </DialogContent>
  </Dialog>
    </div>
  )
}

export default CustomForm
