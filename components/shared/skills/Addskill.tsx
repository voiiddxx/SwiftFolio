"use client"
import React from 'react'
import { Toaster, toast } from 'sonner'
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
import { Plus } from 'lucide-react'


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
     const res = await addSkilltoDatabase({skill:{
         ...values,
     } , clerkId:userclerkId});

     if(res){
      toast.success("Skill Added");
      form.reset();
     }
     else{
      toast.error('Some error occured');
     }

    
    }

    
    
  return (
    <>
  
     <Dialog>
    <DialogTrigger>
    <div className='flex items-center'>
        <Plus size={20} color='white' />
        <p className='hidden md:block text-sm text-white font-medium' >Add Skills</p>
      </div>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Fill Required Information</DialogTitle>
        <Toaster className='z-30 absolute' position='top-center' richColors  duration={2000}  />
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="userSkill"
            render={({ field }) => (
              <FormItem className="mt-6" >
             
                <FormControl>
                  <Input placeholder="Your Skill.." {...field} />
                </FormControl>
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
