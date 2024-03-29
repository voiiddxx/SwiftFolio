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
import { addSchooling} from '@/lib/actions/school.action'
import { Textarea } from '@/components/ui/textarea'
import AiForm from '../AiForm'
import { Plus } from 'lucide-react'


const formSchema = z.object({
    schoolClass: z.string().min(2).max(50).optional(),
    schoolName:z.string().min(2).max(50).optional(),
    finalYear:z.string().min(2).max(50).optional(),
    extraDetail:z.string().min(2).max(500).optional(),
  })


    type SchoolingFormProps = {
      userId: any
      type: "ADD" | "EDIT"
      schoolId?:any
      updatedId?:any
    }
  

const Schooling = ({userId , type , schoolId , updatedId} : SchoolingFormProps) => {

  
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          schoolClass: "",
          schoolName:"",
          finalYear:"",
          extraDetail:"",
          
        },
      })


        
    async function onSubmit(values: z.infer<typeof formSchema>) { 

      if(type=='ADD'){
        const response = await addSchooling({school:{...values} , clerkId:userId});
        console.log(response);
        if(response){
         toast.success("Schooling added");
        }
        else{
         toast.error("Some error occured");
        }
      }
      else{
        // const response = await updateSchoolData({schoolId:schoolId , updateId:updatedId , school:{...values}});

      }
       
       }

       
  return (
    <Dialog>
    <DialogTrigger>
      <div className='flex items-center'>
        <Plus size={20} color='white' />
        <p className='hidden md:block text-sm text-white font-medium' >Add Schooling</p>
      </div>
    </DialogTrigger>
    <DialogContent className='' >
      <DialogHeader>
      <Toaster position='top-center' richColors />
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="schoolName"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your School Name" {...field} />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />          
          <FormField
            control={form.control}
            name="schoolClass"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your Higher Class" {...field} />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />          
          <FormField
            control={form.control}
            name="finalYear"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Higher Class Passing year" {...field} />
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
               <Textarea placeholder="Additinols details" {...field} />
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

export default Schooling
