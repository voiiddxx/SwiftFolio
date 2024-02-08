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
import { addSkilltoDatabase } from '@/lib/actions/skill.action'


const formSchema = z.object({
    userSkill: z.string().min(2).max(50),
  })

  
  type SkillProps = {
    userclerkId : string | any
  }

const Addskill = ({userclerkId} : SkillProps) => {


    // const [AchivementImage, setAchivementImage] = useState<any>()


    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        userSkill: "",
      },
    })
  
    async function onSubmit(values: z.infer<typeof formSchema>) { 
  
     alert("this is working");
     const res = await addSkilltoDatabase({skill:{
         ...values,
     } , clerkId:userclerkId});

    
    }

    
    
  return (
    <>
     <Dialog>
    <DialogTrigger>Add Skills</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Fill Required Information</DialogTitle>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="userSkill"
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
          <Button className="w-full" type="submit">Submit</Button>
        </form>
      </Form>
      </DialogHeader>
    </DialogContent>
  </Dialog>
    </>
  )
}

export default Addskill