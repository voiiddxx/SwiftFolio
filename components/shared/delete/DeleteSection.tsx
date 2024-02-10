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
import { DeleteProject } from "@/lib/actions/project.action"
import { Trash } from "lucide-react"
  


    type deleteSectionProps = {
        deleteId: string,
        type: "PROJECT" | "ACHIVEMENT"
    }

const DeleteSection = ( {deleteId , type} : deleteSectionProps) => {


    const handleSubmition =  async() => {
        try {
            if(type=="PROJECT"){
                await DeleteProject(deleteId);
            }
            else if(type =="ACHIVEMENT"){
              alert("this is called");
              await delteAchivement(deleteId);
            }
        } catch (error) {
            throw new Error(error as string);
        }
    }

  return (
    <div>
      <AlertDialog>
        
  {
    type=="ACHIVEMENT" ? <AlertDialogTrigger>
      <Trash size={15} color="red"/> 
    </AlertDialogTrigger> : <AlertDialogTrigger className="text-sm text-red-400">Delete</AlertDialogTrigger>
  }
  <AlertDialogContent>
    <AlertDialogHeader>
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
