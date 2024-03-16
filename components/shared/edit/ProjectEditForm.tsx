"use client";
import { z } from "zod";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, Edit, Github, Radio, Truck } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { updateProject } from "@/lib/actions/project.action";
import uploadDataonCloudinary from "../Cloudinary";

const formSchema = z.object({
    projectname: z.string().min(2).max(50).optional(),
    projectdetail: z.string().min(2).max(100).optional(),
    projectlink: z.string().url().optional(),
    projectstatus: z.enum(["Under Developement" , "Github Deployed" , "Live Deployed" , "Shipped"]).optional(),
});


    type projectEditProps = {
        projectId:string
    }
const ProjectEditForm = ({projectId}:projectEditProps) => {

    const [ProjectImage, setProjectImage] = useState<any>(null);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
        if(ProjectImage){
            const imageUrl = await uploadDataonCloudinary(ProjectImage);
            const res = await updateProject({projectId:projectId, project:{...values , projectthumbnail:imageUrl}});
            if(res){
                toast.success("Project Updated");
            }
            else{
                toast.error("Some problem occured");
            }
            }
            else{
                const res = await updateProject({projectId:projectId , project:{...values}});
                if(res){
                    toast.success("Project Updated");
                }
                else{
                    toast.error("Some probleme occured");
                }
            }
    console.log(values);
  }

  return (
    <div>
      <Drawer>
        <DrawerTrigger>
            <div className="flex items-center text-indigo-700 gap-2" >
                <p className="text-sm" >Edit Project</p>
            </div>
        </DrawerTrigger>
        <DrawerContent>
        <Toaster className='z-30 absolute' position='top-center' richColors duration={2000} />
          <DrawerHeader>
            <DrawerTitle>Edit Your Project Details</DrawerTitle>
            <DrawerDescription>
              Your can edit your project details whenever you want
            </DrawerDescription>
          </DrawerHeader>

          {/* form for the project editing setup */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mx-12">
              <div className="flex gap-5 ">
                <FormField
                  control={form.control}
                  name="projectname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Project Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Eneter your project name..."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is your public display project name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="projectstatus"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Project Status</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Project Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Under Developement">
                              <div className="flex items-center justify-between gap-2 text-green-500 w-full">
                                <AlertTriangle height={15} />
                                <p>Under developement</p>
                              </div>
                            </SelectItem>
                            <SelectItem value="Github Deployed">
                              <div className="flex items-center justify-between gap-2 text-red-500">
                                <Github height={15} />
                                <p>Github Deployed</p>
                              </div>
                            </SelectItem>
                            <SelectItem value="Live Deployed">
                              <div className="flex items-center justify-between gap-2 text-violet-700">
                                <Radio height={15} />
                                <p>Live Deployed</p>
                              </div>
                            </SelectItem>
                            <SelectItem value="Shipped">
                              <div className="flex items-center justify-between gap-2 text-orange-500">
                                <Truck height={15} />
                                <p>Project Shipped</p>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormDescription>
                        This is your Project status.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="w-full" >
                    <FormLabel >Project Image</FormLabel>
                    <Input onChange={(e)=>{
                        setProjectImage(e.target.files);
                    }} type="file"  className="w-full mt-2" />
                    <FormDescription className="mt-2" >
                        This is your public display name.
                      </FormDescription >
                </div>
              </div>


              <FormField
                  control={form.control}
                  name="projectdetail"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Project Detail</FormLabel>
                      <FormControl>
                    <Textarea placeholder="Edit your project detail here..." {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your project detail.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <Button className="w-full"  type="submit">Submit</Button>
            </form>
          </Form>

          <DrawerFooter>
            <DrawerClose>
              <Button className="w-full" variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default ProjectEditForm;
