"use server"

import { addSkillParams } from "@/types";
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