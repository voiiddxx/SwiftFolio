"use client"

import React, { useEffect, useState } from 'react'
import { Boxes, Briefcase, Flame, Gem, GraduationCap, LucideWorkflow, Network, Option, School, Sidebar, Trophy, User, WorkflowIcon } from 'lucide-react'
import PersonolDetail from './PersonolDetail'
import SchoolingDetail from './SchoolingDetail'
import ProjectDetailing from './ProjectDetailing'
import AchivementDetail from './AchivementDetail'
import CustomDetailing from './CustomDetailing'
import { getProjectByclerkId } from '@/lib/actions/project.action'
import SkillDetail from './SkillDetail'
import { getSchoolasperClerkId } from '@/lib/actions/school.action'
import { getCollegeasPerClerkId } from '@/lib/actions/education.action'
import { getWorkExperinceAsPerclerkId } from '@/lib/actions/work.action'
import WorkExperince from './WorkExperince'
import Header from '../Header'
import Image from 'next/image'

    type DashBoardProps = {
        userId: any
    }
const DashBoard = ({userId} : DashBoardProps) => {
            const [IsAdmin, setIsAdmin] = useState<boolean>(false);
            const [SchoolData, setSchoolData] = useState<any>([]);
            const [College, setCollege] = useState<any>([]);
            const [work, setwork] = useState<any>([]);


    useEffect(()=>{ 
        const CheckingAdminorNot = async()=>{
            const res = await getProjectByclerkId(userId);
            if(res){
                if(res[0].clerkId == userId){
                    setIsAdmin(true);
                }
            }
        }

        const getSchoolData = async()=>{
            const res = await getSchoolasperClerkId(userId);
            if(res){
                setSchoolData(res);
            }   
        }

        const getCollegeData = async ()=>{
            const res = await getCollegeasPerClerkId(userId);
            if(res){
                setCollege(res);

            }
        }

        const getWorkData = async()=>{
            const res = await getWorkExperinceAsPerclerkId(userId);
            if(res){
                setwork(res);
            }
        }
        CheckingAdminorNot();
        getSchoolData();
        getCollegeData();
        getWorkData();
    } , []);



    const [sideBarOption, setsideBarOption] = useState<string>("persenol");

  return (
    <div className='min-h-screen w-full  bg-white   bg-dot-black/[0.2] ' >
        <div className='w-full  border-b'>
            <Header/>
        </div>
        
        {/* edit form componenet places here */}
            {
                IsAdmin && (
                    
        <div className='min-h-screen   bg-white shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] md:mt-10 mt-4 border-[1px] border-zinc-100 rounded-md flex md:mx-32 mx-4 ' >
        {/* sidebar for section transistions */}
        <div className=' md:w-80 w-24 bg-white border-r' >
            {/* upper heading of sidebar */}
            <div className='h-20 w-full border-b flex items-center md:justify-start justify-center px-2' >
                <div className='hidden md:block' >
                <div className=' flex items-center gap-1' >
                    <Flame className='text-violet-700' strokeWidth={1.5}/>
                    <h1 className='text-md font-semibold hidden md:block' >Sections</h1>
                </div>
                </div>
                <div className='h-12 w-12 md:hidden' >
                    <Image className='h-full w-full object-contain' src="/logo.svg" height={500} width={500} alt='logo' />
                </div>
            </div>

            {/* all the components below downs */}
            <div onClick={()=>{
                setsideBarOption("persenol")
            }} className='h-14 w-full cursor-pointer hover:bg-slate-50  flex justify-center md:justify-between items-center px-4 ' >
                <div className='flex items-center gap-2' >
                <User className='text-violet-700' size={17} />
                <p className='text-sm font-medium hidden md:block' >Personol Data </p>
                </div>
                
            </div>
            <div onClick={()=>{
                setsideBarOption("Schooling");
            }}  className='h-14 w-full cursor-pointer hover:bg-slate-200  flex justify-center md:justify-between items-center px-4' >
                <div  className='flex items-center gap-2' >
                <School className='text-violet-700' size={17} />
                <p className='text-sm font-medium hidden md:block' >Qualification</p>
                </div>
                
            </div>
            
            <div onClick={()=>{
                setsideBarOption("Work")
            }} className='h-14 w-full cursor-pointer hover:bg-slate-200  flex justify-center md:justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <Briefcase className='text-violet-700' size={17} />
                <p className='text-sm font-medium md:block hidden' >Work Experince</p>
                </div>
                
            </div>
            <div onClick={()=>{
                setsideBarOption("Project")
            }} className='h-14 w-full cursor-pointer hover:bg-slate-200  flex justify-center md:justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <Boxes className='text-violet-700' size={17} />
                <p className='text-sm font-medium md:block hidden' >Projects</p>
                </div>
                
            </div>
            <div  onClick={()=>{
                setsideBarOption("Ach");
            }}  className='h-14 w-full cursor-pointer hover:bg-slate-200  flex justify-center md:justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <Trophy className='text-violet-700' size={17} />
                <p className='text-sm font-medium md:block hidden' >Achievments</p>
                </div>
                
            </div>
            <div  onClick={()=>{
                setsideBarOption("Skill");
            }}  className='h-14 w-full cursor-pointer hover:bg-slate-200  flex justify-center md:justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <Network className='text-violet-700' size={17} />
                <p className='text-sm font-medium md:block hidden' >Skills</p>
                </div>
                
            </div>
            <div  onClick={()=>[
                setsideBarOption("1")
            ]} className='h-14 w-full cursor-pointer hover:bg-slate-200  flex justify-center md:justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <Gem className='text-violet-700' size={17} />
                <p className='text-sm font-medium md:block hidden' >Custom Sections</p>
                </div>
            </div>
            
            

        </div>
        {/* SIDEBAR SECTION END HERE */}

        {
            sideBarOption == "persenol" && (
                <div className='w-full' >
                     <PersonolDetail userId={userId} />
                </div>
            )
        }
        {
            sideBarOption == "Schooling" && (
                <div className='w-full' >
                     <SchoolingDetail userId={userId} school={SchoolData} college={College}  />
                </div>
            )
        }
        {
            sideBarOption == "Project" && (
                <div className='w-full' >
                     <ProjectDetailing userId={userId} />
                </div>
            )
        }
        {
            sideBarOption == "Ach" && (
                <div className='w-full' >
                     <AchivementDetail userId={userId}/>
                </div>
            )
        }
        {
            sideBarOption == "1" && (
                <div className='w-full' >
                     <CustomDetailing data={userId} />
                </div>
            )
        }
        {
            sideBarOption == "Skill" && (
                <div className='w-full' >
                     <SkillDetail data={userId} />
                </div>
            )
        }
        {
            sideBarOption == "Work" && (
                <div className='w-full' >
                     <WorkExperince userId={userId} work={work} key={userId} />
                </div>
            )
        }
      

        
    </div>
  
                )
            }
    </div>
  )
}

export default DashBoard
