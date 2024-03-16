"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { delteAchivement } from "@/lib/actions/achivement.action"
import { deleteCompleteCustomasperclerkid, deleteCustomSection } from "@/lib/actions/custom.action"
import { DeleteProject } from "@/lib/actions/project.action"
import { Trash } from "lucide-react"
import { Toaster, toast } from "sonner"
  


    type deleteSectionProps = {
        deleteId: string,
        additionsId?: any
        type: "PROJECT" | "ACHIVEMENT" | "CUSTOM" | "COMPLETE SINGLE CUSTOM"
    }

const DeleteSection = ( {deleteId , type , additionsId} : deleteSectionProps) => {


    const handleSubmition =  async() => {
        try {
            if(type=="PROJECT"){
              const res =   await DeleteProject(deleteId);
              console.log(res);
              
            }
            else if(type =="ACHIVEMENT"){
              alert("this is called");
              await delteAchivement(deleteId);
            }
            else if(type == "CUSTOM"){
              console.log("this is delte section component" , deleteId);
              
              await deleteCustomSection(deleteId , additionsId);
              
            }
            else if (type == "COMPLETE SINGLE CUSTOM"){
            const data = await deleteCompleteCustomasperclerkid(deleteId);
            if(data){
              toast.success("Deleted");
            }
            console.log(data.message);
            
            }
        } catch (error) {
            throw new Error(error as string);
        }
    }

  return (
    <div>
      <AlertDialog>
        
  {
    type!=="PROJECT" ? <AlertDialogTrigger>
      <div className="flex gap-2 items-center" >
      <Trash size={15} color="red"/> 
      <p className='text-red-500 text-sm font-medium' >Delete</p>
      </div>
    </AlertDialogTrigger> : <AlertDialogTrigger className="text-sm text-red-400">Delete</AlertDialogTrigger>
  }
  <AlertDialogContent>
    <AlertDialogHeader>
    <Toaster position='top-right' richColors duration={2000} />
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your Project
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <form onSubmit={handleSubmition} >
        <Button className="bg-red-500 text-white hover:bg-zinc-800" type="submit">Delete</Button>
      </form>
    
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

    </div>
  )
}

export default DeleteSection
