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
import { AddWorkExperince } from '@/lib/actions/work.action'


    type WorkFormProps = {
        userId: any,
        type : "ADD" | "EDIT"
    }


    const formSchema = z.object({
        companyName: z.string().min(2).max(50),
        role:z.string().min(2).max(50),
        contribution:z.string().min(2).max(50),
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

        
       }

  return (
    <Dialog>
    <DialogTrigger>Add Work Experiencee</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Organization Name" {...field} />
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
            name="role"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your Role in organization" {...field} />
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
            name="contribution"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your contribution to that organization" {...field} />
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
            name="startDate"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Starting Year " {...field} />
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
            name="endDate"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Ending Year or Present" {...field} />
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

export default WorkForm
