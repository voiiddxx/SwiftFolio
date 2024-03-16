"use client"
import { Button } from '@/components/ui/button'
import { deleteSkillasPerid, getSkillUsingclerkId } from '@/lib/actions/skill.action'
import { Plus, Trash } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'


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
        <div className='h-20 w-full border-b flex justify-between items-center  px-12 ' >
               <div>
               <h1 className='text-lg font-semibold text-zinc-800' >Customize Your Skills</h1>
                <p className='text-sm font-normal text-zinc-600' >Please fill information below given</p>
               </div>

               <div className='flex' >
                    <Button className='flex items-center gap-2' >
                        <Plus size={18} />
                        Add Your Skills
                    </Button>
               </div>
                </div>


                {/* Skills Card Componenets sections */}

               {
                SkillsRes.length && (
                    <div className='flex gap-4 px-12 flex-wrap'  >
                    {
                        SkillsRes[0].allSkill.map((curr:any)=>{
                            return <div className='bg-violet-700 px-4 mt-4 py-2 rounded relative'>
                                        <h1 className='text-white' >{curr.userSkill}</h1>
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
