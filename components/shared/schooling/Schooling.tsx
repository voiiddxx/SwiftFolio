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


const formSchema = z.object({
    schoolClass: z.string().min(2).max(50),
    schoolName:z.string().min(2).max(50),
    finalYear:z.string().min(2).max(50),
    extraDetail:z.string().min(2).max(50),
  })


    type SchoolingFormProps = {
      userId: any
      type: "ADD" | "EDIT"
    }
  

const Schooling = ({userId , type} : SchoolingFormProps) => {

  
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
        const response = await addSchooling({school:{...values} , clerkId:userId});
       console.log(response);
       
       }

       
  return (
    <Dialog>
    <DialogTrigger>Add Your Schooling</DialogTrigger>
    <DialogContent>
      <DialogHeader>
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
                <FormDescription>
                  This is Your Project Name.
                </FormDescription>
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
                <FormDescription>
                  This is Your Project Name.
                </FormDescription>
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

export default Schooling