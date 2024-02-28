"use client"

import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { createAboutusingAi } from '@/lib/actions/openai.action'
import { Sparkle, Sparkles } from 'lucide-react'
  
const AiForm = () => {

    const [prompt, setprompt] = useState<any>('');

    const [GenreatedRes, setGenreatedRes] = useState<any>('');


    const handleGenreation = async ()=>{
        try {
            alert("func have been called");
            const res = await createAboutusingAi({promptMessage:prompt});
            console.log("this is res whiich in showing in frontend" , res);
            setGenreatedRes(res);
            
        } catch (error) {
            console.log(error);
            throw new Error(error as string);
            
        }
    }


  return (
    <AlertDialog>
    <AlertDialogTrigger>Customize Text With AI</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Now Customize your captions with AI</AlertDialogTitle>
        <AlertDialogDescription>
        please tell what you want to customize and give some keywords about it

        <Input onChange={(e)=>{
            setprompt(e.target.value);
        }} className='mt-3 mb-3'  placeholder='Suggest here...' />
        <Button onClick={handleGenreation} className='bg-blue-500 text-white w-full hover:bg-zinc-800 hover:bg-opacity-20' > <Sparkles  size={16}/>  Genreate</Button>
        {
          GenreatedRes != '' && (
            <div className='w-full min-h-11 bg-zinc-800 bg-opacity-20 rounded-md mt-4 px-4 py-4 text-zinc-200  '>
              <p className='leading-7 tracking-normal' >{GenreatedRes}</p>
            </div>
          )
        }
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter className='flex flex-col' >
        
        <AlertDialogCancel className='w-full' >Cancel</AlertDialogCancel>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  
  )
}

export default AiForm
