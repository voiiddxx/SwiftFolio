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
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Sparkles } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { genreateCustomImageusingAI } from "@/lib/actions/openai.action"
  

const AiImageForm = () => {

    const [Imageurl, setImageurl] = useState<string>('/')
    const [AiMessage, setAiMessage] = useState<string>('');

    const handleImageGenreation = async ()=>{
        alert("func has been called");
        try {
            const res = await genreateCustomImageusingAI({promptMessage:AiMessage});
            setImageurl(res);
            console.log("this is res ",res);
            
        } catch (error) {
           console.log(error);
           throw new Error(error as string);
            
        }
    }
  return (
    <AlertDialog>
  <AlertDialogTrigger>Genreate Image With SWiftAI</AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Create Your Custom Poster Avatar With SwiftAI</AlertDialogTitle>
      <AlertDialogDescription>
        You can genreate your custom poster or any kind of image which you need for genreating your portfolio with the help of SwiftAI
        <div className="w-full h-60 border-[1px] border-zinc-500 mt-8 rounded-lg" >
          {
            Imageurl!='/' ?   <Image className="h-full w-full px-2 object-cover py-2 rounded-lg" src={Imageurl} height={800} width={800} alt="AIGenreatedImage" /> :   <Image className="h-full w-full px-2 object-cover py-2 rounded-lg" src="http://res.cloudinary.com/dwkmxsthr/image/upload/v1707495923/xszdeg0ywgnw3apa5vdx.svg" height={800} width={800} alt="AIGenreatedImage" />
          }
        </div>

        <Input onChange={(e)=>{
            setAiMessage(e.target.value);
        }} className="mt-4" placeholder="Describe Here " />
        <Button onClick={handleImageGenreation} className= "text-white bg-blue-500 w-full mt-4 hover:bg-zinc-800 hover:bg-opacity-30" >
            <Sparkles className="text-white" />
            Genreate With SwiftAI
        </Button>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel  className="w-full">Cancel</AlertDialogCancel>
     
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default AiImageForm
