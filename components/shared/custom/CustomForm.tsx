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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createCustomSection } from '@/lib/actions/custom.action'
import { Loader2 } from 'lucide-react'



const formSchema = z.object({
    heading: z.string().min(2).max(50),
  })


type customFormProps = {
    useridclerk: string | any
}
const CustomForm = ({useridclerk} : customFormProps) => {

    

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          heading: "",
        },
      })
    
      async function onSubmit(values: z.infer<typeof formSchema>) { 
       alert("this is working");
       createCustomSection({customSection:{...values} , clerkId:useridclerk});
      
      }
  
  return (
    <div>
      <Dialog>
    <DialogTrigger>Add Custom Section</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="heading"
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
