"use client";
import { Button } from "@/components/ui/button";
import { Brain, GraduationCap, MoreVerticalIcon, Plus, School } from "lucide-react";
import React, { useEffect, useState } from "react";
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

  const handleDelete = async (deleteId: string) => {
    const data = await DeleteCollegeAsPerId({
      collegeId: college[0]._id,
      deleteId: deleteId,
    });
  };

  return (
    <div className="w-full min-h-screen">
      <div className="h-20 w-full border-b flex justify-center  px-12 flex-col">
        <div>
          <h1 className="text-lg font-semibold text-zinc-800">
            Qualification Information
          </h1>
          <p className="text-sm font-normal text-zinc-600">
            Update your schooling information{" "}
          </p>
        </div>
      </div>

      <div className="pt-8 px-12  flex-wrap border-b bg-slate-50 pb-10">
        {school.length && (
          <div className="w-full flex gap flex-col">
            <div className="flex justify-between">
              <div>
                <h1 className="text-xl font-semibold">Schooling</h1>
                <p className="text-sm text-zinc-500 mb-4">
                  Your Schooling information given below
                </p>
              </div>
              <div>
                <Button>
                  <Plus color="white" strokeWidth={1.75} size={18} />
                  <Schooling type="ADD" userId={userId} key={userId} />
                </Button>
              </div>
            </div>
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
                        <div className="h-16 border-b flex gap-2 items-center">
                          
                        </div>
                        <div className="h-16 border-b flex gap-2 items-center">
                      
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
        )}
      </div>
      {/*  COLLEGE COMPONENT SECTION */}

      <div className="pt-8 px-12  flex-wrap border-b bg-slate-50 pb-10">
        {college.length && (
          <div className="w-full flex gap flex-col">
            <div className="flex justify-between">
              <div>
                <h1 className="text-xl font-semibold">College</h1>
                <p className="text-sm text-zinc-500 mb-4">
                  Your College information given below
                </p>
              </div>
              <div>
                <Button>
                  <Plus color="white" strokeWidth={1.75} size={18} />
                  <College type="ADD" userId={userId} key={userId} />
                </Button>
              </div>
            </div>
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
                          
                        </div>
                        <div className="h-16 border-b flex gap-2 items-center">
                      
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
        )}
      </div>
    </div>
  );
};

export default SchoolingDetail;
