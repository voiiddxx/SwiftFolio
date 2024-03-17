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
import { Input } from '@/components/ui/input'
import { addSchooling } from '@/lib/actions/school.action'
import { addCollege } from '@/lib/actions/education.action'
import { Textarea } from '@/components/ui/textarea'
import AiForm from '../AiForm'
import { Toaster, toast } from 'sonner'
import { Plus } from 'lucide-react'

const formSchema = z.object({
    degree: z.string().min(2).max(50),
    batchStartDate:z.string().min(2).max(50),
    batchEndDate:z.string().min(2).max(50),
    instituteName:z.string().min(2).max(50),
    extraDetail:z.string().min(2).max(500),
  })


  
  type CollegeProps = {
    userId: any
    type: "ADD" | "EDIT"
  }


const College = ({userId , type}: CollegeProps) => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          degree: "",
          instituteName:"",
         batchStartDate:"",
          batchEndDate:"",
          extraDetail:"",
          
        },
      })


           
    async function onSubmit(values: z.infer<typeof formSchema>) { 

        const response = await addCollege({college:{...values} , clerkId:userId});
        if(response){
          toast.success("College added");
        }
        else{
          toast.error("Some error occured");
        }
        
        // const response = await addSchooling({school:{...values} , clerkId:userId});
    //    console.log(response);
       
       }

       


  return (
    <Dialog>
    <DialogTrigger>
    <div className='flex items-center'>
        <Plus size={20} color='white' />
        <p className='hidden md:block text-sm text-white font-medium' >Add college</p>
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
      <Toaster position='top-center' duration={2000} richColors />
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="instituteName"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your Insitute Name" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />          
          <FormField
            control={form.control}
            name="degree"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your Higher Degree" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />          
          <FormField
            control={form.control}
            name="batchStartDate"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Batch Starting year" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />          
          <FormField
            control={form.control}
            name="batchEndDate"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Batch Ending Year" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />          
          <FormField
            control={form.control}
            name="extraDetail"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                <div className="relative" >
               <Textarea placeholder="Describe Your college expernience" {...field} />
               <div className="flex px-2 py-2 rounded-md bg-opacity-30 justify-center items-center bg-zinc-800 absolute top-2 right-2" >
                <AiForm/>
               </div> 
               </div>
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />          
            <Button disabled={form.formState.isSubmitting} className="w-full" type="submit"> {
            form.formState.isSubmitting ? ('submitting..') : 'Submit'
          } </Button>
        </form>
      </Form>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default College
