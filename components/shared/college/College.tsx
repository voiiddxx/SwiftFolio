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


const formSchema = z.object({
    degree: z.string().min(2).max(50),
    batchStartDate:z.string().min(2).max(50),
    batchEndDate:z.string().min(2).max(50),
    instituteName:z.string().min(2).max(50),
    extraDetail:z.string().min(2).max(50),
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

        const response = await addCollege({college:{...values} , clerkId:userId})
        console.log(response);
        
        // const response = await addSchooling({school:{...values} , clerkId:userId});
    //    console.log(response);
       
       }

       


  return (
    <Dialog>
    <DialogTrigger>Add Your College Degree</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="instituteName"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your Insitute Name" {...field} />
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
            name="degree"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your Higher Degree" {...field} />
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
            name="batchStartDate"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Batch Starting year" {...field} />
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
            name="batchEndDate"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Batch Ending Year" {...field} />
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
            name="extraDetail"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Additiniols Details" {...field} />
                </FormControl>
                <FormDescription>
                  This is Your Project Name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />          
          <Button className="w-full" type="submit">Submit</Button>
        </form>
      </Form>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}

export default College