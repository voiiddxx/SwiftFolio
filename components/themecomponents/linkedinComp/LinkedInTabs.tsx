import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ArrowRightSquare, Edit, Trash } from 'lucide-react';
import Image from 'next/image';
import Addproject from '@/components/shared/projects/Addproject';
import DeleteSection from '@/components/shared/delete/DeleteSection';
import Addachivement from '@/components/shared/achievements/Addachivement';
import CustomFieldform from '@/components/shared/custom/CustomFieldform';

    type LinkedinProps = {
        project:any
        achivement:any 
        custom:any
        admin:any
        userid:any
    }
const LinkedInTabs = ({achivement , custom , project , admin , userid} : LinkedinProps) => {


    console.log("this is custom section" , custom);
    
    const res = [2,4,5];
  return (
    <div className='min-h-44 px-12 pt-7' >
      <Tabs defaultValue="project" className="">
  <TabsList> 
    {project.length > 0 && (
        <TabsTrigger value="project">Projects</TabsTrigger>
    )}
    {achivement.length > 0 && (
         <TabsTrigger value="achivement">Achivements</TabsTrigger>
    )}
   
    {
        custom.length > 0 && (
            <div>
                {
                    custom.map((curr:any)=>{
                        return <TabsTrigger value={curr.heading}>{curr.heading}</TabsTrigger>
                    })
                }
            </div>
        )
    }
  </TabsList>
  <TabsContent value="project">
    {/* Projets Part */}
    <div className='mt-5 flex flex-col gap-4 pb-8 border-b' >
        {
            project.map((curr : any)=>{
                return <div className='flex gap-8 flex-col md:flex-row' >
                    <div className='w-36 h-28  rounded-md border-[1px] border-zinc-300 px-2 py-2' >
                <div className='bg-red-300 h-full w-full rounded-sm' >
                    <Image className='h-full w-full rounded object-cover' src={curr.projectthumbnail} height={800} width={800} alt='project image'/>
                </div>
                    </div>
                    <div className='w-full mt-2' >
                        <div className=' flex gap-2 items-center' >
                        <h1 className='text-indigo-600 font-medium' >{curr.projectname}</h1>
                        <p className='text-[10px] bg-yellow-100 text-yellow-900 px-2 py-1 rounded-full' >{curr.projectstatus}</p>
                        </div>
                        <p className='text-sm text-zinc-600' >{curr.projectdetail}</p>
                        <div className='w-full flex justify-end text-indigo-600' >
                            <ArrowRight className='hover:animate-bounce'  size={15}/>
                        </div>

                        {
    admin===true ?  <div className='w-full flex justify-between'>
      
    <div className='px-2 mx-3 bg-gray-700 bg-opacity-20 my-2 py-1 flex justify-center items-center gap-3 rounded-md'>
                <Edit size={15}/>
                {/* <p className='text-[12px] text-orange-300'>Edit</p> */}
                <Addproject type='EDIT'  useridclerk={userid} projectId={curr._id}/>
              </div>
              
              <div className='px-2 mx-3 bg-gray-700 bg-opacity-20 my-2  py-1 flex justify-center items-center gap-3 rounded-md'>
                <Trash size={15}/>
                <DeleteSection type='PROJECT' deleteId={curr._id} />
              </div>
    </div> : <div></div>
   }
                    </div>
                </div>
            })
        }
    </div>
  </TabsContent>
  <TabsContent value="achivement">
    {/* Achivement Sections */}
    <div className='mt-5 flex flex-wrap gap-4' >
        {
            achivement.map((curr : any)=>{
                return <div className='w-[300px] relative'  >
                    {
                  admin==false ?  <h1></h1>
               
                   : <div><div className='h-8 w-8 bg-white absolute  top-2 right-2 rounded-md flex items-center justify-center'>
                   <Addachivement type='EDIT' achivementId={curr._id} useridclerk={userid} />
                   </div>
                   <div className='h-8 w-8 bg-white absolute  top-2 right-12 rounded-md flex items-center justify-center'>
                   <DeleteSection deleteId={curr._id} type='ACHIVEMENT'/>
                   </div></div>

                }
                    <div className='h-[250px] w-[300px] rounded-md border-[1px] px-2 py-2' >
                    <div className='h-full w-full bg-red-200 rounded' >
                        <Image className='h-full w-full rounded object-cover'  src={curr.aimage} height={900} width={900} alt='achivement image' />
                    </div>

                </div>
              <div className='flex justify-between mt-3 gap-4' >  <p className='text-sm' >{curr.acaption}</p>
                <ArrowRight className='text-blue-700 animate-bounce' size={15} /></div>
                </div>
            })
        }
    </div>
  </TabsContent>
  {
    custom.map((curr:any)=>{
        return <TabsContent value={curr.heading}>
    {/* Custom Sections Sections */}
    <div className='mt-5 flex flex-wrap gap-4' >
        {
            curr.data.map((card : any)=>{
                return <div className='w-[300px]'  >
                <div className='h-[250px] w-[300px] rounded-md border-[1px] px-2 py-2' >
                <div className='h-full w-full bg-red-200 rounded relative' >
                    <Image className='h-full w-full rounded object-cover'  src={card.customImage} height={900} width={900} alt='achivement image' />
                    {
                            admin == true ? <div>
                               <div className='h-8 w-8 bg-white absolute top-2 right-2 rounded-md flex justify-center items-center pt-1' >
                              <CustomFieldform customId={curr._id} type='EDIT' useridclerk="550"  />
                            </div>
                            <div className='h-8 w-8 bg-white absolute top-2 right-12 rounded-md flex justify-center items-center pt-1' >
                              <DeleteSection deleteId={curr._id}  additionsId={card._id} type='CUSTOM'/>
                            </div>
                            </div> : <div></div>
                           }
                </div>

            </div>
          <div className='flex justify-between mt-3' >  <p className='text-sm' >{card.customTitle}</p>
            <ArrowRight className='text-blue-700 animate-bounce' size={15} /></div>
            </div>
            })
        }
    </div>
  </TabsContent>
    })
  }
</Tabs>

    </div>
  )
}

export default LinkedInTabs
