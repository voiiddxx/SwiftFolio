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
        const res = await getPortfolioBasedonuserClerkId(userId);
        if(res){
            console.log(res);
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
    const getWork = async()=>{
        const res = await getWorkExperinceAsPerclerkId(userId);
        if(res){
            console.log(res);
            
            setwork(res);
        }else{
            console.log("Error while getting data of user work experince");
            
        }
    }

    // GETTING COLLEGE OF USER
    const getUserCollege = async()=>{
        const res = await getCollegeasPerClerkId(userId);
        if(res){
            console.log(res);
            
            setcollege(res);
        }else{
            console.log("Error while getting data of user college ");
            
        }

    }
    // GETTING USER SCHOOLDATA
    const getUserSchool =async()=>{
        const res = await getSchoolasperClerkId(userId);
        if(res){
            console.log(res);
            
            setschool(res);
        }else{
            console.log("Error while getting data of user school");
            
        }

    }
    
    // GETTING DATA OF USER PROJECTS
    const getProject = async()=>{
        const res = await getProjectByclerkId(userId);
        if(res){
            console.log(res);
            
            setprojects(res);
        }else{
            console.log("Error while getting ptrojects");
            
        }
    }

    // GETTING DATA OF USER ACHIVEMENTS

    const getAchivements = async()=>{
        const res = await getAcheivemtUSingClerkid(userId);
        if(res){
            console.log(res);
            
            
            setachivements(res);
        }else{
            console.log("Error while getting achivements data");
            
        }
    }
    // GETTING DATA OF USER CUSTOM
    const getCustomData = async ()=>{
        const res = await getCustomSection(userId);
        if(res){
            console.log(res);
            
            setcustom(res);
        }else{
            console.log("Error while getting custom data");
            
        }
    }
    // GETTING DATA OF USER SKILLS
    const getSkill = async()=>{
        const res = await getSkillUsingclerkId(userId);
        if(res){
            console.log(res);
            
            setSkill(res);
        }else{
            console.log("Error while getting skill data");
            
        }
    }


    useEffect(()=>{
        getPortFolio();
        getUserSchool();
        getUserCollege();
        getUserSchool();
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
            </div> : <div>
                <h1>Opps I think data is loading</h1>
            </div>
           }
        </div>
    )
}

export default DarkIndex
