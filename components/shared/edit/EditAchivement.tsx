"use client"

import React, { useRef, useState } from 'react'
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
import { Button } from '@/components/ui/button'
import { FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import uploadDataonCloudinary from '../Cloudinary'
import { updateAchivementSection } from '@/lib/actions/achivement.action'
import { Toaster, toast } from 'sonner'
  
  type editAschivementProps = {
    userId:string,
    achivementId:string
  }
export const EditAchivement = ({achivementId , userId}:editAschivementProps) => {
    const [AchImage, setAchImage] = useState<any>(null);
    const [UploadImage, setUploadImage] = useState<any>(null);

    const HiddernAchivementRef = useRef<any>(null);
    const [Titlr, setTitlr] = useState<any>(null);

    const handleImageOnchange = (e:any)=>{
        const file = e.target.files[0];
        setUploadImage(e.target.files);

        if(file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setAchImage(reader.result);
            }
            reader.readAsDataURL(file);
        }

    }


    const updationofAch = async ()=>{
        if(AchImage && Titlr){
            const ImageUrl = await uploadDataonCloudinary(UploadImage);
            if(ImageUrl){
             const res = await updateAchivementSection({achivementId:achivementId , achivement:{aimage:ImageUrl , acaption:Titlr}});   
             if(res){
                console.log("Data updated");
                toast.success("Data updated");
             }else{
                console.log("Some error");
                toast.error("Some issues occured");
                
             }
            }
            else{
                console.log("Some issue arrised");
                
            }
        }
        else if(AchImage && Titlr==null){
            const imageUrl = await uploadDataonCloudinary(UploadImage);
            const res = await updateAchivementSection({achivementId:achivementId , achivement:{aimage:imageUrl}})
            if(res){
                console.log("Data Updated");
                toast.success("Data Updated");
            }else{
                console.log("Some issue arrised");
                toast.error("Some error occured");
                
            }
        }else{
            const res = await updateAchivementSection({achivementId:achivementId , achivement:{acaption:Titlr}});
            if(res){
                console.log("Updated");
                toast.success("Data updated");
            }else{
                console.log("Some issue arrised");
                toast.error("Some issue occured");
                
            }
        } 
    }



  return (
    <div>
        <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent className='px-12' >
    <DrawerHeader>
    <Toaster className='z-30 absolute' position='top-center' richColors duration={2000} />
      <DrawerTitle>Edit Achivemenmts</DrawerTitle>
      <DrawerDescription>You Can edit your achivements whenever you want.</DrawerDescription>
    </DrawerHeader>
            <div className='px-4' >
                <div>
                    
        {/* <FormLabel>Achivement Title</FormLabel> */}
        <Input onChange={(e)=>{
            setTitlr(e.target.value);
        }} placeholder='Your achivement title...' />
        <p className='text-sm font-medium text-zinc-500' >This will display as your achivement title</p>
        <div>
            <input onChange={handleImageOnchange} type="file" hidden ref={HiddernAchivementRef} />

            <p onClick={()=>{
                HiddernAchivementRef.current.click();
            }} className='text-indigo-700 underline mt-8 font-semibold cursor-pointer' >Select Image</p>

            {
                AchImage && (
                    <div>
                        <Image className='h-[100px] w-[100px] rounded-lg object-cover mt-8 border-[1px] border-zinc-300' src={AchImage} height={600} width={600} alt='updatinimage' />
                    </div>
                )
            }

        </div>
                </div>

            </div>
    <DrawerFooter>
      <Button onClick={updationofAch} className='w-full' >Submit</Button>
      <DrawerClose>
        <Button className='w-full' variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    </div>
  )
}
