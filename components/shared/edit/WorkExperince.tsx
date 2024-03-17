import { Button } from '@/components/ui/button'
import React from 'react'
import WorkForm from '../works/WorkForm'
import { MoreVerticalIcon, Plus, SunIcon, Trash } from 'lucide-react'
import { IWork } from '@/lib/database/models/work.model'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { deleteWorkById } from '@/lib/actions/work.action'


    type WorkExperinceProps = {
        userId:string,
        work:any
    }


   
const WorkExperince = ({userId , work}:WorkExperinceProps) => {
  const handleWorkDelete = async  (workDeleteId : string)=>{
    const deleted = await deleteWorkById({workId:work[0]._id , deleteId:workDeleteId});
}

  return (
    <div className="w-full min-h-screen ">
      <div className="h-20 w-full border-b flex justify-center  md:px-12 px-4 flex-col border-r">
        <div>
          <h1 className="md:text-lg text-sm md:font-semibold font-medium text-zinc-800">
            Work Experience
          </h1>
          <p className="md:text-sm text-[10px] font-normal text-zinc-600">
            Update your work information
          </p>
        </div>
      </div>

      <div className="pt-8 md:px-12 px-4  flex-wrap border-b bg-slate-50 pb-10">
        {work.length && (
          <div className="w-full flex gap flex-col">
            <div className="flex justify-between">
              <div>
                <h1 className="md:text-xl text-sm md:font-semibold font-normal">Work</h1>
                <p className="md:text-sm text-[10px] text-zinc-500 mb-4">
                  Your Schooling information given below
                </p>
              </div>
              <div>
                <Button>
                  <WorkForm type="ADD" userId={userId} key={userId} />
                </Button>
              </div>
            </div>
           <div className='flex gap-4 flex-wrap' >
           {work[0].work.map((curr: IWork) => {
              return (
                <div className="min-h-[150px] w-[300px] bg-white rounded-lg px-4 py-4 shadow-[0px_20px_83px_10px_#f7fafc]">
                  <div className="flex justify-between items-center" >
                  <div className="h-12 w-12 bg-violet-100 rounded-3xl flex justify-center items-center">
                    <SunIcon
                      className="text-violet-800"
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                  <Popover>
                      <PopoverTrigger>
                        <MoreVerticalIcon className="text-zinc-600" size={17} />
                      </PopoverTrigger>
                      <PopoverContent>
                      <div onClick={()=>{
                          handleWorkDelete(curr._id);
                        }} className="h-16 border-b flex gap-2 cursor-pointer items-center text-red-600">
                          <Trash size={17} strokeWidth={1.5} />
                          <p className="text-sm font-medium" >Delete</p>
                        </div>
                        
                      </PopoverContent>
                    </Popover>
                  </div>
                  </div>

                  <h1 className="text-violet-500 font-medium text-sm mt-4">
                    {curr.companyName}
                  </h1>
                  <p className="text-xl mt-1 font-medium text-zinc-700">
                    {curr.role}
                  </p>
                  <p className="text-[13px] text-zinc-500 mt-1 ">{curr.startDate} - {curr.endDate}</p>

                  <p className="text-[10px] text-zinc-400 mt-1 leading-4 ">
                    {curr.contribution}
                  </p>
                </div>
              );
          })}
           </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default WorkExperince
