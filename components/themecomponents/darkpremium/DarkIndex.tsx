"use client"

import { getAcheivemtUSingClerkid } from '@/lib/actions/achivement.action';
import { getCustomSection } from '@/lib/actions/custom.action';
import { getCollegeasPerClerkId } from '@/lib/actions/education.action';
import { getPortfolioBasedonuserClerkId } from '@/lib/actions/portfolio.action';
import { getProjectByclerkId } from '@/lib/actions/project.action';
import { getSchoolasperClerkId } from '@/lib/actions/school.action';
import { getSkillUsingclerkId } from '@/lib/actions/skill.action';
import { getWorkExperinceAsPerclerkId } from '@/lib/actions/work.action';
import React, { useEffect, useState } from 'react'
import DarkpremHero from './DarkpremHero';
import DarkQualification from './DarkQualification';
import DarkProject from './DarkProject';
import Darkachivement from './Darkachivement';
import DarkCustom from './DarkCustom';
import DarkSkill from './DarkSkill';
import Darkfooter from './Darkfooter';
import { Loader, Rotate3D } from 'lucide-react';

    type darkIndexProps = {
        userId:any
    };
const DarkIndex = ({userId} :darkIndexProps) => {
    const [admin, setadmin] = useState<boolean>(false);
    const [portfolio, setportfolio] = useState<any>(null);
    const [work, setwork] = useState<any>(null);
    const [school, setschool] = useState<any>([]);
    const [college, setcollege] = useState<any>(null)
    const [projects, setprojects] = useState<any>(null)
    const [achivements, setachivements] = useState<any>(null)
    const [custom, setcustom] = useState<any>(null)
    const [Skill, setSkill] = useState<any>(null);


    // GETTING DATA OF USER PORTFOLIO

    const getPortFolio =async()=>{
        alert("checking that we are getting uderid pr not" + userId);
        const res = await getPortfolioBasedonuserClerkId(userId);
        if(res){
            console.log("this is the data of res" , res);
            alert(`${JSON.stringify(res)}`);
            if(res[0].clerkId == userId){
                setadmin(true);
            }
            setportfolio(res);
        }
        else{
            console.log("Error while getting data");
            
        }
    }

    //  GETTING WORK OF USER
    const getUserWork = async()=>{
        const res = await getWorkExperinceAsPerclerkId(userId);
        if(res){
            setwork(res);
        }else{
            console.log("Error while getting data of user work experince");
            
        }
    }

    // GETTING COLLEGE OF USER
    const getUserCollege = async()=>{
        const res = await getCollegeasPerClerkId(userId);
        if(res){
            setcollege(res);
        }else{
            console.log("Error while getting data of user college ");
            
        }

    }
    // GETTING USER SCHOOLDATA
    const getUserSchool =async()=>{
        const res = await getSchoolasperClerkId(userId);
        if(res){
            setschool(res);
        }else{
            console.log("Error while getting data of user school");
            
        }

    }
    
    // GETTING DATA OF USER PROJECTS
    const getProject = async()=>{
        const res = await getProjectByclerkId(userId);
        if(res){
            setprojects(res);
        }else{
            console.log("Error while getting ptrojects");
            
        }
    }

    // GETTING DATA OF USER ACHIVEMENTS

    const getAchivements = async()=>{
        const res = await getAcheivemtUSingClerkid(userId);
        if(res){
            setachivements(res);
        }else{
            console.log("Error while getting achivements data");
            
        }
    }
    // GETTING DATA OF USER CUSTOM
    const getCustomData = async ()=>{
        const res = await getCustomSection(userId);
        if(res){
            setcustom(res);
        }else{
            console.log("Error while getting custom data");
            
        }
    }
    // GETTING DATA OF USER SKILLS
    const getSkill = async()=>{
        const res = await getSkillUsingclerkId(userId);
        if(res){
            setSkill(res);
        }else{
            console.log("Error while getting skill data");
            
        }
    }


    useEffect(()=>{
        getPortFolio();
        getUserSchool();
        getUserCollege();
        getUserWork();
        getProject();
        getAchivements();
        getCustomData();
        getSkill();
    } , []);


    return (
        <div>
           {
            portfolio != null ? <div>
                <DarkpremHero data={portfolio[0]} adminData={admin} userId={userId} key={userId} />
            </div> : <div className="min-h-screen w-full flex justify-center items-center flex-col" >
                <div className='flex justify-center items-center gap-2' >
                    <Loader className='animate-spin text-violet-700' size={19} />
                    <p className='text-violet-700 animate-pulse font-medium' >Please Wait Your Portfolio is Rendering</p>
                </div>
    </div>
           }
           {
            work != null ? <div>
                <DarkQualification isAdmin={admin} userCollege={college} userSchool={school} userwork={work} key={userId} />
            </div> : <div>
            </div>
           }
           {
            projects != null ? <div>
                <DarkProject adminData={admin} data={projects} key={userId} />
            </div> : <div className='min-h-screen w-full bg-zinc-900' >
            </div>
           }
           {
            achivements != null ? <div>
                <Darkachivement IsAdmin={admin} achivements={achivements} key={userId} />
            </div> : <div className='min-h-screen w-full bg-zinc-900' >
            </div>
           }
           {
            custom != null ? <div>
                <DarkCustom IsAdmin={admin} customData={custom} key={userId} />
            </div> : <div className='min-h-screen w-full bg-zinc-900' >
            </div>
           }
           {
            portfolio != null ? <div>
                <Darkfooter data={portfolio[0]} key={userId} />
            </div> : <div className='min-h-screen w-full bg-zinc-900' >
            </div>
           }
        </div>
    )
}

export default DarkIndex
