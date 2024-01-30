"use client"
 
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
import { createPortfolio } from "@/lib/actions/portfolio.action"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  heading: z.string().min(2).max(50),
})



const PortfolioForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          heading:""
        },
      })

     async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        const res = await createPortfolio({portfolio:{...values}});
        console.log(res);
        
      }
  return (
   <>
    <div className='min-h-screen w-full bg-gray-950 flex flex-col items-center'>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       <div className="flex gap-4" >
       <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-96 ">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className="bg-gray-800 outline-none border-none text-white" placeholder="Your complete name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       <FormField
          control={form.control}
          name="heading"
          render={({ field }) => (
            <FormItem className="w-96">
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input className="bg-gray-800 outline-none border-none" placeholder="Write a headline for portfolio" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       </div >
        <Button className="w-full bg-white text-black" type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  
   </>
  )
}

export default PortfolioForm
