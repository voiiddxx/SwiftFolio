"use client"
import React, { useState } from 'react'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { updatePortFolio } from '@/lib/actions/portfolio.action'
import { Toaster, toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'



const formSchema = z.object({
  name: z.string().min(2).max(200).optional(),
  email: z.string().min(2).max(200).optional(),
  github: z.string().min(2).max(200).optional(),
  linkedin: z.string().min(2).max(200).optional(),
  external: z.string().min(2).max(200).optional(),
  heading: z.string().min(2).max(500).optional(),
  about: z.string().min(2).max(700).optional(),
})



  type persenolFormProps = {
    type:"Persenol" | "About" | "Heading"
    userId:string
  }

const PersenolForm = ({type , userId} : persenolFormProps) => {


      // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    },
  })



   async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        const res = await updatePortFolio({clerkId:userId , updateData:{...values}});
        if(res){
            toast.success("Updated Successfully");
        }
        else{
            toast.error("Some error occured");
        }
      }

    
    
  return (
    <div>
      <Drawer>
  <DrawerTrigger>
  <p className='text-sm font-medium' >Edit</p>
  </DrawerTrigger>
  <DrawerContent>
    
  <Toaster className='z-30 absolute' position='top-center' richColors duration={2000} />
    <DrawerHeader className='mx-10' >
      <DrawerTitle>
        {
            type=='Persenol' && (
                'Persenol Info'
            )
        }
        {
            type=='About' && (
                'About'
            )
        }
        {
            type=='Heading' && (
                'Heading'
            )
        }
      </DrawerTitle>
      <DrawerDescription>You can update your details here</DrawerDescription>
    </DrawerHeader>
    <div className='mx-12' >
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {
            type == 'Persenol' && (
                <div>
                    <div className='flex gap-4 w-full' >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className='w-full' >
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="JohnDev" {...field} />
              </FormControl> 
              <FormDescription className='hidden md:block' >
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className='w-full' >
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="johndev@gmail.com" {...field} />
              </FormControl>
              <FormDescription className='hidden md:block' >
                This is your public display email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>
        <div className='flex gap-4 w-full' >
        <FormField
          control={form.control}
          name="github"
          render={({ field }) => (
            <FormItem className='w-full' >
              <FormLabel>Github</FormLabel>
              <FormControl>
                <Input placeholder="githu.com/voiiddxx" {...field} />
              </FormControl>
              <FormDescription className='hidden md:block' >
                This is your github url link.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="linkedin"
          render={({ field }) => (
            <FormItem className='w-full' >
              <FormLabel>Linkedin</FormLabel>
              <FormControl>
                <Input placeholder="linkedin.com/voiiddxx" {...field} />
              </FormControl>
              <FormDescription className='hidden md:block' >
              This is your linkedin url link.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className='flex gap-4 w-full' >
       
        <FormField
          control={form.control}
          name="external"
          render={({ field }) => (
            <FormItem className='w-full' >
              <FormLabel>Extra Links</FormLabel>
              <FormControl>
                <Input placeholder="blog.com/voiiddxx" {...field} />
              </FormControl>
              <FormDescription className='hidden md:block' >
              This is your additionol url link.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
                </div>
            )
        }

        {
            type == 'Heading' && (
                <div>
                 <FormField
          control={form.control}
          name="heading"
          render={({ field }) => (
            <FormItem className='w-full' >
              <FormLabel>Heading</FormLabel>
              <FormControl>
                <Textarea placeholder='Full Stack Developer...' {...field} />
              </FormControl>
              <FormDescription className='hidden md:block' >
              This is your public headline for portfolio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />    
                </div>
            )
        }
        {
            type == 'About' && (
                <div>
                 <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem className='w-full' >
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea placeholder='Computer Science passionate student , currently in thrid year of engineering...' {...field} />
              </FormControl>
              <FormDescription className='hidden md:block' >
              This is your public about for portfolio.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />    
                </div>
            )
        }
        <Button disabled={form.formState.isSubmitting} className="w-full" type="submit">
          {form.formState.isSubmitting ? <div className="flex justify-center items-center gap-2" >
            <Loader2 className="text-white animate-spin" /> 
            <p>Please wait..</p>
          </div> : 'Submit ' }
        </Button>
      </form>
    </Form>
    </div>

    <DrawerFooter>
      <DrawerClose>
        <Button className='w-full'  variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    </div>
  )
}

export default PersenolForm




