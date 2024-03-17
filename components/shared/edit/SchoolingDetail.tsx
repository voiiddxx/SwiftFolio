"use client";
import { Button } from "@/components/ui/button";
import { Brain, GraduationCap, MoreVerticalIcon, Plus, School, Trash } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Schooling from "../schooling/Schooling";
import {
  deletSchoolWithId,
  getSchoolasperClerkId,
} from "@/lib/actions/school.action";
import { ICollege } from "@/lib/database/models/education.model";
import College from "../college/College";
import { DeleteCollegeAsPerId } from "@/lib/actions/education.action";
import { ISchool } from "@/lib/database/models/school.model";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";

type SchoolDetailingProps = {
  userId: string;
  school: any;
  college: any;
};

const SchoolingDetail = ({ userId, school, college }: SchoolDetailingProps) => {
  const handleSchoolDelte = async (deleteId: string) => {

    const SchoolButton = useRef<any>(null);

    const handleSchoolButton=()=>{
      SchoolButton.current.click();
    }

    const deleted = await deletSchoolWithId({
      schoolId: school[0]._id,
      deleteId: deleteId,
    });

    if (deleted) {
      window.location.reload();
    } else {
      console.log("some error occured");
    }
  };


  const renderSchoolForm = ()=>{
    return <Schooling type="ADD" userId="54" key="46" schoolId={2451} />
  }

  const handleDelete = async (deleteId: string) => {
    const data = await DeleteCollegeAsPerId({
      collegeId: college[0]._id,
      deleteId: deleteId,
    });
  };

  return (
    <div className="w-full min-h-screen overflow-hidden">
      <div className="h-20 w-full border-b flex justify-center  md:px-12 px-4 flex-col">
        <div>
          <h1 className="md:text-lg text-sm md:font-semibold font-medium text-zinc-800">
            Qualification Information
          </h1>
          <p className="md:text-sm text-[12px] font-normal text-zinc-500">
            Update your schooling information{" "}
          </p>
        </div>
      </div>

      <div className="pt-8 md:px-12 px-4 flex-wrap border-b bg-slate-50 pb-10">
        {school.length && (
          <div className="w-full flex gap flex-col">
            <div className="flex justify-between">
              <div>
                <h1 className="md:text-xl text-sm md:font-semibold font-normal">Schooling</h1>
                <p className="md:text-sm text-zinc-500 mb-4 text-[10px] ">
                  Your Schooling information given below
                </p>
              </div>
              <div>
                <Button>
                  <div className="flex items-center justify-center" >
                  <Schooling  type="ADD" userId={userId} key={userId} />
                  </div>
                </Button>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap" >
            {school[0].school.map((curr: ISchool) => {
              return (
                <div className="min-h-[150px] w-[300px] bg-white rounded-lg px-4 py-4 shadow-[0px_20px_83px_10px_#f7fafc]">
                  <div className="flex justify-between items-center" >
                  <div className="h-12 w-12 bg-violet-100 rounded-3xl flex justify-center items-center">
                    <Brain
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
                          handleSchoolDelte(curr._id);
                        }} className="h-16 border-b flex gap-2 cursor-pointer items-center text-red-600">
                          <Trash size={17} strokeWidth={1.5} />
                          <p className="text-sm font-medium" >Delete</p>
                        </div>
                       
                      </PopoverContent>
                    </Popover>
                  </div>
                  </div>

                  <h1 className="text-violet-500 font-medium text-sm mt-4">
                    {curr.schoolName}
                  </h1>
                  <p className="text-xl mt-1 font-medium text-zinc-700">
                    {curr.schoolClass}
                  </p>
                  <p className="text-[13px] text-zinc-500 mt-1 ">2021</p>

                  <p className="text-[10px] text-zinc-400 mt-1 leading-4 ">
                    {curr.extraDetail}
                  </p>
                </div>
              );
            })}

            </div>
                     </div>
        )}
      </div>
      {/*  COLLEGE COMPONENT SECTION */}

      <div className="pt-8 md:px-12 px-4  flex-wrap border-b bg-slate-50 pb-10">
        {college.length && (
          <div className="w-full flex gap flex-col">
            <div className="flex justify-between">
              <div>
                <h1 className="md:text-xl text-sm md:font-semibold font-normal">College</h1>
                <p className="md:text-sm text-[10px] text-zinc-500 mb-4">
                  Your College information given below
                </p>
              </div>
              <div>
                <Button>
                 <div className="flex items-center justify-center" >
                 <College type="ADD" userId={userId} key={userId} />
                 </div>
                </Button>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap" >
            {college[0].college.map((curr: ICollege) => {
              return (
                <div className="min-h-[150px] w-[300px] bg-white rounded-lg px-4 py-4 shadow-[0px_20px_83px_10px_#f7fafc]">
                  <div className="flex justify-between items-center" >
                  <div className="h-12 w-12 bg-violet-100 rounded-3xl flex justify-center items-center">
                    <GraduationCap
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
                        <div className="h-16 border-b flex gap-2 items-center">
                        <div onClick={()=>{
                          handleDelete(curr._id);
                        }} className="h-16 border-b flex gap-2 cursor-pointer items-center text-red-600">
                          <Trash size={17} strokeWidth={1.5} />
                          <p className="text-sm font-medium" >Delete</p>
                        </div>
                        </div>
                        
                      </PopoverContent>
                    </Popover>
                  </div>
                  </div>

                  <h1 className="text-violet-500 font-medium text-sm mt-4">
                    {curr.instituteName}
                  </h1>
                  <p className="text-xl mt-1 font-medium text-zinc-700">
                    {curr.degree}
                  </p>
                  <p className="text-[13px] text-zinc-500 mt-1 ">{curr.batchStartDate} - {curr.batchEndDate}</p>

                  <p className="text-[10px] text-zinc-400 mt-1 leading-4 ">
                    {curr.extraDetail}
                  </p>
                </div>
              );
            })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SchoolingDetail;
