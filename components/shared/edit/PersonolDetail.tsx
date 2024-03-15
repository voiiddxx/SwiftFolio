"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { getPortfolioBasedonuserClerkId, updatePortFolio } from '@/lib/actions/portfolio.action'
import { Edit2, Mail, User } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useId, useRef, useState } from 'react'
import uploadDataonCloudinary from '../Cloudinary'
import { Toaster, toast } from 'sonner'
    


    type persenolDetailprops = {
        userId:string
    }
const PersonolDetail = ({userId} : persenolDetailprops) => {

    const hiddenInputRef = useRef<any>(null);
    const hiddenCasualRef = useRef<any>(null);
    const [avatar, setavatar] = useState<any>(null);
    const [casusalImage, setcasusalImage] = useState<any>(null);

    const [Data, setData] = useState<any>(null)
    

    useEffect(()=>{
        const getData = async()=>{
            const res = await getPortfolioBasedonuserClerkId(userId);
            setData(res[0]);
            console.log(res[0].name);   
        }
        getData();
    } , []);

    const handleAvatarClick = ()=>{
        hiddenInputRef.current.click();
    }

    const handleCasualRef = ()=>{
        hiddenCasualRef.current.click();
    }


    const handleCasualImageonchange = async (e:any)=>{
        const UploadableFile = e.target.files;
        const file = e.target.files[0];
        console.log(file);
        
        
        if(file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setcasusalImage(reader.result);
            }
            reader.readAsDataURL(file);
            if(UploadableFile){
                const Casualurl = await uploadDataonCloudinary(UploadableFile);
                const res = await updatePortFolio({clerkId:userId , updateData:{resume:Casualurl}});
                if(res){
                    toast.success("Image Updated");
                }
                else{
                    toast.error("Some error occured");
                }
            }
        }else{
            alert("Select Image");
        }
    }



    const handleAvatarOnchange = async (e:any)=>{
        const uploadableFile = e.target.files;
        const file = e.target.files[0];
        console.log(file);
        
        if(file){
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setavatar(reader.result);
            }
            reader.readAsDataURL(file);
            const AvatarUrl = await uploadDataonCloudinary(uploadableFile);
            const res = await updatePortFolio({clerkId:userId , updateData:{avatar:AvatarUrl}});
            if(res){
                toast.success("Avatar Updated");
            }else{
                toast.error("Some error occured");
            }
        }else{
            alert("Select Image");
        }
    }
    
  return (
 
      <div className='w-full min-h-screen' >
        
    <Toaster className='z-30 absolute' position='top-center' richColors duration={2000} />
                <div className='h-20 w-full border-b flex justify-center  px-12 flex-col' >
                <h1 className='text-lg font-semibold text-zinc-800' >Edit Your Personol Information</h1>
                <p className='text-sm font-normal text-zinc-600' >Please fill information below given</p>
                </div>

                {/* Your assets parts */}
                <div className='mx-12 mt-8 border-b pb-6' >
                    <h1 className='text-lg font-medium mb-2' >Your Assets</h1>

                    <div className='flex gap-4 flex-wrap' >
                    <div onClick={handleAvatarClick} className='h-28 w-28 border-[1px] border-zinc-600 p-1  rounded-full relative cursor-pointer' >
                        {
                            avatar != null ? <Image className='h-full w-full object-cover rounded-full' src={avatar} height={1500} width={1500} alt='avatar' /> : <Image className='h-full w-full object-cover rounded-full' src={Data.avatar} height={1500} width={1500} alt='avatar' />
                        }
                        <input onChange={handleAvatarOnchange} type="file" hidden ref={hiddenInputRef} />
                    </div>


                    {/* casual image componenet */}
                    <div onClick={handleCasualRef} className='h-28 w-28 p-1 border-[1px] border-zinc-700 rounded-full cursor-pointer' >
                    {
                            casusalImage     != null ? <Image className='h-full w-full object-cover rounded-full' src={casusalImage} height={1500} width={1500} alt='avatar' /> : <Image className='h-full w-full object-cover rounded-full' src={Data.resume} height={1500} width={1500} alt='avatar' />
                        }
                        <input onChange={handleCasualImageonchange} type='file' hidden ref={hiddenCasualRef} />
                    </div>
                    </div>
                </div>


                {/* YOUR PERSENOL INFORMATION */}

                <div className=' h-40  border-[1px] px-4 py-2 border-zinc-300 rounded-lg mt-6 mx-12' >
                    <h1 className='text-lg font-semibold text-zinc-700' >Personol Info</h1>
                    <div className='w-full flex justify-between' >
                        <div>
                            <h1 className='text-sm text-zinc-400 font-medium' >Full Name</h1>
                            <p className='font-medium text-sm text-zinc-900' >{Data.name}</p>
                        </div>
                        <div>
                        <h1 className='text-sm text-zinc-400 font-medium' >Email Address</h1>
                            <p className='font-medium text-sm text-zinc-900' >nikhildesign00@gmail.com</p>
                        </div>
                        <div>
                        <h1 className='text-sm text-zinc-400 font-medium' >Username</h1>
                            <p className='font-medium text-sm text-zinc-900' >void.tsx</p>
                        </div>
                        <div>
                        <h1 className='text-sm text-zinc-400 font-medium' >Mobile</h1>
                            <p className='font-medium text-sm text-zinc-900' >9878827854</p>
                        </div>

                    </div>


                </div>
               

            </div>
   
  )
}

export default PersonolDetail
