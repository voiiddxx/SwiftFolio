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
import { AlertTriangle, ArrowUp, Github, Radio, Sparkles, Truck } from "lucide-react"
import uploadDataonCloudinary from "../Cloudinary"
import { addProjecttoDatabase, updateProject } from "@/lib/actions/project.action"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import AiForm from "../AiForm"
import AiImageForm from "../AiImageForm"


const formSchema = z.object({
  projectname: z.string().min(2).max(50),
  projectdetail: z.string().min(2).max(100),
  projectlink: z.string().url(),
  projectstatus: z.enum(["Under Developement" , "Github Deployed" , "Live Deployed" , "Shipped"]),
  
})



type addProjectProps = {
  useridclerk: any
  projectId?: any
  type:"ADD" | "EDIT"
}
  

const Addproject = ({useridclerk , type , projectId}:addProjectProps) => {

  const [projectThumbname, setprojectThumbname] = useState<any>();
  

  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectname: "",
      projectdetail: "",
      projectlink: "",
      projectstatus:"Github Deployed"
    },
  })


  async function onSubmit(values: z.infer<typeof formSchema>) { 

    if(type=="ADD"){
      
    const projectImageUrl = await uploadDataonCloudinary(projectThumbname);
    const response = await addProjecttoDatabase({project:{
   ...values, projectthumbnail: projectImageUrl,
   clerkId: useridclerk 
 } });
  console.log(response);
    }


    if(type=="EDIT"){
      const editResponse = await updateProject({project:{...values} , projectId:projectId});
      console.log(editResponse); 
    }
  }
  return (
    <Dialog>
  <DialogTrigger> {
    type=="EDIT" ? <p className="text-blue-700 text-sm" >Edit project</p> : <div>Add Project</div> 
    } </DialogTrigger>
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
               <div className="relative" >
               <Textarea placeholder="Explain your project..." {...field} />
               <div className="flex px-2 py-2 rounded-md bg-opacity-30 justify-center items-center bg-zinc-800 absolute top-2 right-2" >
                <AiForm/>
               </div> 
               </div>
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
        <div className="relative flex">
          <input onChange={(e)=>{
            setprojectThumbname(e.target.files);
          }} className="bg-zinc-900 p-3 rounded-3xl" type="file"/>
          <div className="bg-zinc-800 bg-opacity-30 rounded-md absolute px-2 py-2 top-2 right-4 flex justify-center items-center">
            <AiImageForm/>
          </div>
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
          <SelectItem value="Github Deployed">
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
