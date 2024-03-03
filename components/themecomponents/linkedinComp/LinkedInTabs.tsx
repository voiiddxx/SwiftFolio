import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ArrowRightSquare } from 'lucide-react';

const LinkedInTabs = () => {
    const res = [2,4,5];
  return (
    <div className='min-h-44 px-12 pt-7' >
      <Tabs defaultValue="project" className="">
  <TabsList>
    <TabsTrigger value="project">Projects</TabsTrigger>
    <TabsTrigger value="achivement">Achivements</TabsTrigger>
    <TabsTrigger value="custom">UI Designs</TabsTrigger>
  </TabsList>
  <TabsContent value="project">
    {/* Projets Part */}
    <div className='mt-5 flex flex-col gap-4' >
        {
            res.map((curr : any)=>{
                return <div className='flex gap-8' >
                    <div className='w-36 h-28  rounded-md border-[1px] border-zinc-300 px-2 py-2' >
                <div className='bg-red-300 h-full w-full rounded-sm' ></div>
                    </div>
                    <div className='w-full mt-2' >
                        <h1 className='text-indigo-700 font-medium' >SwiftFolio | Just One Click</h1>
                        <p className='text-sm text-zinc-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur illum eos autem quae quasi unde ullam voluptas amet officiis, esse veniam et cupiditate aliquid quaerat excepturi dolorum, neque fuga.</p>
                        <div className='w-full flex justify-end text-indigo-600' >
                            <ArrowRight className='hover:animate-bounce'  size={15}/>
                        </div>


                    </div>
                </div>
            })
        }
    </div>
  </TabsContent>
  <TabsContent value="achivement">
    {/* Achivement Sections */}
    <div className='mt-5 flex flex-col gap-4' >
        {
            res.map((curr : any)=>{
                return <div className='flex gap-8' >
                    <div className='w-36 h-28  rounded-md border-[1px] border-zinc-300 px-2 py-2' >
                <div className='bg-red-300 h-full w-full rounded-sm' ></div>
                    </div>
                    <div className='w-full mt-2' >
                        <h1 className='text-indigo-700 font-medium' >SwiftFolio | Just One Click</h1>
                        <p className='text-sm text-zinc-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur illum eos autem quae quasi unde ullam voluptas amet officiis, esse veniam et cupiditate aliquid quaerat excepturi dolorum, neque fuga.</p>
                        <div className='w-full flex justify-end text-indigo-600' >
                            <ArrowRight className='hover:animate-bounce' size={15}/>
                        </div>


                    </div>
                </div>
            })
        }
    </div>
  </TabsContent>
  <TabsContent value="custom">
    {/* Custom Sections Sections */}
    <div className='mt-5 flex flex-col gap-4' >
        {
            res.map((curr : any)=>{
                return <div className='flex gap-8' >
                    <div className='w-36 h-28  rounded-md border-[1px] border-zinc-300 px-2 py-2' >
                <div className='bg-red-300 h-full w-full rounded-sm' ></div>
                    </div>
                    <div className='w-full mt-2' >
                        <h1 className='text-indigo-700 font-medium' >SwiftFolio | Just One Click</h1>
                        <p className='text-sm text-zinc-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur illum eos autem quae quasi unde ullam voluptas amet officiis, esse veniam et cupiditate aliquid quaerat excepturi dolorum, neque fuga.</p>
                        <div className='w-full flex justify-end text-indigo-600' >
                            <ArrowRight className='hover:animate-bounce' size={15}/>
                        </div>


                    </div>
                </div>
            })
        }
    </div>
  </TabsContent>
</Tabs>

    </div>
  )
}

export default LinkedInTabs
