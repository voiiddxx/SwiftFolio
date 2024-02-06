"use server"

import { addSkillParams } from "@/types";
import Skill from "../database/models/skills.model";
import connectToDatabase from "../database/mongodb";


export const addSkilltoDatabase = async ({skill} : addSkillParams) => {
    try {
        await connectToDatabase();
        const skills = await Skill.create({...skill});
        return JSON.parse(JSON.stringify(skills));
        

    } catch (error) {
        throw new Error(error as string);
    }
}