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
    <div className='min-h-screen w-full px-24' >
        <div className='h-20 w-full  border-b'></div>
        
        {/* edit form componenet places here */}
            {
                IsAdmin && (
                    
        <div className='min-h-screen w-full bg-white shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px] mt-10 border-[1px] border-zinc-300 rounded-lg flex ' >
        {/* sidebar for section transistions */}
        <div className='px-1 w-80 bg-white border-r' >
            {/* upper heading of sidebar */}
            <div className='h-20 w-full border-b flex items-center justify-start px-2' >
                <div className=' flex items-center gap-1' >
                    <Flame/>
                    <h1 className='text-lg font-semibold' >Sections</h1>
                </div>
            </div>

            {/* all the components below downs */}
            <div onClick={()=>{
                setsideBarOption("persenol")
            }} className='h-14 w-full  flex justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <User size={17} />
                <p className='text-sm font-medium' >Personol Data</p>
                </div>
                <p>1</p>
            </div>
            <div onClick={()=>{
                setsideBarOption("Schooling");
            }}  className='h-14 w-full  flex justify-between items-center px-4' >
                <div  className='flex items-center gap-2' >
                <School size={17} />
                <p className='text-sm font-medium' >Qualification</p>
                </div>
                <p>2</p>
            </div>
            
            <div className='h-14 w-full  flex justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <Briefcase size={17} />
                <p className='text-sm font-medium' >Work Experince</p>
                </div>
                <p>1</p>
            </div>
            <div onClick={()=>{
                setsideBarOption("Project")
            }} className='h-14 w-full  flex justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <Boxes size={17} />
                <p className='text-sm font-medium' >Projects</p>
                </div>
                <p>5</p>
            </div>
            <div  onClick={()=>{
                setsideBarOption("Ach");
            }}  className='h-14 w-full  flex justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <Trophy size={17} />
                <p className='text-sm font-medium' >Achievments</p>
                </div>
                <p></p>
            </div>
            <div  onClick={()=>{
                setsideBarOption("Skill");
            }}  className='h-14 w-full  flex justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <Network size={17} />
                <p className='text-sm font-medium' >Skills</p>
                </div>
                <p></p>
            </div>
            <div  onClick={()=>[
                setsideBarOption("1")
            ]} className='h-14 w-full  flex justify-between items-center px-4' >
                <div className='flex items-center gap-2' >
                <Gem size={17} />
                <p className='text-sm font-medium' >Custom Sections</p>
                </div>
                <p>1</p>
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
                     <SchoolingDetail userId={userId} school={SchoolData} college={College} work={work} />
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
      

        
    </div>
  
                )
            }
    </div>
  )
}

export default DashBoard
