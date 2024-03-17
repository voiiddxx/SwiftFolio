"use client"
import { Button } from '@/components/ui/button'
import { deleteSkillasPerid, getSkillUsingclerkId } from '@/lib/actions/skill.action'
import { Plus, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'
import Addskill from '../skills/Addskill'


type SkillDetailPropss = {
    data:any
}
const SkillDetail = ({data} : SkillDetailPropss) => {
    const [SkillsRes, setSkillsRes] = useState<any>([])
    const [ChangedData, setChangedData] = useState<any>(null);

    const deleteSkill = async (deleteId:string)=>{

        // let data = SkillsRes[0].allSkill.filter((currElm:any)=> currElm._id != deleteId);
        // console.log("this is my data",data);
        // setChangedData(data);
        
        const res = await deleteSkillasPerid({skillId:SkillsRes[0]._id , araaySkillid:deleteId});
        if(res){
            toast.success("Deleted")
            console.log("this is updated data",res);
            setSkillsRes((prevState:any)=> [...prevState , res]);
        }else{
            toast.error("Some error occured");
        }
    }


    useEffect(()=>{
        const getSkills =async()=>{
            const res = await getSkillUsingclerkId(data);
            if(res){
                console.log(res);
                
                setSkillsRes(res);
            }
        }
        getSkills();
    } , []);

  return ( 
     <div className='min-h-screen w-full' >
        
    <Toaster className='z-30 absolute' position='top-center' richColors duration={2000} />
        <div className='h-20 w-full border-b flex justify-between items-center  md:px-12 px-4 ' >
               <div>
               <h1 className='md:text-lg text-sm md:font-semibold font-medium text-zinc-800' >Your Skills</h1>
                <p className='md:text-sm text-[10px] font-normal text-zinc-600' >Please fill information below given</p>
               </div>

               <div className='flex' >
                    <Button className='flex items-center gap-2' >
                       <Addskill userclerkId={data} />
                    </Button>
               </div>
                </div>


                {/* Skills Card Componenets sections */}

               {
                SkillsRes.length && (
                    <div className='flex gap-4 md:px-12 px-4 flex-wrap'  >
                    {
                        SkillsRes[0].allSkill.map((curr:any)=>{
                            return <div className='md:bg-violet-700 bg-violet-300 md:px-4 mt-4 md:py-2 px-2 py-1 rounded relative'>
                                        <h1 className='md:text-white text-violet-800 text-sm md:text-lg' >{curr.userSkill}</h1>
                                        <div className='absolute top-[-7px] h-5 w-5 bg-white rounded-full right-[-7px] border-[1px] border-zinc-400 flex justify-center items-center' >
                                           <Trash onClick={()=>{
                                            deleteSkill(curr._id);
                                           }} className='text-red-500' size={10} />

                                        </div>
                            </div>
                        })
                    }
            </div>
                )
               }
    </div>
  )
}

export default SkillDetail
