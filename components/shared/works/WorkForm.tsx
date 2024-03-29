"use client"
import React from 'react'
import { Toaster, toast } from 'sonner'
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
import { AddWorkExperince } from '@/lib/actions/work.action'
import { Textarea } from '@/components/ui/textarea'
import AiForm from '../AiForm'
import { Loader2, Plus } from 'lucide-react'

    type WorkFormProps = {
        userId: any,
        type : "ADD" | "EDIT"
    }


    const formSchema = z.object({
        companyName: z.string().min(2).max(50),
        role:z.string().min(2).max(50),
        contribution:z.string().min(2).max(500),
        startDate:z.string().min(2).max(50),
        endDate:z.string().min(2).max(50),
      });



const WorkForm = ({userId , type} : WorkFormProps) => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          companyName: "",
          role:"",
          contribution:"",
         startDate:"",
          endDate:"",
        },
      })


           
    async function onSubmit(values: z.infer<typeof formSchema>) { 
       const response = await AddWorkExperince({work:{...values} , clerkId:userId });
       if(response){
        toast.success("Work Added");
       }
       else{
        toast.error("Some error occured");
       }

        
       }

  return (
    <Dialog>
    <DialogTrigger>
    <div className='flex items-center'>
        <Plus size={20} color='white' />
        <p className='hidden md:block text-sm text-white font-medium' >Add Work Experince</p>
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
      <Toaster className='z-30 absolute' position='top-center' richColors duration={2000} />
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Organization Name" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />          
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your Role in organization" {...field} />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />          
          <FormField
            control={form.control}
            name="contribution"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                <div className="relative" >
               <Textarea placeholder="Explain Your contribution to organizaton...." {...field} />
               <div className="flex px-2 py-2 rounded-md bg-opacity-30 justify-center items-center bg-zinc-800 absolute top-2 right-2" >
                <AiForm/>
               </div> 
               </div>
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />          
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Starting Year " {...field} />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />          
          <FormField
            control={form.control}
            name="endDate"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Ending Year or Present" {...field} />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />                  
          <Button disabled={form.formState.isSubmitting} className="w-full" type="submit">
          {form.formState.isSubmitting ? <div className="flex justify-center items-center gap-2" >
            <Loader2 className="text-white animate-spin" /> 
            <p>Please wait..</p>
          </div> : 'Submit Work' }
        </Button>
        </form>
      </Form>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default WorkForm
