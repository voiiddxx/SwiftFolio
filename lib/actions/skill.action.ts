"use server"

import { addSkillParams, deleteskillParams } from "@/types";
import Skill from "../database/models/skills.model";
import connectToDatabase from "../database/mongodb";


export const addSkilltoDatabase = async ({skill , clerkId} : addSkillParams) => {
    try {
        await connectToDatabase();
        const isSkill = await Skill.find({clerkId:clerkId});
        if(isSkill.length<1){
            const response = await Skill.create({clerkId:clerkId});
            await response.allSkill.push({userSkill:skill.userSkill});
            await response.save();
            return JSON.parse(JSON.stringify(response));
        }else{
            await isSkill[0].allSkill.push({userSkill:skill.userSkill});
            await isSkill[0].save();
            return JSON.parse(JSON.stringify(isSkill[0]));

        }
    } catch (error) {
        throw new Error(error as string);
    }
}




export const getSkillUsingclerkId = async (clerkId: string) => {
    try {
        await connectToDatabase();
        const skills = await Skill.find({clerkId:clerkId});
        return JSON.parse(JSON.stringify(skills));
    } catch (error) {
        throw new Error(error as string);
    }
}


// SERVER ACTION FOR DELTING THE SKILL

export const deleteSkillasPerid = async({clerkid , skillId , araaySkillid}  : deleteskillParams)=>{
    try {
        await connectToDatabase();
        const skills = await Skill.findByIdAndUpdate({
            '_id':skillId,
        } , {
            $pull:{
                'allSkill':{
                    '_id':araaySkillid
                }
            },
            'multi':false
        },
        {
            new:true
        }
        );
        if(!skills){
            return JSON.parse(JSON.stringify({message:"Some issue occured"}));
        }
        return JSON.parse(JSON.stringify(skills));
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
        
    }
}


// await connectToDatabase();
// const deletedData = await School.findByIdAndUpdate({
//     '_id':schoolId,
// } , 
// {
//     $pull:{
//         'school':{
//             '_id':deleteId
//         }
//     },
//     'multi':false
// });