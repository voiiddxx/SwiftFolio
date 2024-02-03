"use client"
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
import { AlertTriangle, ArrowUp, Github, Radio, Truck } from "lucide-react"


const formSchema = z.object({
  projectname: z.string().min(2).max(50),
  projectdetail: z.string().min(2).max(50),
  projectlink: z.string().url(),
  projectstatus: z.enum(["Under Developement" , "Github Deployed" , "Live Deployed" , "Shipped"]),
  
})

  

const Addproject = () => {


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectname: "",
      projectdetail: "",
      projectlink: "",
      projectstatus:"Github Deployed"
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Dialog>
  <DialogTrigger>Add project</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Fill Required Information</DialogTitle>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="projectname"
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
        <FormField
          control={form.control}
          name="projectdetail"
          render={({ field }) => (
            <FormItem >
              <FormControl>
                <Input placeholder="Project Details" {...field} />
              </FormControl>
              <FormDescription>
                Detail should be less than 30 words.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="projectlink"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Project Link" {...field} />
              </FormControl>
              <FormDescription>
                Please attached link of your project for better access
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <div>
          <input className="bg-zinc-900 p-4 rounded-3xl" type="file"/>
        </div>
        <FormField
          control={form.control}
          name="projectstatus"
          render={({ field }) => (
            <FormItem>
              <FormControl>
              <Select onValueChange={field.onChange} >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Project Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Under Developement">
          <div className="flex items-center justify-between gap-2 text-green-300 w-full" >
            <AlertTriangle height={15}/>
            <p>Under developement</p>
          </div>
          </SelectItem>
          <SelectItem value="Github Deployedk">
          <div className="flex items-center justify-between gap-2 text-red-300" >
            <Github height={15}/>
            <p>Github Deployed</p>
          </div>
          </SelectItem>
          <SelectItem value="Live Deployed">
          <div className="flex items-center justify-between gap-2 text-white" >
            <Radio height={15}/>
            <p>Live Deployed</p>
          </div>
          </SelectItem>
          <SelectItem value="Shipped">
          <div className="flex items-center justify-between gap-2 text-orange-300" >
            <Truck height={15}/>
            <p>Shipped</p>
          </div>
          </SelectItem>
        </SelectContent>
      </Select>
              </FormControl>
              <FormDescription>
                Please attached link of your project for better access
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

export default Addproject
